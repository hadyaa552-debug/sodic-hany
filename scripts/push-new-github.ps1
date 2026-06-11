# After one-time setup: gh auth login
# Creates https://github.com/<you>/Sodic (public), sets origin, pushes main.
# Old Modon remote is preserved as "modon" if it was origin.

$ErrorActionPreference = "Stop"
$Root = Split-Path -Parent $PSScriptRoot
Set-Location $Root

$gh = Join-Path $env:ProgramFiles "GitHub CLI\gh.exe"
if (-not (Test-Path $gh)) { $gh = "gh" }

& $gh auth status *> $null
if ($LASTEXITCODE -ne 0) {
  Write-Host "Run first: gh auth login" -ForegroundColor Yellow
  exit 1
}

$originUrl = git remote get-url origin 2>$null
if ($originUrl -and $originUrl -match "Modon" -and -not (git remote get-url modon 2>$null)) {
  git remote rename origin modon
  Write-Host "Renamed origin -> modon (previous Modon repo)."
}

& $gh repo create Sodic --public --source=. --remote=origin --push --description "SODIC landing page (Vite + React)"
