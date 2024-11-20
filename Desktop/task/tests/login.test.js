/* global browser, it, describe */
const LoginPage = require('../pages/LoginPage');

const assert = require('assert');
const users = require('../data/userData');

describe('Sauce Demo Login Test', () => {

    it('should show error message when username and password are empty', async () => {
        await LoginPage.open();
        await LoginPage.login(users.emptyCredentials.username, users.emptyCredentials.password);
        const errorMessage = await LoginPage.getErrorMessage();
        assert.ok(errorMessage.includes('Your username is invalid!'), 'Error message does not contain the expected text');
    });

    it('should show error message when username is provided but password is empty', async () => {
        await LoginPage.open();
        await LoginPage.login(users.usernameOnly.username, users.usernameOnly.password);
        await LoginPage.clearPasswordField();
        await LoginPage.submit();
        const errorMessage = await LoginPage.getErrorMessage();
        assert.strictEqual(errorMessage, 'Password is required');
    });

    it('should login successfully with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login(users.validUser.username, users.validUser.password);
        await LoginPage.submit();
        const title = await browser.getTitle();
        assert.strictEqual(title, 'Swag Labs');
    });

    const loginData = [
        { user: users.validUser, expectedTitle: 'Swag Labs' },
        { user: users.performanceUser, expectedTitle: 'Swag Labs' },
    ];

    loginData.forEach(({ user, expectedTitle }) => {
        it(`should login with username=${user.username} and password`, async () => {
            await LoginPage.open();
            await LoginPage.login(user.username, user.password);
            await LoginPage.submit();
            const title = await browser.getTitle();
            assert.strictEqual(title, expectedTitle);
        });
    });
});
