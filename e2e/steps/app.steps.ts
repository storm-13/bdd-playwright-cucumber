import { Given, Then } from '@cucumber/cucumber';
import { TestWorld } from 'e2e/world';

Given('I am on the homepage', async function (this: TestWorld) {
  await this.homePage.navigateTo();
  console.log("I am on the homepage");
  
});

Then('I see a banner', async function (this: TestWorld) {
  console.log("I see a banner");

});
