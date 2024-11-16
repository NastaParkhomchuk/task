// import LoginPage from '../pageobjects/LoginPage';
// /* global browser, $, it, describe, before, after */

// describe('Login Form Tests', () => {
//     it('UC-1 Test Login form with empty credentials', async () => {

//         await browser.url('https://www.saucedemo.com/');

//         await LoginPage.usernameField.setValue('testUser');
//         await LoginPage.passwordField.setValue('testPassword');

//         await LoginPage.clearField(LoginPage.usernameField);
//         await LoginPage.clearField(LoginPage.passwordField);
        
//         await LoginPage.loginButton.click();

//         await expect(LoginPage.errorMessage).toBeDisplayed();
//         await expect(LoginPage.errorMessage).toHaveTextContaining('Username is required');
//     });
// });

  

// describe('Login Form Tests', () => {
//   it('UC-2 Test Login form with credentials by passing Username', async () => {

//       await browser.url('https://www.saucedemo.com/');

//       await LoginPage.usernameField.setValue('testUser');

//       await LoginPage.passwordField.setValue('testPassword');
//       await LoginPage.clearField(LoginPage.passwordField);

//       await LoginPage.loginButton.click();

//       await expect(LoginPage.errorMessage).toBeDisplayed();
//       await expect(LoginPage.errorMessage).toHaveTextContaining('Password is required');
//   });
// });



// describe('Login Form Tests', () => {
//   it('UC-3 Test Login form with credentials by passing Username & Password', async () => {
//       await browser.url('https://www.saucedemo.com/');

//       await LoginPage.usernameField.setValue('standard_user'); 
//       await LoginPage.passwordField.setValue('secret_sauce'); 

//       await LoginPage.loginButton.click();

//       await expect(browser).toHaveTitle('Swag Labs'); 
//   });
// });

// the second possible variant is 
const assert = require('assert');
const winston = require('winston');
/* global browser, $, it, describe */

// Set up the logger
const logger = winston.createLogger({
    level: 'info',
    transports: [
        new winston.transports.Console({ format: winston.format.simple() }),
        new winston.transports.File({ filename: 'test-logs.log' }),
    ],
});

// Data provider: A list of different test data for username and password
const loginData = [
    { username: 'standard_user', password: 'secret_sauce', expectedTitle: 'Swag Labs' },
    { username: 'performance_glitch_user', password: 'secret_sauce', expectedTitle: 'Swag Labs' },
    { username: 'locked_out_user', password: 'secret_sauce', expectedTitle: 'Swag Labs' },
    // Add more data sets if needed
];

describe('Sauce Demo Login Test', () => {
    
    // Helper function to launch the URL
    async function launchURL() {
        await browser.url('https://www.saucedemo.com/');
        logger.info('Navigating to the URL: https://www.saucedemo.com/');
    }

    // Helper function to clear and input text in username and password fields
    async function typeCredentials(username, password) {
        const usernameField = await $('#user-name');
        const passwordField = await $('#password');
        
        // Clear and type in username and password
        await usernameField.setValue(username);
        await passwordField.setValue(password);
        logger.info(`Entered credentials: ${username}, ${password}`);
    }

    // Helper function to clear the password input
    async function clearPassword() {
        const passwordField = await $('#password');
        await passwordField.clearValue(); // Clears the password field
        logger.info('Password field cleared');
    }

    // Helper function to click the login button
    async function clickLogin() {
        const loginButton = await $('#login-button');
        await loginButton.click();
        logger.info('Clicked on Login button');
    }

    // Helper function to check for the error message
    async function checkErrorMessage(expectedMessage) {
        const errorMessage = await $('.error-message-container');  // or use a more specific selector
        const messageText = await errorMessage.getText();
        logger.info(`Error message displayed: ${messageText}`);
        assert.strictEqual(messageText, expectedMessage);
    }

    // Helper function to validate the page title
    async function validatePageTitle(expectedTitle) {
        const title = await browser.getTitle();
        logger.info(`Page title: ${title}`);
        assert.strictEqual(title, expectedTitle);
    }

    // Test Case UC-1: Test Login Form with Empty Credentials
    it('should show error message when username and password are empty', async () => {
        await launchURL();
        await typeCredentials('', '');
        await clickLogin();
        await checkErrorMessage('Username is required');
    });

    // Test Case UC-2: Test Login Form with Credentials, but Password is Empty
    it('should show error message when username is provided but password is empty', async () => {
        await launchURL();
        await typeCredentials('standard_user', '');
        await clearPassword();
        await clickLogin();
        await checkErrorMessage('Password is required');
    });

    // Test Case UC-3: Test Login Form with Valid Credentials (Username & Password)
    loginData.forEach((data) => {
        it(`should login successfully with valid username: ${data.username} and password`, async () => {
            await launchURL();
            await typeCredentials(data.username, data.password);
            await clickLogin();
            await validatePageTitle(data.expectedTitle);
        });
    });
});


// chrome:   npx wdio run wdio.conf.js --capabilities "browserName:chrome"
// chrome:   npx wdio run wdio.conf.js --capabilities "browserName:MicrosoftEdge"