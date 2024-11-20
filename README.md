
Launch URL: https://www.saucedemo.com/
Test Scenarious

UC-1 Test Login form with empty credentials:
Type any credentials into "Username" and "Password" fields.
Clear the inputs.
Hit the "Login" button.
Check the error messages: "Username is required".
UC-2 Test Login form with credentials by passing Username:
Type any credentials in username.
Enter password.
Clear the "Password" input.
Hit the "Login" button.
Check the error messages: "Password is required".
UC-3 Test Login form with credentials by passing Username & Password:
Type credentials in username which are under Accepted username are sections.
Enter password as secret sauce.
Click on Login and validate the title “Swag Labs” in the dashboard. 


1. Clone the repository to the local machine: 
git clone https://github.com/NastaParkhomchuk/task.git 
2. Go to the repository folder: cd task
3. Installing dependencies. Ensure that you have installed Node.js 18.0+ to have an access to all frameworks node -v 
If you dont have installed Node.js, you can download it here (https://nodejs.org/en). To install all required dependencies use command: npm install .
 If it needs you should also use command npm audit fix
4. Run tests npm run test


npx wdio run wdio.conf.js --capabilities "browserName:chrome"



npx wdio run wdio.conf.js --capabilities "browserName:MicrosoftEdge"
