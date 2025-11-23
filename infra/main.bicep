targetScope = 'subscription'

param baseName string = 'stpatsrobotics1'
param location string = deployment().location
param repositoryUrl string
@secure()
param repositoryToken string
param repositoryBranch string = 'main'
param outputLocation string = 'dist'
param appLocation string = 'client'
param customDomainName string = 'stpatsrobotics1.info'
param customDomainValidationMethod string = 'dns-txt-token'
param sku string = 'Standard'
@description('Set to true to copy the Static Web App deployment token into a Key Vault secret once the app is provisioned.')
param exportDeploymentToken bool = false
@description('Name of the existing Key Vault that will store the Static Web App deployment token. Required when exportDeploymentToken is true.')
param keyVaultName string = ''
@description('Key Vault secret name that will hold the Static Web App deployment token.')
param keyVaultSecretName string = 'static-web-app-token'
@description('Resource ID of a user-assigned managed identity with permission to read the Static Web App secrets and write secrets to the target Key Vault. Required when exportDeploymentToken is true.')
param tokenWriterIdentityId string = ''

var normalizedBase = toLower(replace(baseName, '_', '-'))
var resourceGroupName = '${normalizedBase}-swa-rg'
var staticSiteName = toLower(take('${normalizedBase}-${uniqueString(subscription().id, resourceGroupName)}', 40))
var buildConfig = {
  appLocation: appLocation
  apiLocation: ''
  outputLocation: outputLocation
}

resource siteRg 'Microsoft.Resources/resourceGroups@2021-04-01' = {
  name: resourceGroupName
  location: location
}

module staticSite 'br/public:avm/res/web/static-site:0.9.3' = {
  name: '${staticSiteName}-static'
  scope: siteRg
  params: {
    name: staticSiteName
    location: location  
    repositoryUrl: repositoryUrl
    branch: repositoryBranch
    repositoryToken: repositoryToken
    buildProperties: buildConfig
    sku: sku
    managedIdentities: {
      systemAssigned: true
    }
  }
}

module customDomain 'customDomain.bicep' = if (!empty(customDomainName)) {
  name: '${staticSiteName}-customDomain'
  scope: siteRg
  params: {
    staticSiteName: staticSiteName
    customDomainName: customDomainName
    validationMethod: customDomainValidationMethod
  }
}

var shouldExportToken = exportDeploymentToken && !empty(keyVaultName) && !empty(tokenWriterIdentityId)

module tokenExport 'tokenToKeyVault.bicep' = if (shouldExportToken) {
  name: '${staticSiteName}-token-export'
  scope: siteRg
  params: {
    location: location
    staticSiteName: staticSiteName
    keyVaultName: keyVaultName
    secretName: keyVaultSecretName
    userAssignedIdentityId: tokenWriterIdentityId
  }
}

output resourceGroupName string = resourceGroupName
output staticSiteResourceId string = staticSite.outputs.resourceId
output staticSiteDefaultHostname string = staticSite.outputs.defaultHostname
output staticSiteName string = staticSiteName
