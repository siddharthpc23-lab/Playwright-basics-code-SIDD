import { expect,Page } from "@playwright/test";
import { Locator } from "@playwright/test";

export class ReportsPage {
    
  readonly page: Page;
  readonly check_labels :Locator
  readonly checkbox: Locator;
  readonly submitButton: Locator;
  readonly successToast: Locator;
  readonly closeToast: Locator;
  readonly footertext:Locator;
  readonly selected_option:Locator;
  readonly home_text : Locator;
  readonly shop_text : Locator;
  constructor(page: Page) {

    //label is present or not
    this.home_text = page.getByText('Home');
    this.shop_text = page.getByText('Shop');
    //submitButton and successtoast
    this.submitButton = page.getByText('Submit')
    this.successToast = page.getByText('Success! The Form has been submitted successfully!')
    this.closeToast = page.locator(".close")
    //gender
    this.selected_option = page.locator("#exampleFormControlSelect1")
    //checkboxes
    this.checkbox = page.getByRole("checkbox", { name: 'Check me out if you Love IceCreams!' })
    this.check_labels = page.getByLabel('Check me out if you Love IceCreams!')
    //footer 
    this.footertext = page.getByText("Copyright © ProtoCommerce 2018");
    //page???
    this.page = page;
  }
  async form_method(){
    await this.page.goto("https://rahulshettyacademy.com/angularpractice/")
  }

}        