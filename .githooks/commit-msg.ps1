# Strip Cursor / AI co-author trailers (Windows Git hook)
param([string]$MsgFile = $args[0])
if (-not $MsgFile -or -not (Test-Path $MsgFile)) { exit 0 }
$lines = Get-Content $MsgFile | Where-Object {
    $_ -notmatch 'Co-authored-by:\s*Cursor' -and
    $_ -notmatch 'Made-with:\s*Cursor'
}
if ($lines) { $lines | Set-Content $MsgFile -Encoding utf8NoBOM }
exit 0
