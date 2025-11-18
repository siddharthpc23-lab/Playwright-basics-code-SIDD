
// login.spec.ts
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/elogin_page';

test.describe('Login Feature', () => {

  test('Valid Login', async ({ page }) => {
    const login = new LoginPage(page);

    await login.Goto();
    await login.login('siddharthpc23@gmail.com', 'Password@123!');
    
    
    // await expect(page.locator("//button[@routerlink='/dashboard/myorders']")).toBeVisible();
    await expect(page.getByRole('listitem').filter({ hasText: 'ORDERS' })).toBeVisible();
});

});