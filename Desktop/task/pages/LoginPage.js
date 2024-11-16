// /* global browser, $ */

// class LoginPage {
//   get usernameField() { return $('#user-name'); }
//   get passwordField() { return $('#password'); } 
//   get loginButton() { return $('#login-button'); } 
//   get errorMessage() { return $('.error-message-container'); }
  
//     async login(username, password) {
//       await this.usernameField.setValue(username);
//       await this.passwordField.setValue(password);
//       await this.loginButton.click();
//     }
  
//     async clearField(field) {
//       await field.click(); 
//       await browser.keys(['Control', 'a']); 
//       await browser.keys('Backspace'); 
//   }
// }

  
//   module.exports = new LoginPage();
const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#username');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
