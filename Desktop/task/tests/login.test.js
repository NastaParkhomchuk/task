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

  it('UC-2: Login form with only username provided', async () => {
    await LoginPage.login('anyUser', validPassword);
    await LoginPage.passwordField.clearValue();
    await LoginPage.loginButton.click();
    
    const errorMsg = await LoginPage.errorMessage.getText();
    expect(errorMsg).toContain('Password is required');
  });

  acceptedUsernames.forEach(username => {
    it(`UC-3: Login form with valid username "${username}" and password`, async () => {
      await LoginPage.login(username, validPassword);
      await expect(browser).toHaveTitleContaining('Swag Labs');
    });
  });
});
