:: putWebsiteFiles.bat -- rsync local files to AWS website server
@echo off
:: -a archive - equivalent to -rlptgoD  [maybe change to -rltvh?]
:: -v verbose
:: -z compress
:: -e use an alternate rsh command
set params=--chmod=Du=rwx,Dgo=rx,Fu=rw,Fog=r --exclude={'*~','#*#','.#*'} -avze
set key="ssh -i /cygdrive/c/rcg/.ssh/LightsailDefaultKey-us-west-2.pem"

:: from ends with a slash
set from=/cygdrive/c/rcg/src/projects/www/website/public/
set to=ubuntu@[IPV6_address_here]:/var/www/public
rsync %params% %key% %from% %to%
