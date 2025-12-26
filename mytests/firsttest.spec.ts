import {test,expect} from '@playwright/test'

test('To verify the home page', {tag:'@smoke'}, async ({page}) => {

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