const Page = require('./page');
const { $ } = require('@wdio/globals')
/* global browser */

class LoginPage extends Page {
    // Определение селекторов
    get usernameField() { return $('#user-name'); }
    get passwordField() { return $('#password'); }
    get loginButton() { return $('#login-button'); }
    get errorMessage() { return $('.error-message-container'); }

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
        const messageText = await this.errorMessage.getText();
        console.info(`Error message displayed: ${messageText}`);
        return messageText;
    }
}

module.exports = new LoginPage();