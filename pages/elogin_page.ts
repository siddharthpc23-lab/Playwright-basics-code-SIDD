import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page; //Type --> Page - browser tab
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('#userEmail');
    this.passwordInput = page.locator('#userPassword');
    // this.loginBtn = page.locator('button[type="submit"]');
    //this.loginBtn = page.locator("btn.btn-block.login-btn") // chaining didn't worked
    // this.loginBtn = page.getByRole('button', { name: 'Login' });
    this.loginBtn = page.getByRole('button', { name: 'Login' });
}

  async Goto() {
    await this.page.goto('https://rahulshettyacademy.com/client/#/auth/login');
  }

  async login(username: string, password: string) {
    
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginBtn.click();
  }
}