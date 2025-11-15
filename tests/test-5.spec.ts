import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/angularpractice/');
  await expect(page.getByRole('heading', { name: 'Protractor Tutorial' })).toBeVisible();
  await expect(page.getByText('Be assured that product you ordered in this site will never arrive, Instead we hope your takeaway')).toBeVisible();
  await expect(page.locator('form')).toContainText('Check me out if you Love IceCreams!');
  await expect(page.getByRole('textbox', { name: 'Password' })).toBeEmpty();
  await expect(page.getByLabel('Gender')).toHaveValue('Male');
  await page.getByLabel('Gender').selectOption('Female');
  //await expect(page.getByRole('heading',{name:"Be assured that product you ordered in this site will never arrive, Instead we hope your takeaway"})).toBeVisible();
  await page.getByRole("checkbox", { name: 'Check me out if you Love IceCreams!' }).check();
  await expect(page.getByRole('button')).toMatchAriaSnapshot(`- button "Submit"`);
});