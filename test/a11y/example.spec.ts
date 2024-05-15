import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("index", () => {
  test("should not have any automatically detectable accessibility issues", async ({
    page,
  }) => {
    await page.goto("/");
    await expect(
      page.locator("h1:has-text('Wie viele Menschen?')"),
    ).toBeVisible();

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
