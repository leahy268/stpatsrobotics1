targetScope = 'resourceGroup'

@description('Location for the deployment script resource.')
param location string
@description('Name of the Static Web App whose deployment token will be exported.')
param staticSiteName string
@description('Name of the target Key Vault.')
param keyVaultName string
@description('Secret name to store the Static Web App deployment token.')
param secretName string = 'static-web-app-token'
@description('Resource ID of the user-assigned managed identity with permissions on the Static Web App and Key Vault.')
param userAssignedIdentityId string

var scriptName = '${staticSiteName}-export-token'

resource script 'Microsoft.Resources/deploymentScripts@2020-10-01' = {
  name: scriptName
  location: location
  kind: 'AzureCLI'
  identity: {
    type: 'userAssigned'
    userAssignedIdentities: {
      '${userAssignedIdentityId}': {}
    }
  }
  properties: {
    azCliVersion: '2.55.0'
    timeout: 'PT15M'
    retentionInterval: 'P1D'
    cleanupPreference: 'OnSuccess'
    environmentVariables: [
      {
        name: 'SWA_NAME'
        value: staticSiteName
      }
      {
        name: 'SWA_RG'
        value: resourceGroup().name
      }
      {
        name: 'KEYVAULT_NAME'
        value: keyVaultName
      }
      {
        name: 'SECRET_NAME'
        value: secretName
      }
    ]
    scriptContent: '''
set -euo pipefail

token=$(az staticwebapp secrets list \
  --name "$SWA_NAME" \
  --resource-group "$SWA_RG" \
  --query properties.apiKey \
  --output tsv)

if [ -z "$token" ]; then
  echo "Failed to retrieve Static Web App deployment token" >&2
  exit 1
fi

if az keyvault secret show --vault-name "$KEYVAULT_NAME" --name "$SECRET_NAME" --only-show-errors >/dev/null 2>&1; then
  echo "Secret $SECRET_NAME already exists in Key Vault $KEYVAULT_NAME. Skipping update." >&2
  exit 0
fi

az keyvault secret set \
  --vault-name "$KEYVAULT_NAME" \
  --name "$SECRET_NAME" \
  --value "$token" \
  --only-show-errors \
  >/dev/null

echo "Stored Static Web App deployment token in Key Vault $KEYVAULT_NAME/$SECRET_NAME"
'''
  }
}
