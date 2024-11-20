const Page = require('../test/pageobjects/page');
const { $ } = require('@wdio/globals')
/* global browser, document */

class LoginPage extends Page {
    get usernameField() { return $('#user-name'); }
    get passwordField() { return $('#password'); }
    get loginButton() { return $('#login-button'); }
    // get errorMessage() { return $('.error-message-container'); }
    get errorMessage() { return $('h3[data-test="error"]'); }

    async open() {
        await browser.url('https://www.saucedemo.com/');
        console.info('Navigating to the URL: https://www.saucedemo.com/');
    }

    async login(username, password) {
        await this.usernameField.setValue(username);
        await this.passwordField.setValue(password);
        console.info(`Entered credentials: username=${username}, password=${password}`);
    }

    async clearPasswordField() {
        await this.passwordField.clearValue();
        console.info('Password field cleared');
    }

    async submit() {
        await this.loginButton.click();
        console.info('Clicked on Login button');
    }


    async getErrorMessage() {
        return await browser.execute(() => {
            const errorElement = document.querySelector('h3[data-test="error"]');
            if (errorElement && errorElement._reactRootContainer) {
                const reactProps = Object.values(errorElement)[1].memoizedProps;
                return reactProps.children[1];
            }
            return errorElement?.textContent || '';
        });
    }
}

module.exports = new LoginPage();