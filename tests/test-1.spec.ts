import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/?zx=1762488801632&no_sw_cr=1');
  await page.locator('path').nth(1).click();
  await page.locator('path').nth(1).click();
  await page.getByRole('img', { name: 'Google' }).click();
  await expect(page.getByRole('button', { name: 'I\'m Feeling Lucky' })).toBeVisible();
});

