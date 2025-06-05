const { test, expect } = require('@playwright/test');
const { SELECTORS } = require('../support/constants');
const SupportPage = require('../pages/SupportPage');
const LoginPage = require('../pages/LoginPage');
const { getUserCredentials } = require('../config/users');
const { ffhScenarios } = require('../fixtures/test-scenarios');

// Configure to run only on Chrome
test.use({ browserName: 'chromium' });

// Create a test for each FFH intent
for (const testCase of ffhScenarios.testCases) {
  test(`FFH - Validate flow for "${testCase.intent}"`, async ({ page }) => {
    const supportPage = new SupportPage(page);
    const loginPage = new LoginPage(page);

    try {
      // 1. Initial navigation
      await page.goto('/');
      console.log('✓ Initial page loaded');

      // 2. Accept cookies
      await supportPage.acceptCookies();

      // 3. Navigate to support
      await supportPage.navigateToSupport();
      console.log('✓ Navigated to support page');

      // 4. Start chat
      await supportPage.startChat();

      // 5. Perform login
      const credentials = getUserCredentials();
      await loginPage.login(credentials.username, credentials.password);

      // 6. Wait for chat initialization and complete loading of initial messages
      await supportPage.waitForInitialMessages();
      console.log('✓ Chat initialized and messages loaded');

      // 7. Send main intent
      console.log(`Sending intent: "${testCase.intent}"...`);
      await supportPage.sendMessage(testCase.intent);
      console.log('✓ Main intent sent');

      // 8. Wait 2 seconds before sending follow-ups
      await page.waitForTimeout(2000);

      // 9. Send follow-ups in sequence
      for (const followUp of testCase.followUps) {
        console.log(`Sending follow-up: "${followUp}"...`);
        await supportPage.sendMessage(followUp);
        await page.waitForTimeout(2000);
        console.log('✓ Follow-up sent');
      }

      // 10. Verify chat is still active
      const chatTextArea = page.locator('textarea[id="chatTextArea"]');
      await expect(chatTextArea).toBeVisible();
      console.log('✓ Chat is still active and visible');

    } catch (error) {
      console.log('✗ Error during test:', error.message);
      throw error;
    }
  });
} 