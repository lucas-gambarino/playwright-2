// Chat selectors
const SELECTORS = {
  SUPPORT_BUTTON: 'li[id="ge-supernav-support"]',
  COOKIES_BUTTON: 'button[id="onetrust-accept-btn-handler"]',
  CHAT_BUTTON: 'div[id="engageChat"]',
  CHAT_TEXTAREA: 'textarea[id="chatTextArea"]',
  YES_BUTTON: 'button[value="yes"]',
  MOBILITY_BUTTON: 'button[value="mobility"]',
  MONTHLY_BUTTON: 'button[value="monthly"]',
  LOGIN_CHAT_BUTTON: 'div[role="button"]:has-text("Login")',
  MESSAGE_BUBBLE: 'div[data-testid="MessageBubble"]',
  USERNAME_FIELD: 'input[data-testid="username"]',
  PASSWORD_FIELD: 'input[data-testid="password"]',
  LOGIN_BUTTON: 'button[data-testid="login-large-btn"]'
};

// Login credentials
const CREDENTIALS = {
  USERNAME: 'marc',
  PASSWORD: 'regishannah1956'
};

const CREDENTIALS_FIRST_LOGIN = {
  USERNAME: 'test@fake.address.com',
  PASSWORD: 'Passw0rd'
};

const CREDENTIALS_SECOND_LOGIN = {
  USERNAME: '2fa_prod_1@telusinternal.com',
  PASSWORD: 'Vader_qa1'
};

// Chat messages
const MESSAGES = {
  INITIAL: {
    GREETING: "Hi, I'm TELUS Virtual Assistant!",
    NO_ACCOUNT: "I can't seem to find any accounts associated to your profile",
    HELP_PROMPT: "In a sentence or two, how can I help?"
  }
};

module.exports = {
  SELECTORS,
  CREDENTIALS,
  CREDENTIALS_FIRST_LOGIN,
  CREDENTIALS_SECOND_LOGIN,
  MESSAGES
}; 