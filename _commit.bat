set /p msg=Enter commit msg: 
git add .
git commit -m "%msg%"
git push
git status
set /p notused=Press enter to exit...