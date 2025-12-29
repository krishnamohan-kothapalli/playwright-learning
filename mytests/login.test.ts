import {chromium, test} from "@playwright/test"

test("Login test demo", async ()=> {

    const browser = await chromium.launch({});
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://ecommerce-playground.lambdatest.io/");
    await page.hover("//a[@data-toggle='dropdown']//span[contains(.,'My account')]");
    await page.click("text=Login");

    await page.fill("//input[@name='email']", "kkothapalli0909@gmail.com");
    await page.fill("//input[@name='password']", "Pass123");

    await page.click("//input[@value='Login']");

    await page.waitForTimeout(5000);

    // new page for another tab
    const newPage = await context.newPage();
    newPage.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");

    await newPage.waitForTimeout(5000);

    // new context within the browser for new browser session
    const newContext = await browser.newContext();
    const newContextPage = await newContext.newPage();

    await newContextPage.goto("https://ecommerce-playground.lambdatest.io/");

    await page.waitForTimeout(5000);
})