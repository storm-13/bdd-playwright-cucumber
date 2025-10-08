import { Given, When, Then } from '@cucumber/cucumber';
import { LoginPage } from '../page_objects/login.po';
import { expect } from "@playwright/test"
import { TestWorld } from 'e2e/world';
import { USERNAME, PASSWORD } from "../support/env";

/*
const username = process.env.TEST_USER;
const password = process.env.TEST_PASS;
*/

let loginPage: LoginPage;


Given("I am on the Login page", async function (this: TestWorld) {
    loginPage = new LoginPage(this.page);
    await loginPage.goto();
});

When('I login with valid credentials', async function () {
    //loginPage.login(USERNAME,PASSWORD);//'tomsmith', 'SuperSecretPassword!');
    const username = process.env['TEST_USER'] as string;
    const password = process.env['TEST_PASS'] as string;
     
    await loginPage.login(username, password);
});

Then('I should see {string} on the page', async function (expectedText: string) {
  const heading = this['page'].locator('h2');
  await expect(heading).toHaveText(expectedText);
});

/*
export async function loginAsInvalidUser(page:Page) {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('invalid', 'wrongpass');
}
*/