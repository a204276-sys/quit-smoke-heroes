@echo off
setlocal
cd /d "%~dp0"
python -c "import sys; sys.exit(sys.version_info.major != 3)" >nul 2>&1
if not errorlevel 1 goto python
py -3 -c "import http.server" >nul 2>&1
if not errorlevel 1 goto py
node --version >nul 2>&1
if not errorlevel 1 goto node
echo Python 3 or Node.js is required. Please check your PATH.
pause
exit /b 1

:python
echo Opening http://127.0.0.1:8000 - press Ctrl+C to stop.
start "" /b powershell -NoProfile -Command "Start-Sleep -Seconds 2; Start-Process 'http://127.0.0.1:8000/'"
python -m http.server 8000 --bind 127.0.0.1
goto end

:py
echo Opening http://127.0.0.1:8000 - press Ctrl+C to stop.
start "" /b powershell -NoProfile -Command "Start-Sleep -Seconds 2; Start-Process 'http://127.0.0.1:8000/'"
py -3 -m http.server 8000 --bind 127.0.0.1
goto end

:node
echo Opening http://127.0.0.1:8765 - press Ctrl+C to stop.
start "" /b powershell -NoProfile -Command "Start-Sleep -Seconds 2; Start-Process 'http://127.0.0.1:8765/'"
node tests/serve.mjs

:end
if errorlevel 1 pause
endlocal
