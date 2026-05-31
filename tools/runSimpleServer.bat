:: @fileoverview runSimpleServer.bat runs a local node web server for public/
@echo off
clear
setlocal
color 1F

:: pushd works for UNC paths (\\server\...) cd does not
:: %~d0 is the drive and %~p0 is the code's directory
pushd %~d0%~p0simpleServer

set NO_COLOR=1
cmd /k node . --webroot ../../public

endlocal
