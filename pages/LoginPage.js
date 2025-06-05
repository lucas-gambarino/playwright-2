const BasePage = require('./BasePage');
const { SELECTORS } = require('../support/constants');

class LoginPage extends BasePage {
    constructor(page) {
        super(page);
    }

    async login(username, password) {
        // Wait for login page to load
        await this.page.waitForLoadState('domcontentloaded');
        
        // Wait for username field to be visible and fillable
        await this.page.waitForSelector(SELECTORS.USERNAME_FIELD, { state: 'visible' });
        await this.page.fill(SELECTORS.USERNAME_FIELD, username);
        
        // Wait for password field to be visible and fillable
        await this.page.waitForSelector(SELECTORS.PASSWORD_FIELD, { state: 'visible' });
        await this.page.fill(SELECTORS.PASSWORD_FIELD, password);
        
        // Wait and find the specific login button
        const loginButtonSelector = 'button[data-testid="login-large-btn"]';
        const loginButton = await this.page.waitForSelector(loginButtonSelector, { state: 'visible' });
        
        // Click login button
        await this.page.click(SELECTORS.LOGIN_BUTTON);

        // Verify login success by waiting for chat area
        try {
            await this.page.waitForSelector(SELECTORS.CHAT_TEXTAREA);
            console.log('✓ Login successful!');
        } catch (error) {
            console.log('✗ Login error:', error.message);
            throw error;
        }
    }
}

module.exports = LoginPage; 