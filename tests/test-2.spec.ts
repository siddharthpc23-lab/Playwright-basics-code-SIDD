import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.selenium.dev/documentation/');
  await expect(page.getByRole('tab', { name: 'Python' })).toBeVisible();
  await expect(page.getByRole('main')).toContainText('Is Selenium for you? See an overview of the different project components.');
  await expect(page.locator('#docsearch-1')).toMatchAriaSnapshot(`- text: Search`);
  await expect(page.getByRole('link', { name: 'Selenium logo green' })).toBeVisible();
});