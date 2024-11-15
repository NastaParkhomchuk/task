/* global browser, $, it, describe, before, after */

class LoginPage {
  get usernameField() { return $('#user-name'); }
  get passwordField() { return $('#password'); } 
  get loginButton() { return $('#login-button'); } 
  get errorMessage() { return $('.error-message-container'); }
  
    async login(username, password) {
      await this.usernameField.setValue(username);
      await this.passwordField.setValue(password);
      await this.loginButton.click();
    }
  
    async clearField(field) {
      await field.click(); 
      await browser.keys(['Control', 'a']); 
      await browser.keys('Backspace'); 
  }
}

  
  module.exports = new LoginPage();
  