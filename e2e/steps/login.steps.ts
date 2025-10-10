import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from "@playwright/test"
import { TestWorld } from 'e2e/world';

Given("I am on the Login page", async function (this: TestWorld) {
    await this.loginPage.goto();
});

When('I login with valid credentials', async function (this: TestWorld) {
    const username = process.env['TEST_USER'] as string;
    const password = process.env['TEST_PASS'] as string;
     
    await this.loginPage.login(username, password);
});

Then('I should see {string} on the page', async function (expectedText: string) {
  const heading = this['page'].locator('h2');
  await expect(heading).toHaveText(expectedText);
});