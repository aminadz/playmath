@echo off
chcp 65001 > nul
echo Starting download script wrapper...
python tools\download_assets.py
echo Script finished.
pause
