class BasePage {
  constructor(page) {
    this.page = page;
  }

  async waitForElement(selector, options = {}) {
    await this.page.waitForSelector(selector, options);
  }

  async click(selector) {
    await this.waitForElement(selector);
    await this.page.click(selector);
  }

  async fill(selector, text) {
    await this.waitForElement(selector);
    await this.page.fill(selector, text);
  }

  async getText(selector) {
    await this.waitForElement(selector);
    return await this.page.textContent(selector);
  }

  async isVisible(selector) {
    return await this.page.isVisible(selector);
  }
}

module.exports = BasePage; 