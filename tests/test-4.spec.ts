import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/?zx=1762699947411&no_sw_cr=1');
  await page.getByRole('img', { name: 'Google' }).click();
  await page.getByRole('img', { name: 'Google' }).click();
});