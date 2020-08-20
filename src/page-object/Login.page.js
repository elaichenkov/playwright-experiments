class Login {
  get loginField() {
    return this.page.$('#login_field');
  }
  get passwordField() {
    return this.page.$('#password');
  }
  get forgotPasswordLink() {
    return this.page.$('[for="password"] a');
  }

  get signInButton() {
    return this.page.$('[value="Sign in"]');
  }

  get createAccountLink() {
    return this.page.$('.create-account-callout a');
  }

  constructor(page) {
    this.page = page;
  }

  async enterLogin(username) {
    const loginInput = await this.loginField;

    return loginInput.fill(username);
  }

  async enterPassword(password) {
    const passwordInput = await this.passwordField;

    return passwordInput.fill(password);
  }

  async clickSignInButton() {
    const signInButton = await this.signInButton;

    return signInButton.click();
  }

  async clickForgotPasswordLink() {
    const forgotPasswordLink = await this.forgotPasswordLink;

    return forgotPasswordLink.click();
  }

  async logIn(username, password) {
    await this.enterLogin(username);
    await this.enterPassword(password);
    await this.clickSignInButton();
  }
}

module.exports = Login;
