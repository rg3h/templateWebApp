:: @fileoverview runServer.bat runs a local node web server
@echo off
clear
setlocal
start node ./server/simpleServer.js --webroot "../../public/"
endlocal
