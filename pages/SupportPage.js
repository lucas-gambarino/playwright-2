const { expect } = require('@playwright/test');
const BasePage = require('./BasePage');
const { SELECTORS } = require('../support/constants');

class SupportPage extends BasePage {
  constructor(page) {
    super(page);
  }

  async navigateToSupport() {
    await this.click(SELECTORS.SUPPORT_BUTTON);
  }

  async acceptCookies() {
    try {
      // Wait for the cookie button to be visible
      await this.page.waitForSelector(SELECTORS.COOKIES_BUTTON, { state: 'visible' });
      
      // Click the accept cookies button
      await this.click(SELECTORS.COOKIES_BUTTON);
      console.log('✓ Cookies accepted successfully');
    } catch (error) {
      console.log('ℹ Cookie banner not found or already accepted');
    }
  }

  async startChat() {
    // Wait for chat button to be visible and click
    await this.page.waitForSelector(SELECTORS.CHAT_BUTTON, { state: 'visible' });
    await this.click(SELECTORS.CHAT_BUTTON);
    console.log('✓ Chat button clicked');

    // Wait and click required options
    await this.click(SELECTORS.YES_BUTTON);
    await this.click(SELECTORS.MOBILITY_BUTTON);
    await this.click(SELECTORS.MONTHLY_BUTTON);
    await this.click(SELECTORS.LOGIN_CHAT_BUTTON);
    console.log('✓ Chat started successfully');
  }

  async waitForInitialMessages() {
    console.log('Waiting for initial chat messages...');
    
    try {
      // First, wait for chat area to be visible
      await this.page.waitForSelector(SELECTORS.CHAT_TEXTAREA, { state: 'visible' });
      console.log('✓ Chat area visible');

      // Wait for first welcome message
      await this.page.waitForSelector(SELECTORS.MESSAGE_BUBBLE, { state: 'visible' });
      console.log('✓ First message received');
      
      // Check if text area is enabled for sending
      const textArea = await this.page.locator(SELECTORS.CHAT_TEXTAREA);
      await expect(textArea).toBeEnabled();
      console.log('✓ Chat ready to receive messages');

    } catch (error) {
      console.log('✗ Error waiting for messages:', error.message);
      throw error;
    }
  }

  async sendMessage(message) {
    // Wait for chat text area to be available
    await this.page.waitForSelector(SELECTORS.CHAT_TEXTAREA, { state: 'visible' });
    
    // Clear any existing text
    await this.page.fill(SELECTORS.CHAT_TEXTAREA, '');
    
    // Type and send message
    await this.page.fill(SELECTORS.CHAT_TEXTAREA, message);
    await this.page.keyboard.press('Enter');
    
    console.log(`✓ Message sent: "${message}"`);
    
    // Wait for message to appear in chat
    await this.page.waitForSelector(`text="${message}"`);
  }

  async isChatVisible() {
    return await this.isVisible(SELECTORS.CHAT_TEXTAREA);
  }
}

module.exports = SupportPage; 