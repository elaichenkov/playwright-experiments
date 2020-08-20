const { firefox } = require('playwright');
const assert = require('assert');

const Login = require('./Login.page');

(async () => {
  const browser = await firefox.launch();
  const page = await browser.newPage();

  const login = new Login(page);

  const loginUrl = 'https://github.com/login';
  const homeUrl = 'https://github.com/';

  const username = '';
  const password = '';

  await page.goto(loginUrl);
  await login.logIn(username, password);

  const currentUrl = page.url();

  assert.equal(currentUrl, homeUrl);

  await browser.close();
})();
