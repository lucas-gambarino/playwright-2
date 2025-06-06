# Test info

- Name: FFH - Want to remove pik tv channel
- Location: /Users/lucas.gambarino/Documents/GitHub/playwright/tests/ffh-intents.spec.js:92:3

# Error details

```
Error: Timed out 60000ms waiting for expect(locator).toBeVisible()

Locator: getByRole('button', { name: /Continue to TELUS Expert/i })
Expected: visible
Received: <element(s) not found>
Call log:
  - expect.toBeVisible with timeout 60000ms
  - waiting for getByRole('button', { name: /Continue to TELUS Expert/i })

    at /Users/lucas.gambarino/Documents/GitHub/playwright/tests/ffh-intents.spec.js:61:38
    at /Users/lucas.gambarino/Documents/GitHub/playwright/tests/ffh-intents.spec.js:93:5
```

# Page snapshot

```yaml
- banner:
  - link "Skip to content":
    - /url: "#end-of-nav"
  - link "Skip to search":
    - /url: "#search-button"
  - link "Click here to find out how the potential Canada Post Strike may impact your order":
    - /url: https://www.wcstage.telus.com/en/support/article/canada-post-labour-disruption?linkname=notification_banner&linktype=notification_bar
  - navigation "top links":
    - list:
      - listitem:
        - link "Personal":
          - /url: https://www.wcstage.telus.com/?linkname=Personal&linktype=ge-supernav
      - listitem:
        - button "Business": Business 
      - listitem:
        - link "Health":
          - /url: https://www.wcstage.telus.com/health?linkname=Health&linktype=ge-supernav
      - listitem:
        - link "Agriculture & Consumer Goods":
          - /url: https://www.wcstage.telus.com/agcg/en-ca?linkname=Agriculture_Consumer_Goods&linktype=ge-supernav
      - listitem:
        - link "Social Impact":
          - /url: https://www.wcstage.telus.com/social-impact?linkname=Social_Impact&linktype=ge-supernav
    - list:
      - listitem:
        - button "My TELUS":
          - text: Login
          - img "Login"
          - text: My TELUS 
      - listitem:
        - link "Support":
          - /url: https://www.wcstage.telus.com/support?linktype=ge-supernav&linkname=Support
          - text: Support
          - img "Support"
          - text: Support
      - listitem:
        - button "Your current region is set to, British Columbia":
          - alert "Your current region is set to, British Columbia": BC 
  - link "TELUS Logo":
    - /url: https://www.wcstage.telus.com/en/
    - img "TELUS Logo"
  - navigation "main links":
    - list:
      - listitem:
        - button "Mobility": Mobility 
      - listitem:
        - button "Internet": Internet 
      - listitem:
        - button "TV & Entertainment": TV & Entertainment 
      - listitem:
        - button "Security & Smart Home": Security & Smart Home 
      - listitem:
        - button "Health": Health 
      - listitem:
        - link "TELUS Rewards":
          - /url: https://www.wcstage.telus.com/my-rewards?linkname=TELUS_Rewards&linktype=ge-mainnav
      - listitem:
        - link "Anniversary Sale":
          - /url: https://www.wcstage.telus.com/en/deals-and-bundles?linkname=Anniversary_Sale&linktype=ge-mainnav
  - navigation "search and cart":
    - button "search":
      - img "Search Button"
    - link "Cart has 0 items":
      - /url: https://www.wcstage.telus.com/en/commerce/cart?linkname=cart_icon&linktype=ge-mainnav-cart-icon
      - text: Cart has 0 items
      - img "Cart"
- main:
  - link "Edit link":
    - /url: https://app.contentful.com/spaces/9mt4r6ro1ay9/environments/master/entries/64S9Qi4aFWehQ0YmagaVfy
    - link "Edit link"
  - heading "Hi, how can we help you?" [level=1]
  - paragraph:
    - text: Already a TELUS customer?
    - link "Log in for a better experience":
      - /url: https://proxy.digital.telus.com/oauth2/login?rd=https://www.telus.com/support?INTCMP=Tcom-support_new-homepage_link_log-in-for-a-better-experience
      - link "Log in for a better experience"
  - textbox "Search"
  - button "Search"
  - img
  - link "Try out our GenAI support chatbot":
    - /url: https://www.wcstage.telus.com/support/ai?v=3&INTCMP=Tcom_Support_HP_to_GenAI_3
    - link "Try out our GenAI support chatbot"
  - paragraph:
    - text: Are you a business customer? Visit our
    - link "Business Support section":
      - /url: https://www.wcstage.telus.com/business/support
      - link "Business Support section"
    - text: for assistance.
  - heading "Browse support by products and services." [level=2]
  - link "AccountBilling-Icon Account & Billing":
    - /url: https://www.wcstage.telus.com/support/topic/billing-and-payments?INTCMP=Tcom-support_new-homepage_billing-and-payments
    - img "AccountBilling-Icon"
    - heading "Account & Billing" [level=4]
  - link "Internet-Icon Internet":
    - /url: https://www.wcstage.telus.com/support/topic/internet?INTCMP=Tcom-support_new-homepage_internet
    - img "Internet-Icon"
    - heading "Internet" [level=4]
  - link "Mobility-Icon Mobility":
    - /url: https://www.wcstage.telus.com/support/topic/mobility?INTCMP=Tcom-support_new-homepage_mobility
    - img "Mobility-Icon"
    - heading "Mobility" [level=4]
  - link "OptikTv-Icon Optik TV":
    - /url: https://www.wcstage.telus.com/support/topic/optik-tv-help?INTCMP=Tcom-support_new-homepage_optik-tv-help
    - img "OptikTv-Icon"
    - heading "Optik TV" [level=4]
  - link "Remote Icon Entertainment Subscriptions":
    - /url: https://www.wcstage.telus.com/support/topic/entertainment-subscriptions?INTCMP=Tcom-support_new-homepage_entertainment-subscriptions
    - img "Remote Icon"
    - heading "Entertainment Subscriptions" [level=4]
  - link "HomePhone-Icon Home phone":
    - /url: https://www.wcstage.telus.com/support/topic/home-phone?INTCMP=Tcom-support_new-homepage_home-phone
    - img "HomePhone-Icon"
    - heading "Home phone" [level=4]
  - link "SmartHomeSecurity-Icon SmartHome Security":
    - /url: https://www.wcstage.telus.com/support/topic/smarthome?INTCMP=Tcom-support_new-homepage_smarthome
    - img "SmartHomeSecurity-Icon"
    - heading "SmartHome Security" [level=4]
  - link "SmartHub-Icon Smart Hub Internet":
    - /url: https://www.wcstage.telus.com/support/topic/smart-hub?INTCMP=Tcom-support_new-homepage_smart-hub
    - img "SmartHub-Icon"
    - heading "Smart Hub Internet" [level=4]
  - link "ADTbyTELUS-Icon ADT by TELUS":
    - /url: https://www.wcstage.telus.com/support/topic/adt?INTCMP=Tcom-support_new-homepage_adt
    - img "ADTbyTELUS-Icon"
    - heading "ADT by TELUS" [level=4]
  - link "TELUSCustomSecuritySystems-Icon TELUS Custom Security Systems":
    - /url: https://www.wcstage.telus.com/support/topic/telus-custom-security-systems?INTCMP=Tcom-support_new-homepage_telus-custom-security-systems
    - img "TELUSCustomSecuritySystems-Icon"
    - heading "TELUS Custom Security Systems" [level=4]
  - link "TELUSOnlineSecurity-Icon TELUS Online Security":
    - /url: https://www.wcstage.telus.com/support/topic/telus-online-security-norton?INTCMP=Tcom-support_new-homepage_telus-online-security-norton
    - img "TELUSOnlineSecurity-Icon"
    - heading "TELUS Online Security" [level=4]
  - link "TelusEmail-Icon TELUS Email":
    - /url: https://www.wcstage.telus.com/support/topic/gmail?INTCMP=Tcom-support_new-homepage_gmail
    - img "TelusEmail-Icon"
    - heading "TELUS Email" [level=4]
  - link "PikTv-Icon Pik TV":
    - /url: https://www.wcstage.telus.com/support/topic/pik-tv?INTCMP=Tcom-support_new-homepage_pik-tv
    - img "PikTv-Icon"
    - heading "Pik TV" [level=4]
  - link "SatelliteTV-Icon Satellite TV":
    - /url: https://www.wcstage.telus.com/support/topic/satellite-tv?INTCMP=Tcom-support_new-homepage_satellite-tv
    - img "SatelliteTV-Icon"
    - heading "Satellite TV" [level=4]
  - link "telus health mycare TELUS Health MyCare™":
    - /url: https://www.wcstage.telus.com/support/topic/telus-health-mycare?INTCMP=Tcom-support_new-homepage_telus-health-mycare
    - img "telus health mycare"
    - heading "TELUS Health MyCare™" [level=4]
  - link "My Pet Icon 32x32 TELUS Health MyPet":
    - /url: https://www.wcstage.telus.com/support/topic/telus-health-mypet?INTCMP=Tcom-support_new-homepage_telus-health-mypet
    - img "My Pet Icon 32x32"
    - heading "TELUS Health MyPet" [level=4]
  - link "Lock-purple-SmartWear SmartWear Security":
    - /url: https://www.wcstage.telus.com/support/topic/smartwear-security?INTCMP=Tcom-support_new-homepage_smartwear-security
    - img "Lock-purple-SmartWear"
    - heading "SmartWear Security" [level=4]
  - link "LivingWell-Companion-Watch-icon TELUS Health Medical Alert":
    - /url: https://www.wcstage.telus.com/support/topic/livingwell-companion?INTCMP=Tcom-support_new-homepage_livingwell-companion
    - img "LivingWell-Companion-Watch-icon"
    - heading "TELUS Health Medical Alert" [level=4]
  - link "TELUS HomePro-Support-Icon TELUS HomePro™":
    - /url: https://www.wcstage.telus.com/support/topic/telus-homepro?INTCMP=Tcom-support_new-homepage_telus-homepro
    - img "TELUS HomePro-Support-Icon"
    - heading "TELUS HomePro™" [level=4]
  - link "energy@2x SmartEnergy":
    - /url: https://www.wcstage.telus.com/support/topic/smartenergy?INTCMP=Tcom-support_new-homepage_smartenergy
    - img "energy@2x"
    - heading "SmartEnergy" [level=4]
  - heading "Quick actions" [level=2]
  - link "Intent page - Fixing an issue - tools purple icon Tutorials to set up, fix and use your device":
    - /url: https://www.wcstage.telus.com/support/article/get-to-know-your-device?INTCMP=Tcom-support_new-homepage_get-to-know-your-device
    - img "Intent page - Fixing an issue - tools purple icon"
    - heading "Tutorials to set up, fix and use your device" [level=4]
  - link "Drive (Van) icon Track an order":
    - /url: https://www.telus.com/en/commerce/order-status?INTCMP=Tcom-support_new-homepage_order-status
    - img "Drive (Van) icon"
    - heading "Track an order" [level=4]
  - link "Transmitter-purple@48 0 TELUS service status":
    - /url: https://www.telus.com/en/outages?INTCMP=Tcom-support_new-homepage_outages
    - img "Transmitter-purple@48 0"
    - heading "TELUS service status" [level=4]
  - heading "Suggested articles" [level=2]
  - 'heading "Understanding your Service Agreement with TELUS: Common questions answered" [level=3]'
  - paragraph: Find quick answers to common questions about your TELUS Service Agreement, including pausing services, discounts, transfers, cancellations and more.
  - link "Learn more":
    - /url: https://www.wcstage.telus.com/support/article/understand-service-agreement?INTCMP=Tcom-support_new-homepage_understand-service-agreement_learn-more
    - link "Learn more"
  - heading "How to pay your bill" [level=3]
  - paragraph: The easiest way to pay your TELUS bill is by pre-authorized payments. There are many other simple ways to pay as well.
  - link "Learn more":
    - /url: https://www.wcstage.telus.com/support/article/how-to-pay-your-bill?INTCMP=Tcom-support_new-homepage_how-to-pay-your-bill_learn-more
    - link "Learn more"
  - heading "Help with late payments and overdue balances" [level=3]
  - paragraph: Review your options for an overdue balance, including resolving payment issues and setting up a payment arrangement.
  - link "Learn more":
    - /url: https://www.wcstage.telus.com/support/article/late-payment-and-overdue-fees?INTCMP=Tcom-support_new-homepage_late-payment-and-overdue-fees_learn-more
    - link "Learn more"
  - heading "Need more help? Try these additional resources." [level=2]
  - heading "Ask other customers" [level=3]
  - paragraph: Connect with the TELUS community and get answers from other customers on our forum, TELUS Neighbourhood.
  - link "Visit the Neighbourhood":
    - /url: https://forum.telus.com?INTCMP=Tcom-support_new-homepage_visit-the-neighbourhood
    - link "Visit the Neighbourhood"
  - img "Support HomePage / Additional Card / Neighbourhodd"
  - heading "Manage Internet & TV service" [level=3]
  - paragraph: Diagnose Wi-Fi issues, monitor usage and improve your network performance with the TELUS Connect app.
  - link "Download the TELUS Connect app":
    - /url: https://www.telus.com/en/internet/my-wifi-app?INTCMP=Tcom-support_new-homepage_download-the-telus-connect-app
    - link "Download the TELUS Connect app"
  - img "Manage Internet & TV Service"
  - heading "Accessibility at TELUS" [level=3]
  - paragraph: We are committed to giving everyone equal access to the devices and services we all need to stay connected.
  - link "Read our accessibility practices":
    - /url: https://www.telus.com/about/company-overview/accessibility?INTCMP=Tcom-support_new-homepage_read-our-accessibility-practices
    - link "Read our accessibility practices"
  - img "Accessibility at TELUS"
  - heading "Can't find what you're looking for? We're here to help." [level=3]
  - link "Contact us":
    - /url: https://www.wcstage.telus.com/support/contact-us?INTCMP=Tcom-support_new-homepage_link_contact-us
    - link "Contact us"
- contentinfo:
  - navigation "Footer Quicklinks":
    - link "My TELUS":
      - /url: https://www.wcstage.telus.com/my-telus?linktype=ge-footer
      - img "My TELUS"
      - text: My TELUS
    - link "Support":
      - /url: https://www.wcstage.telus.com/en/support?linktype=ge-footer
      - img "Support"
      - text: Support
    - link "Find a store":
      - /url: https://stores.telus.com/en?linktype=ge-footer
      - img "Find a store"
      - text: Find a store
    - link "Contact us":
      - /url: https://www.wcstage.telus.com/en/support/contact-us?linktype=ge-footer
      - img "Contact us"
      - text: Contact us
  - note "LandMark":
    - note:
      - text: The TELUS team acknowledges that our work spans many Territories and Treaty areas and we are grateful for the traditional Knowledge Keepers and Elders who are with us today, those who have gone before us and the youth that inspire us. We recognize the land and the benefits it provides all of us, as an act of reconciliation, as recommended by the Truth and Reconciliation Commission’s (TRC) 94 Calls to Action and express gratitude to those whose territory we reside on, work on or are visiting. Learn more about
      - link "TELUS’ commitment to Reconciliation.":
        - /url: https://www.wcstage.telus.com/en/social-impact/connecting-canada/indigenous-reconciliation
  - link "Facebook":
    - /url: https://www.facebook.com/telus/
  - link "Twitter":
    - /url: https://twitter.com/telus
  - link "Instagram":
    - /url: https://www.instagram.com/telus/?hl=en
  - link "Linkedin":
    - /url: https://ca.linkedin.com/company/telus
  - link "Youtube":
    - /url: https://www.youtube.com/TELUS
  - navigation "Footer link column 1":
    - text: Company
    - link "About Us":
      - /url: https://www.wcstage.telus.com/en/about?linktype=ge-footer
    - link "Partnerships":
      - /url: https://www.wcstage.telus.com/en/partnerships/westjet?linktype=ge-footer
    - link "Careers":
      - /url: https://www.wcstage.telus.com/en/about/careers?linktype=ge-footer
    - link "Newsroom":
      - /url: https://www.wcstage.telus.com/en/about/newsroom?linktype=ge-footer
    - link "Policies":
      - /url: https://www.wcstage.telus.com/en/about/policies-and-disclosures?linktype=ge-footer
    - link "Security":
      - /url: https://www.wcstage.telus.com/en/about/security?linktype=ge-footer
    - link "Social Impact":
      - /url: https://www.wcstage.telus.com/en/social-impact?linktype=ge-footer
    - link "Diversity and Inclusion":
      - /url: https://www.wcstage.telus.com/en/about/diversity-and-inclusion?linktype=ge-footer
    - text: LEGAL
    - link "Privacy / Cookies":
      - /url: https://www.wcstage.telus.com/en/about/privacy?linktype=ge-footer
    - link "TELUS & CRTC Wireless Code":
      - /url: https://www.wcstage.telus.com/en/about/accessibility/crtc-wireless-code-of-conduct?linktype=ge-footer
    - link "TELUS & CRTC Internet Code":
      - /url: https://www.wcstage.telus.com/en/support/article/the-internet-code-of-conduct?linktype=ge-footer
    - link "Internet Code, Simplified":
      - /url: https://crtc.gc.ca/eng/internet/codesimpl.htm?linktype=ge-footer
    - link "Wireless Code, Simplified":
      - /url: https://crtc.gc.ca/eng/phone/mobile/codesimpl.htm?linktype=ge-footer
    - link "Service Terms":
      - /url: https://www.wcstage.telus.com/en/support/topic/service-terms?linktype=ge-footer
  - navigation "Footer link column 2":
    - text: HELP
    - link "Accessibility":
      - /url: https://www.wcstage.telus.com/en/about/company-overview/accessibility?linktype=ge-footer
    - link "COVID-19":
      - /url: https://www.wcstage.telus.com/en/about/covid-19-updates?linktype=ge-footer
    - link "TELUS Service Status":
      - /url: https://www.wcstage.telus.com/en/outages?INTCMP=VAN_status&linktype=ge-footer
    - link "Community Forum":
      - /url: https://forum.telus.com/t5/Home/ct-p/EN?linktype=ge-footer
    - link "Order Status":
      - /url: https://www.wcstage.telus.com/en/commerce/order-status?linktype=ge-footer
    - link "User Terms":
      - /url: https://www.wcstage.telus.com/en/about/policies-and-disclosures/user-terms?linktype=ge-footer
    - link "Student Offers":
      - /url: https://connect.studentbeans.com/v4/hosted/telus/ca/?linktype=ge-footer
    - link "Desktop sharing":
      - /url: http://telus.desktop.show/?linktype=ge-footer
    - text: Other TELUS properties
    - link "Social Impact":
      - /url: https://www.wcstage.telus.com/en/social-impact?linktype=ge-footer
    - link "TELUS Procurement":
      - /url: https://www.wcstage.telus.com/en/about/procurement?linktype=ge-footer
    - link "TELUS Digital":
      - /url: https://www.telusdigital.com/en/?linktype=ge-footer
    - link "TELUS Webmail":
      - /url: https://email.telus.net/?linktype=ge-footer
    - link "TELUS Wise":
      - /url: https://www.wcstage.telus.com/en/wise?linktype=ge-footer
  - separator
  - link "Telus. Let's make the future friendly.":
    - /url: https://telus.com/
    - img "Telus. Let's make the future friendly."
  - button "Manage cookies"
  - separator
  - text: ©2025 TELUS
- alert
- complementary "Chat":
  - img
  - button "Toggle sound on"
  - button "Minimize chat": Minimize
  - button "Close chat"
  - text: TELUS Assist
  - separator
  - img
  - heading "Chat started with TELUS Assist" [level=4]
  - paragraph: Friday June 6, 3:50 p.m.
  - paragraph: Hi, I'm TELUS Virtual Assistant!
  - paragraph: I can't seem to find any accounts associated to your profile, but I can still try to help out.
  - paragraph: In a sentence or two, how can I help?
  - paragraph: 15:50
  - text: Want to remove pik tv channel
  - paragraph: You 15:50
  - paragraph: Sounds like you're inquiring about your Home services.
  - paragraph: I'm afraid I can only answer questions related to your Mobility Account.
  - paragraph: To see if a Home services team member is available at this time, close this chat by clicking the X in the top right, and select Home when restarting a new chat.
  - paragraph: 📌 Your TELUS website region needs to be set to British Columbia or Alberta for Home to be available.
  - paragraph: Is there anything else I can help you with?
  - paragraph: 15:50
  - text: agent
  - paragraph: You 15:50
  - paragraph: Sure, let me see if a team member is available at this time.
  - paragraph: To connect with a team member, let me know if you prefer chat or would like us to call you?
  - paragraph: 15:50
  - textbox "Chat message textarea"
  - button "Send chat message" [disabled]
```

