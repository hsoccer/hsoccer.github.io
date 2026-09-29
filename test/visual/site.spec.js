const { test, expect } = require("@playwright/test");

const routes = ["/", "/research/", "/cv/", "/japanese/"];

for (const route of routes) {
  test(`personal page and navigation: ${route}`, async ({ page }) => {
    const response = await page.goto(`/al-folio${route}`, { waitUntil: "domcontentloaded" });
    expect(response.status()).toBe(200);
    await expect(page.locator("main, .container[role='main'], .post").first()).toBeVisible();
    for (const destination of routes) {
      await expect(page.locator(`nav .navbar-nav a[href='/al-folio${destination}']`)).toHaveCount(1);
    }
    await expect(page.locator("body")).not.toContainText("Albert Einstein");
    await expect(page.locator("body")).not.toContainText("you@example.com");
  });
}

test("profile image loads", async ({ page }) => {
  await page.goto("/al-folio/", { waitUntil: "domcontentloaded" });
  const photo = page.locator("img[alt='hkono.jpeg']");
  await expect(photo).toBeVisible();
  await expect.poll(() => photo.evaluate((image) => image.complete && image.naturalWidth > 0)).toBe(true);
});

test("mobile navigation opens and closes", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "mobile", "Mobile navigation only");
  await page.goto("/al-folio/", { waitUntil: "networkidle" });
  const toggle = page.locator(".navbar-toggler");
  const navigation = page.locator(".navbar-collapse");
  await toggle.click();
  await expect(navigation).toHaveClass(/show/);
  await toggle.click();
  await expect(navigation).not.toHaveClass(/show/);
});
