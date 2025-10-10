import { TestWorld } from "e2e/world"; 

export class LoginPage {
    constructor(private world: TestWorld) {}
    
    async goto(): Promise<void> {
        await this.world.page.goto(`${this.world.parameters.logUrl}`);
    }

    async login(username: string, password: string) {
        await this.world.page.fill("#username", username);
        await this.world.page.fill("#password", password);
        await this.world.page.click("button[type='submit']");
    }
}