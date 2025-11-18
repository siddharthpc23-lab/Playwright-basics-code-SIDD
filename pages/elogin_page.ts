import { Page, Locator } from '@playwright/test';

export class LoginPage {
<<<<<<< HEAD
  readonly page: Page; //Type --> Page - browser tab
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginBtn: Locator;
=======
  private page: Page; //Type --> Page - browser tab
  private usernameInput: Locator;
  private passwordInput: Locator;
  private loginBtn: Locator;
>>>>>>> cab14df (Initial file login issues)

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('#userEmail');
    this.passwordInput = page.locator('#userPassword');
    // this.loginBtn = page.locator('button[type="submit"]');
    //this.loginBtn = page.locator("btn.btn-block.login-btn") // chaining didn't worked
    // this.loginBtn = page.getByRole('button', { name: 'Login' });
<<<<<<< HEAD
    this.loginBtn = page.getByRole('button', { name: 'Login' });
}

  async Goto() {
=======
    this.loginBtn = page.locator('#login');
}

  async goto() {
>>>>>>> cab14df (Initial file login issues)
    await this.page.goto('https://rahulshettyacademy.com/client/#/auth/login');
  }

  async login(username: string, password: string) {
<<<<<<< HEAD
    
=======
>>>>>>> cab14df (Initial file login issues)
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginBtn.click();
  }
}