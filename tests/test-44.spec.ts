
import { test, expect } from '@playwright/test';

test('test if Google search is visibe or not', async ({ page }) => {
    await page.goto('https://www.google.com/');
    await expect(page.getByRole('img', { name: 'Google' })).toBeVisible();
    await expect(page.getByRole('combobox', { name: 'Search' })).toBeVisible();
    await page.getByRole('combobox', { name: 'Search' }).fill('Playwright testing');
    await expect(page.getByRole('button', { name: 'Google Search' })).toBeVisible();
});

