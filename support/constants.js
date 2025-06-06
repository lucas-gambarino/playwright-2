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
  USERNAME: process.env.WINDOWS_AUTH_USERNAME,
  PASSWORD: process.env.WINDOWS_AUTH_PASSWORD
};

const CREDENTIALS_FIRST_LOGIN = {
  USERNAME: process.env.DEFAULT_USER_USERNAME,
  PASSWORD: process.env.DEFAULT_USER_PASSWORD
};

const CREDENTIALS_SECOND_LOGIN = {
  USERNAME: process.env.DEFAULT_USER_USERNAME_LOGIN_2,
  PASSWORD: process.env.DEFAULT_USER_PASSWORD_LOGIN_2
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