import {test,expect} from '@playwright/test';
import { ReportsPage } from '../pages/reports_page';  

test.describe("UI Assertions Suite - Rahul Shetty Angular App", () => {
    
    test.beforeEach("Navigate to the page forms",async ({ page }) => {
        
        await page.goto('https://rahulshettyacademy.com/angularpractice/');
        
        
    });
        
    test("Top of the page forms",async ({ page }) => {
        const Reports = new ReportsPage(page);
        // await page.goto('https://rahulshettyacademy.com/angularpractice/');
        // await page.waitForLoadState('domcontentloaded');
        await expect(Reports.home_text).toBeVisible();
        await expect(Reports.shop_text).toBeVisible();
    });

    test("Checkboxes and Labels",async ({ page }) => {
        const Reports = new ReportsPage(page);
        await Reports.checkbox.check();
        await expect(Reports.checkbox).toBeChecked();
        await expect(Reports.check_text).toHaveText('Check me out if you Love IceCreams!');
    });
    
    test("Submit Button and Toasts",async ({ page }) => {
        const Reports = new ReportsPage(page);
        await Reports.submitButton.click();
        await expect(Reports.successToast).toBeVisible();
        await Reports.closeToast.click();
        await expect(Reports.successToast).not.toBeVisible();
    });

    test("Dropdowns and Selected Options",async ({ page }) => {
        const Reports = new ReportsPage(page);
        await Reports.selected_option.selectOption('Female');
        await expect(Reports.selected_option).toHaveValue('Female');
    });

    test("Footer Text Verification",async ({ page }) => {
        const Reports = new ReportsPage(page);
        await expect(Reports.footertext).toHaveText("Copyright © ProtoCommerce 2018");
    
    }); 

});
//tests\test_valid1.spec.ts
//C:\Users\DELL\Desktop\TS-filesdesktop\tests\test_valid1.spec.ts
