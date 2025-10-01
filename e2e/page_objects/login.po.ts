import { Page } from '@playwright/test';

export class LoginPage {
    constructor(private page: Page) {}
    
    async goto() {
        await this.page.goto('https://the-internet.herokuapp.com/login');
    }

    async login(username: string, password: string) {
        await this.page.fill('#username', username);
        await this.page.fill('#password', password);
        await this.page.click('button[type="submit"]');
    }
}