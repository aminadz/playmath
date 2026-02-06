@echo off
chcp 65001 > nul
echo Starting Node.js download script...
node tools/download-assets.js
echo Script finished.
pause
