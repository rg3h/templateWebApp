:: putFilesOnGit.bat -- update github site
@echo off
clear
setlocal
echo cd C:\rcg\src\projects\INSERT_PROJECT_NAME_HERE
echo git pull
echo git git add *
echo git commit -m %*
echo git push
echo updated ISERT_PROJECT_NAME_HERE on github
endlocal
