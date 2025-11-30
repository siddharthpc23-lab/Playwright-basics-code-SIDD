
import {test,expect} from '@playwright/test';

test("Testing if label is present or not for top buttons",async({page}) => {
   
    await page.goto('https://rahulshettyacademy.com/angularpractice/');
    await expect(page.getByLabel('Home')).not.toBeVisible(); // label is not there for this webelement
    await expect(page.getByText('Shop')).toBeVisible(); // text assertion for this webelement
});


test("Checkbox assertion case and then validated check or not",async({page}) => {
   
    await page.goto('https://rahulshettyacademy.com/angularpractice/');
    await expect(page.getByRole("checkbox", { name: 'Check me out if you Love IceCreams!' })).not.toBeChecked();
    await page.getByLabel('Check me out if you Love IceCreams!').check();
    await expect(page.getByRole("checkbox", { name: 'Check me out if you Love IceCreams!' })).toBeChecked();
});

test("Validate Success button is woking and assertions for success toast message",async({page}) => {

    await page.goto('https://rahulshettyacademy.com/angularpractice/');
    await page.getByText('Submit').click();
    await expect(page.getByText('Success! The Form has been submitted successfully!')).toBeVisible();
    await page.locator(".close").click(); // to close the toast message
    await expect(page.getByText('Success! The Form has been submitted successfully!')).not.toBeVisible();
});

test("Verify Gender value, change the value", async ({ page }) => {
        await page.goto('https://rahulshettyacademy.com/angularpractice/');
        await page.locator("#exampleFormControlSelect1").selectOption("Female");
        await expect(page.locator("#exampleFormControlSelect1")).toContainText("Female");
    });  


test("Assertion if footer text is present or not",async({page}) => {

    await page.goto('https://rahulshettyacademy.com/angularpractice/');
    await expect(page.getByText("Copyright © ProtoCommerce 2018")).toBeVisible();
});


