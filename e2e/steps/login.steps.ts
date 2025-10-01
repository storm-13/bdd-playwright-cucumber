import { Page } from '@playwright/test';
import { asyncWrapProviders } from 'async_hooks';
import { LoginPage } from 'e2e/page_objects/login.po';

export async function loginAsValidUser(page: Page) {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('tomsmith', 'SuperSecretPassword!');   
}

export async function loginAsInvalidUser(page:Page) {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('invalid', 'wrongpass');
}