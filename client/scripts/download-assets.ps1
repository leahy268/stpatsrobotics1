Param(
    [string]$ManifestPath = "$PSScriptRoot/assets-manifest.json"
)

if (-not (Test-Path -Path $ManifestPath)) {
    $examplePath = Join-Path -Path $PSScriptRoot -ChildPath "assets-manifest.example.json"
    if (Test-Path -Path $examplePath) {
        Copy-Item -Path $examplePath -Destination $ManifestPath -Force
        Write-Host "Created manifest scaffold at $ManifestPath. Populate the URLs then re-run." -ForegroundColor Yellow
    }
    else {
        Write-Host "Manifest file not found and no example manifest available." -ForegroundColor Red
    }
    exit 1
}

try {
    $manifestJson = Get-Content -Path $ManifestPath -Raw | ConvertFrom-Json
}
catch {
    Write-Host "Manifest is empty or invalid JSON: $_" -ForegroundColor Red
    exit 1
}

if (-not $manifestJson) {
    Write-Host "Manifest contains no entries." -ForegroundColor Red
    exit 1
}

$targetDir = [System.IO.Path]::GetFullPath((Join-Path -Path $PSScriptRoot -ChildPath "../public/assets"))
if (-not (Test-Path -Path $targetDir)) {
    New-Item -ItemType Directory -Path $targetDir -Force | Out-Null
}

foreach ($entry in $manifestJson.PSObject.Properties) {
    $fileName = $entry.Name
    $url = $entry.Value

    if ([string]::IsNullOrWhiteSpace($url) -or $url -like "<*>") {
        Write-Warning "Skipping $fileName because the URL is missing or still a placeholder."
        continue
    }

    $destination = Join-Path -Path $targetDir -ChildPath $fileName

    Write-Host "Downloading $fileName..." -ForegroundColor Cyan
    try {
        Invoke-WebRequest -Uri $url -OutFile $destination -UseBasicParsing
        Write-Host "Saved to $destination" -ForegroundColor Green
    }
    catch {
        Write-Warning "Failed to download $fileName from $url. $_"
    }
}

Write-Host "Download routine complete." -ForegroundColor Green
