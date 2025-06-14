@echo off
echo Starting deployment with prebuilt code...

REM Clean up previous deployment target
IF EXIST "%DEPLOYMENT_TARGET%" RD /S /Q "%DEPLOYMENT_TARGET%"
mkdir "%DEPLOYMENT_TARGET%"

REM Ensure destination folders exist
mkdir "%DEPLOYMENT_TARGET%\public"
mkdir "%DEPLOYMENT_TARGET%\dist"

REM Copy built code and assets
echo Copying dist and public folders...
xcopy dist "%DEPLOYMENT_TARGET%\dist\\" /S /E /Y
xcopy public "%DEPLOYMENT_TARGET%\public\\" /S /E /Y

REM Copy essential configuration files
echo Copying package.json and package-lock.json...
xcopy package.json "%DEPLOYMENT_TARGET%\\" /Y
xcopy package-lock.json "%DEPLOYMENT_TARGET%\\" /Y

REM Switch to target folder to run npm install
cd /d "%DEPLOYMENT_TARGET%"

REM Install production dependencies only
echo Installing production dependencies...
call npm install --omit=dev || exit /b 1

echo Deployment finished with prebuilt code.
exit /b 0
