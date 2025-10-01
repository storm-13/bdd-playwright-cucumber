import { test, expect } from '@playwright/test';
import { loginAsValidUser, loginAsInvalidUser } from 'e2e/steps/login.steps';

test('Valid user should log in successfully', async ({ page }) => {
    await loginAsValidUser(page);
    await expect(page.locator('h2')).toHaveText('Secure Area')
});

test('Invalid user should see error message', async({ page }) => {
    await loginAsInvalidUser(page);
    await expect(page.locator('#flash')).toContainText('Your username is invalid!');
})