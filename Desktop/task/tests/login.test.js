const LoginPage = require('../pages/LoginPage.js');
const acceptedUsernames = [
  'standard_user', 'locked_out_user', 'problem_user', 'performance_glitch_user', 'error_user', 'visual_user'
];
const validPassword = 'secret_sauce';

describe('Login Form Tests', () => {
  
  beforeEach(async () => {
    await browser.url('https://example.com/login'); // Replace with the actual URL
  });

  it('UC-1: Login form with empty credentials', async () => {
    await LoginPage.login('anyUser', 'anyPass');
    await LoginPage.clearFields();
    await LoginPage.loginButton.click();
    
    const errorMsg = await LoginPage.errorMessage.getText();
    expect(errorMsg).toContain('Username is required');
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
