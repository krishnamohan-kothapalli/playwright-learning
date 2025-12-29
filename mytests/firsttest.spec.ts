import {test,expect} from '@playwright/test'

test('To verify the home page @smoke', 
    {annotation:{
        type: 'Krishna',
        description: 'This is a test Annotation',
    },
}, async ({page}) => {

    //navigate to the web page
    await page.goto('https://www.facebook.com/');

    //to verify the page title
    await expect(page).toHaveTitle(/Facebook/);
});

test('Input username and password @regression', async({page}) => {
    await page.goto('https://www.facebook.com/');

    const userName = page.getByRole('textbox',{name: 'email'}); 
    await userName.fill('kkothapalli0909@gmail.com');

    const pBox = page.getByRole('textbox', {name: 'pass'});
    await pBox.fill('testPassword');

})

test.afterEach(async ({ page }) => {
    console.log(`Finished ${test.info().title} with status ${test.info().status}`);
 
    if (test.info().status !== test.info().expectedStatus)
      console.log(`Did not run as expected, ended up at ${page.url()}`);
  });