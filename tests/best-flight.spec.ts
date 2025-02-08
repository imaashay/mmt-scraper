import test, { expect } from "@playwright/test";

test("cheapest flight from Bangalore to Dehradun", async ({ page }) => {
    await page.goto("https://www.makemytrip.com/");

    await page.locator('[data-cy="closeModal"]').click()

    await page.locator('[data-cy="fromCity"]').click()
    await page.getByPlaceholder('From').fill('Bengaluru')
    await page.locator('//li//span[text()="Bengaluru"]').click()

    await page.locator('[data-cy="toCity"]').click()
    await page.getByPlaceholder('To').fill('Dehradun')
    await page.locator('//li//span[text()="Dehradun"]').click()

    // await page.locator('[data-cy="departureDate"]').click()
    await expect(page.locator('.DayPicker-Day--selected .todayPrice')).toContainText(/[0-9]+/)
    let price = await page.locator('.DayPicker-Day--selected .todayPrice').innerText()
    console.log(price)
})