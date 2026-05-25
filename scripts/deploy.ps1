# Deploy portfolio to https://usmananwarmir.github.io

$ErrorActionPreference = "Continue"
Set-Location $PSScriptRoot\..

$repo = "usmananwarmir.github.io"
$fullName = "usmananwarmir/$repo"
$remote = "https://github.com/usmananwarmir/$repo.git"

Write-Host "Checking GitHub login..." -ForegroundColor Cyan
gh auth status
if ($LASTEXITCODE -ne 0) {
    Write-Host "Please log in first: gh auth login -h github.com -p https -w" -ForegroundColor Red
    exit 1
}

Write-Host "Checking if repository exists..." -ForegroundColor Cyan
gh repo view $fullName 2>$null | Out-Null
$repoExists = ($LASTEXITCODE -eq 0)

if (-not $repoExists) {
    Write-Host "Creating repository $fullName ..." -ForegroundColor Yellow
    gh repo create $repo --public --description "Infrastructure and automation engineer portfolio"
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Failed to create repository. See error above." -ForegroundColor Red
        exit 1
    }
} else {
    Write-Host "Repository already exists." -ForegroundColor Green
}

git remote remove origin 2>$null | Out-Null
git remote add origin $remote
git branch -M main

Write-Host "Pushing code to GitHub..." -ForegroundColor Cyan
git push -u origin main
if ($LASTEXITCODE -ne 0) {
    Write-Host "Push failed. If the repo is not empty, create it on GitHub with NO README, then run this script again." -ForegroundColor Red
    exit 1
}

Write-Host "Enabling GitHub Pages (Actions)..." -ForegroundColor Cyan
gh api --method PUT "repos/$fullName/pages" -f build_type=workflow 2>$null | Out-Null

Write-Host ""
Write-Host "Success! GitHub Actions is building your site (about 2-5 minutes)." -ForegroundColor Green
Write-Host ""
Write-Host "  Your site:  https://usmananwarmir.github.io/en/" -ForegroundColor Cyan
Write-Host "  Build log:  https://github.com/usmananwarmir/$repo/actions" -ForegroundColor Cyan
Write-Host ""
Write-Host "If the site does not load yet:" -ForegroundColor Yellow
Write-Host "  1. Open https://github.com/usmananwarmir/$repo/settings/pages"
Write-Host "  2. Set Source to GitHub Actions"
Write-Host ""
