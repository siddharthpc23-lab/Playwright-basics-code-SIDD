import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.selenium.dev/documentation/');
  await expect(page.getByRole('heading', { name: 'The Selenium Browser' })).toBeVisible();
  await expect(page.locator('body')).toContainText('Edit this page');
  await expect(page.getByRole('link', { name: 'Selenium logo green' })).toBeVisible();
  await expect(page.locator('h4')).toMatchAriaSnapshot(`
    - heading /Registrations Open for SeleniumConf \\d+ \\| May \\d+–\\d+ \\| Join Us In-Person! Register now!/ [level=4]:
      - link "Register now!":
        - /url: https://seleniumconf.com/register/?utm_medium=Referral&utm_source=selenium.dev&utm_campaign=register
    `);
  await expect(page1.getByRole('textbox', { name: 'Password' })).toBeEmpty();
  await page1.getByRole('textbox', { name: 'Username or email address' }).click();
  await page1.getByRole('textbox', { name: 'Username or email address' }).fill('siddharth@gmail.com');
  await page1.getByRole('textbox', { name: 'Password' }).click();
  await page1.getByRole('textbox', { name: 'Password' }).fill('sddwdwdw1');
  await expect(page1.getByRole('textbox', { name: 'Password' })).toHaveValue('sddwdwdw1');
  await expect(page1.getByRole('main')).toContainText('Username or email address');
  //pick locators
});