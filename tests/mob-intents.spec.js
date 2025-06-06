const { test: base, expect } = require('@playwright/test');
const { SELECTORS } = require('../support/constants');
const SupportPage = require('../pages/SupportPage');
const LoginPage = require('../pages/LoginPage');
const { getUserCredentials } = require('../config/users');
const { mobScenarios } = require('../fixtures/test-scenarios');

// Extend the base test with our custom test function
const test = base.extend({
  runIntentTest: async ({ page }, use) => {
    await use(async (intent, followUps) => {
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
        console.log(`Sending intent: "${intent}"...`);
        await supportPage.sendMessage(intent);
        console.log('✓ Main intent sent');

        // 8. Wait 2 seconds before sending follow-ups
        await page.waitForTimeout(2000);

        // 9. Send follow-ups in sequence
        for (const followUp of followUps) {
          console.log(`Sending follow-up: "${followUp}"...`);
          await supportPage.sendMessage(followUp);
          await page.waitForTimeout(2000);
          console.log('✓ Follow-up sent');
        }

        // 10. Verify chat is still active
        const chatTextArea = page.locator('textarea[id="chatTextArea"]');
        await expect(chatTextArea).toBeVisible();
        console.log('✓ Chat is still active and visible');

        // 11. Validar se o botão "Continue to TELUS Expert" existe e é clicável
        const continueButton = page.getByRole('button', { name: /Continue to TELUS Expert/i });
        await expect(continueButton).toBeVisible();
        await expect(continueButton).toBeEnabled();
        // await continueButton.click(); // Descomente se quiser clicar
        console.log('✓ Botão "Continue to TELUS Expert" está visível e clicável');

        // 12. Clicar no botão de fechar (X) e confirmar encerramento do chat
        const closeButton = page.getByTestId('ChatClose');
        await expect(closeButton).toBeVisible();
        await closeButton.click();
        console.log('✓ Botão de fechar chat clicado');

        const endChatButton = page.locator('button[data-testid="ChatButton"][data-qa="endChatYes"]');
        await expect(endChatButton).toBeVisible();
        await endChatButton.click();
        console.log('✓ Botão "Yes, end chat" clicado e chat encerrado');

        // 13. Validar que o chat não está mais visível
        const isChatVisible = await supportPage.isChatVisible();
        await expect(isChatVisible).toBeFalsy();
        console.log('✓ Chat não está mais visível após encerramento');

      } catch (error) {
        console.log('✗ Error during test:', error.message);
        throw error;
      }
    });
  }
});

// Create individual test cases
mobScenarios.testCases.forEach(testCase => {
  test(`MOB - ${testCase.intent}`, async ({ runIntentTest }) => {
    await runIntentTest(testCase.intent, testCase.followUps);
  });
});