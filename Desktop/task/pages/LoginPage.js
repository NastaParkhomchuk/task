class LoginPage {
    get usernameField() {
      return $('#user-name');
    }

    
    get passwordField() {
      return $('#password');
    }
    
    get loginButton() {
      return $('#login-button');
    }
    
    get errorMessage() {
      return $('.error-message-container'); // Adjust if needed
    }
  
    async login(username, password) {
      await this.usernameField.setValue(username);
      await this.passwordField.setValue(password);
      await this.loginButton.click();
    }
  
    async clearFields() {
      await this.usernameField.clearValue();
      await this.passwordField.clearValue();
    }
  }
  
  module.exports = new LoginPage();
  