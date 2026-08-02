import { test, expect } from '@playwright/test';

const url = 'https://the-internet.herokuapp.com/login';

test('Login successful', async ({ page }) => {
  await page.goto(url);
  await page.fill('[name="username"]', 'tomsmith');
  await page.fill('[name="password"]','SuperSecretPassword!');
  await page.getByRole('button',{name:' Login'}).click();
  await expect(page.locator('#flash')).toHaveText(/You logged into a secure area!/);
  await page.getByRole('link',{name:' Logout'}).click();
  await expect(page.locator('#flash')).toHaveText(/You logged out of the secure area!/);
});

test('Login failed-Password is incorrect', async ({ page }) => {
  await page.goto(url);
  await page.fill('[name="username"]', 'tomsmith');
  await page.fill('[name="password"]','Password!');
  await page.getByRole('button',{name:' Login'}).click();
  await expect(page.locator('#flash')).toHaveText(/Your password is invalid!/);
});

test('Login failed-Username not found',async ({page})=>{
    await page.goto(url);
    await page.fill('[name="username"]', 'tomholland');
    await page.fill('[name="password"]','Password!');
    await page.getByRole('button',{name:' Login'}).click();
    await expect(page.locator('#flash')).toHaveText(/Your username is invalid!/);
});