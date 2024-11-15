import LoginPage from '../pageobjects/LoginPage';

describe('Login Form Tests', () => {
    it('UC-1 Test Login form with empty credentials', async () => {

        await browser.url('https://www.saucedemo.com/');

        await LoginPage.usernameField.setValue('testUser');
        await LoginPage.passwordField.setValue('testPassword');

        await LoginPage.clearField(LoginPage.usernameField);
        await LoginPage.clearField(LoginPage.passwordField);
        
        await LoginPage.loginButton.click();

        await expect(LoginPage.errorMessage).toBeDisplayed();
        await expect(LoginPage.errorMessage).toHaveTextContaining('Username is required');
    });
});

  

describe('Login Form Tests', () => {
  it('UC-2 Test Login form with credentials by passing Username', async () => {

      await browser.url('https://www.saucedemo.com/');

      await LoginPage.usernameField.setValue('testUser');

      await LoginPage.passwordField.setValue('testPassword');
      await LoginPage.clearField(LoginPage.passwordField);

      await LoginPage.loginButton.click();

      await expect(LoginPage.errorMessage).toBeDisplayed();
      await expect(LoginPage.errorMessage).toHaveTextContaining('Password is required');
  });
});



describe('Login Form Tests', () => {
  it('UC-3 Test Login form with credentials by passing Username & Password', async () => {
      await browser.url('https://www.saucedemo.com/');

      await LoginPage.usernameField.setValue('standard_user'); 
      await LoginPage.passwordField.setValue('secret_sauce'); 

      await LoginPage.loginButton.click();

      await expect(browser).toHaveTitle('Swag Labs'); 
  });
});