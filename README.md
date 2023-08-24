# Cypress_Lessons
Test Web
Using Cypress framework

First install Cypress and Yarn.

Installing Yarn : npm install --global yarn
Installing Cypress : yarn add cypress --dev
For the first time on this project :

You will need VPN access to download the project and dependencies.
Install all dependencies using yarn install command into test-e2e-web-et-mobile folder.
Do not forget to git pull before commit then yarn install if there is any modification.

Launch local test with navigator
Use these commands :


yarn run cypress open
Warning :

If you meet the following error : Cypress verification timed out..
You can try this command : npx cypress verify and it should correct the previous error.
Launch local test with terminal
Use this command :

yarn run cypress run
Cypress run dashbord :
npx cypress run --record --key 6fa8d161-716f-48df-8b21-5e04b96cb6e4