# Test source

```ts
   1 | const { test: base, expect } = require('@playwright/test');
   2 | const { SELECTORS } = require('../support/constants');
   3 | const SupportPage = require('../pages/SupportPage');
   4 | const LoginPage = require('../pages/LoginPage');
   5 | const { getUserCredentials } = require('../config/users');
   6 | const { ffhScenarios } = require('../fixtures/test-scenarios');
   7 |
   8 | // Extend the base test with our custom test function
   9 | const test = base.extend({
  10 |   runIntentTest: async ({ page }, use) => {
  11 |     await use(async (intent, followUps) => {
  12 |       const supportPage = new SupportPage(page);
  13 |       const loginPage = new LoginPage(page);
  14 |
  15 |       try {
  16 |         // 1. Initial navigation
  17 |         await page.goto('/');
  18 |         console.log('✓ Initial page loaded');
  19 |
  20 |         // 2. Accept cookies
  21 |         await supportPage.acceptCookies();
  22 |
  23 |         // 3. Navigate to support
  24 |         await supportPage.navigateToSupport();
  25 |         console.log('✓ Navigated to support page');
  26 |
  27 |         // 4. Start chat
  28 |         await supportPage.startChat();
  29 |
  30 |         // 5. Perform login
  31 |         const credentials = getUserCredentials();
  32 |         await loginPage.login(credentials.username, credentials.password);
  33 |
  34 |         // 6. Wait for chat initialization and complete loading of initial messages
  35 |         await supportPage.waitForInitialMessages();
  36 |         console.log('✓ Chat initialized and messages loaded');
  37 |
  38 |         // 7. Send main intent
  39 |         console.log(`Sending intent: "${intent}"...`);
  40 |         await supportPage.sendMessage(intent);
  41 |         console.log('✓ Main intent sent');
  42 |
  43 |         // 8. Wait 2 seconds before sending follow-ups
  44 |         await page.waitForTimeout(2000);
  45 |
  46 |         // 9. Send follow-ups in sequence
  47 |         for (const followUp of followUps) {
  48 |           console.log(`Sending follow-up: "${followUp}"...`);
  49 |           await supportPage.sendMessage(followUp);
  50 |           await page.waitForTimeout(2000);
  51 |           console.log('✓ Follow-up sent');
  52 |         }
  53 |
  54 |         // 10. Verify chat is still active
  55 |         const chatTextArea = page.locator('textarea[id="chatTextArea"]');
  56 |         await expect(chatTextArea).toBeVisible();
  57 |         console.log('✓ Chat is still active and visible');
  58 |
  59 |         // 11. Validar se o botão "Continue to TELUS Expert" existe e é clicável
  60 |         const continueButton = page.getByRole('button', { name: /Continue to TELUS Expert/i });
> 61 |         await expect(continueButton).toBeVisible();
     |                                      ^ Error: Timed out 60000ms waiting for expect(locator).toBeVisible()
  62 |         await expect(continueButton).toBeEnabled();
  63 |         // await continueButton.click(); // Descomente se quiser clicar
  64 |         console.log('✓ Botão \"Continue to TELUS Expert\" está visível e clicável');
  65 |
  66 |         // 12. Clicar no botão de fechar (X) e confirmar encerramento do chat
  67 |         const closeButton = page.getByTestId('ChatClose');
  68 |         await expect(closeButton).toBeVisible();
  69 |         await closeButton.click();
  70 |         console.log('✓ Botão de fechar chat clicado');
  71 |
  72 |         const endChatButton = page.locator('button[data-testid="ChatButton"][data-qa="endChatYes"]');
  73 |         await expect(endChatButton).toBeVisible();
  74 |         await endChatButton.click();
  75 |         console.log('✓ Botão "Yes, end chat" clicado e chat encerrado');
  76 |
  77 |         // 13. Validar que o chat não está mais visível
  78 |         const isChatVisible = await supportPage.isChatVisible();
  79 |         await expect(isChatVisible).toBeFalsy();
  80 |         console.log('✓ Chat não está mais visível após encerramento');
  81 |
  82 |       } catch (error) {
  83 |         console.log('✗ Error during test:', error.message);
  84 |         throw error;
  85 |       }
  86 |     });
  87 |   }
  88 | });
  89 |
  90 | // Create individual test cases
  91 | ffhScenarios.testCases.forEach(testCase => {
  92 |   test(`FFH - ${testCase.intent}`, async ({ runIntentTest }) => {
  93 |     await runIntentTest(testCase.intent, testCase.followUps);
  94 |   });
  95 | }); 
```