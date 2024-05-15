import { expect, test } from "@playwright/test";

test.describe("basic tests", () => {
  test("has title", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle("Wie viele Menschen?");
  });

  test("shows heading", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.locator("h1:has-text('Wie viele Menschen?')"),
    ).toBeVisible();
  });
});
