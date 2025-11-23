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
    managedIdentities: {
      systemAssigned: true
    }
  }
}

module customDomain 'customDomain.bicep' = if (!empty(customDomainName)) {
  name: '${staticSiteName}-customDomain'
  scope: siteRg
  dependsOn: [
    staticSite
  ]
  params: {
    staticSiteName: staticSiteName
    customDomainName: customDomainName
    validationMethod: customDomainValidationMethod
  }
}

output resourceGroupName string = resourceGroupName
output staticSiteResourceId string = staticSite.outputs.resourceId
output staticSiteDefaultHostname string = staticSite.outputs.defaultHostname
output staticSiteName string = staticSiteName
