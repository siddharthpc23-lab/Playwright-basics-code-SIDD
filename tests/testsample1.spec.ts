import {test, expect} from '@playwright/test';

test('sample test 1', async ({page}) => {
  await page.goto('https://www.google.com/');

});