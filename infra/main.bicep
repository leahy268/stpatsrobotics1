param staticSiteName string
param location string = resourceGroup().location
param repositoryUrl string
@secure()
param repositoryToken string
param repositoryBranch string = 'main'
param outputLocation string = 'dist'
param appLocation string = 'client'
param sku string = 'Free'
param customDomainName string = 'stpatsrobotics1.info'
param customDomainValidationMethod string = 'dns-txt-token'

var buildConfig = {
  appLocation: appLocation
  apiLocation: ''
  outputLocation: outputLocation
}

module staticSite 'br/public:avm/res/web/static-site:0.8.0' = {
  name: '${staticSiteName}-static'
  params: {
    name: staticSiteName
    location: location
    sku: sku
    repositoryUrl: repositoryUrl
    branch: repositoryBranch
    repositoryToken: repositoryToken
    buildProperties: buildConfig
    managedIdentities: {
      systemAssigned: true
    }
  }
}

resource staticSiteResource 'Microsoft.Web/staticSites@2024-04-01' existing = {
  name: staticSiteName
}

// Deploys the custom domain; add the required DNS TXT record `_dnsauth.<domain>` before running.
resource customDomain 'Microsoft.Web/staticSites/customDomains@2022-03-01' = if (!empty(customDomainName)) {
  parent: staticSiteResource
  name: customDomainName
  properties: {
    validationMethod: customDomainValidationMethod
  }
}

output staticSiteResourceId string = staticSite.outputs.resourceId
output staticSiteDefaultHostname string = staticSite.outputs.defaultHostname
output staticSiteManagedIdentityPrincipalId string = staticSite.outputs.systemAssignedMIPrincipalId ?? ''
