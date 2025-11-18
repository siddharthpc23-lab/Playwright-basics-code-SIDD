
// login.spec.ts
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/elogin_page';

test.describe('Login Feature', () => {

  test('Valid Login', async ({ page }) => {
    const login = new LoginPage(page);

    await login.goto();
    await login.login('Test@email.com', 'Password$!23');

    
    // await expect(page.locator("//button[@routerlink='/dashboard/myorders']")).toBeVisible();
    await expect(page.getByRole('button', { name: '   ORDER '})).toBeVisible();
});

});