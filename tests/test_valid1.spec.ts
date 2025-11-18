import {test,expect} from '@playwright/test';
import { ReportsPage } from '../pages/reports_page';  
test.describe("UI Assertions Suite - Rahul Shetty Angular App", () => {
    // test.beforeEach("Navigate to the page forms",async ({ page }) => {
    test("Top of the page forms",async ({ page }) => {
        const Reports = new ReportsPage(page);
        // await page.goto('https://rahulshettyacademy.com/angularpractice/');
        // await page.waitForLoadState('domcontentloaded');
        await Reports.form_method();
    });

});