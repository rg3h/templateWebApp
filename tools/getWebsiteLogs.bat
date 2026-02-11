:: getWebsiteLogs.bat -- get logs from the website server
@echo off
:: -a archive - equivalent to -rlptgoD  [maybe change to -rltvh?]
:: -v verbose
:: -z compress
:: -e use an alternate rsh command
set params=--chmod=Du=rwx,Dgo=rx,Fu=rw,Fog=r --exclude={'*~','#*#','.#*'} --rsync-path="sudo /usr/bin/rsync" -avze
set key="ssh -i /cygdrive/c/rcg/.ssh/LightsailDefaultKey-us-west-2.pem"


:: from ends with a slash
set from=ubuntu@[INSERT_IPV6_ADDRESS_HERE]:/var/www/logs/
set to=/cygdrive/c/rcg/src/projects/www/INSERTWEBSITE/aaa_notForProject/logs
rsync %params% %key% %from% %to%
echo consider removing old logs from the server (/var/www/logs)
