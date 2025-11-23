targetScope = 'resourceGroup'

param staticSiteName string
param customDomainName string
param validationMethod string = 'dns-txt-token'

resource staticSiteResource 'Microsoft.Web/staticSites@2024-04-01' existing = {
  name: staticSiteName
}

// Requires the `_dnsauth.<domain>` TXT record to exist before deployment.
resource customDomain 'Microsoft.Web/staticSites/customDomains@2022-03-01' = {
  parent: staticSiteResource
  name: customDomainName
  properties: {
    validationMethod: validationMethod
  }
}
