import { TestWorld } from 'e2e/world';

export class HomePage {
  constructor(private world: TestWorld) {}

  async navigateTo(): Promise<void> {
    await this.world.page.goto(`${this.world.parameters.appUrl}`);
  }

  async hasRunningText(): Promise<boolean> {
    return this.world.page.isVisible('//span[text()="cucumber-playwright-starter app is running!"]');
  }
}
