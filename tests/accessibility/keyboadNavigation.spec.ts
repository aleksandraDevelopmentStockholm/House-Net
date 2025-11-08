import { test, expect } from "@playwright/test";
import { PropertyType } from "../../src/generated/graphql";
import {
  pressKeyAndWaitForGraphQL,
  WaitForGraphQL,
  navigateWithKeyPress,
} from "./helpers";
test("can apply multiple filters and verify filtered results", async ({
  page,
}) => {
  await page.goto("/");

  // Wait for the page to be fully loaded
  let resultsContainer = page.locator("#results");
  await resultsContainer.waitFor({ state: "visible" });

  // Initial assertion - verify results exist
  await expect(resultsContainer).toBeVisible();
  let propertyCards = await resultsContainer.locator("a").all();
  expect(propertyCards.length).toBeGreaterThan(0);

  // === STAGE 1: Apply property type filter (House) ===
  const combobox = page.getByRole("combobox");
  await page.keyboard.press("Tab"); // Skip link
  await page.keyboard.press("Enter");
  await page.keyboard.press("Tab"); // Focus on combobox
  await page.keyboard.press("Space"); // Open dropdown

  // Test bidirectional navigation: Down to Villa, then Up back to House
  await navigateWithKeyPress(page, "ArrowDown", "Apartment");
  await navigateWithKeyPress(page, "ArrowDown", "House");
  await navigateWithKeyPress(page, "ArrowDown", "Villa");
  await navigateWithKeyPress(page, "ArrowUp", "House");

  await page.keyboard.press("Enter");
  await WaitForGraphQL(page);

  // Assert after type filter
  await expect(combobox).toContainText(PropertyType.House);
  propertyCards = await resultsContainer.locator("a").all();
  expect(propertyCards.length).toBeGreaterThan(0);

  for (const card of propertyCards) {
    const typeText = await card.getByTestId("property-type").textContent();
    expect(typeText).toBe(PropertyType.House);

    const ariaLabel = await card.getAttribute("aria-label");
    expect(ariaLabel).toContain(PropertyType.House);
  }

  // === STAGE 2: Apply min price filter ===
  const minPriceInput = page.locator("#min-price");
  await page.keyboard.press("Tab"); // Focus on min price input
  await page.keyboard.type("2000000");
  await WaitForGraphQL(page);

  // Assert after min price filter
  await expect(minPriceInput).toHaveValue("2000000");
  propertyCards = await resultsContainer.locator("a").all();
  expect(propertyCards.length).toBeGreaterThan(0);

  for (const card of propertyCards) {
    // Still filtered by type
    const typeText = await card.getByTestId("property-type").textContent();
    expect(typeText).toBe(PropertyType.House);

    // Price is >= minPrice
    const priceText = await card.getByTestId("property-price").textContent();
    const price = Number(priceText?.replace(/\s/g, "").replace("SEK", ""));
    expect(price).toBeGreaterThanOrEqual(2000000);
  }

  // === STAGE 3: Apply max price filter ===
  const maxPriceInput = page.locator("#max-price");
  await page.keyboard.press("Tab"); // Focus on max price input
  await page.keyboard.type("8000000");
  await WaitForGraphQL(page);

  // Assert after max price filter
  await expect(maxPriceInput).toHaveValue("8000000");
  propertyCards = await resultsContainer.locator("a").all();
  expect(propertyCards.length).toBeGreaterThan(0);

  for (const card of propertyCards) {
    // Still filtered by type
    const typeText = await card.getByTestId("property-type").textContent();
    expect(typeText).toBe(PropertyType.House);

    // Price is within range
    const priceText = await card.getByTestId("property-price").textContent();
    const price = Number(priceText?.replace(/\s/g, "").replace("SEK", ""));
    expect(price).toBeGreaterThanOrEqual(2000000);
    expect(price).toBeLessThanOrEqual(8000000);
  }

  // === STAGE 4: Apply min rooms filter ===
  const minRoomsInput = page.locator("#min-rooms");
  await page.keyboard.press("Tab"); // Focus on min rooms input
  await page.keyboard.type("3");
  await WaitForGraphQL(page);

  // Assert after min rooms filter
  await expect(minRoomsInput).toHaveValue("3");
  propertyCards = await resultsContainer.locator("a").all();
  expect(propertyCards.length).toBeGreaterThan(0);

  for (const card of propertyCards) {
    // Still filtered by type
    const typeText = await card.getByTestId("property-type").textContent();
    expect(typeText).toBe(PropertyType.House);

    // Price is within range
    const priceText = await card.getByTestId("property-price").textContent();
    const price = Number(priceText?.replace(/\s/g, "").replace("SEK", ""));
    expect(price).toBeGreaterThanOrEqual(2000000);
    expect(price).toBeLessThanOrEqual(8000000);

    // Rooms is >= minRooms
    const roomsText = await card.getByTestId("property-rooms").textContent();
    const rooms = Number(roomsText?.replace(/\D/g, ""));
    expect(rooms).toBeGreaterThanOrEqual(3);
  }
});

test("property card aria-label contains all visible information", async ({
  page,
}) => {
  await page.goto("/");

  // Wait for the page to be fully loaded
  await page.waitForSelector("#results", { state: "visible" });
  await WaitForGraphQL(page);

  // Get first property card
  const firstCard = page.locator("#results a").first();

  // Get aria-label
  const ariaLabel = await firstCard.getAttribute("aria-label");
  expect(ariaLabel).not.toBeNull();

  // Get all visible information using data-testid
  const title = await firstCard.getByTestId("property-title").textContent();
  const price = await firstCard.getByTestId("property-price").textContent();
  const location = await firstCard
    .getByTestId("property-location")
    .textContent();
  const rooms = await firstCard.getByTestId("property-rooms").textContent();
  const area = await firstCard.getByTestId("property-area").textContent();
  const type = await firstCard.getByTestId("property-type").textContent();

  // Verify all visible information is in aria-label
  expect(ariaLabel).toContain(title!);
  expect(ariaLabel).toContain("SEK"); // Price includes SEK
  expect(ariaLabel).toContain(location!);
  expect(ariaLabel).toContain(rooms!);
  expect(ariaLabel).toContain(area!);
  expect(ariaLabel).toContain(type!);
});

test("can navigate to property details, verify data matches, and navigate back", async ({
  page,
}) => {
  await page.goto("/");

  // Wait for the page to be fully loaded
  await page.waitForSelector("#results", { state: "visible" });

  // Get first property card and capture all data
  const firstCard = page.locator("#results a").first();

  const title = await firstCard.getByTestId("property-title").textContent();
  const location = await firstCard
    .getByTestId("property-location")
    .textContent();
  const rooms = await firstCard.getByTestId("property-rooms").textContent();
  const area = await firstCard.getByTestId("property-area").textContent();
  const type = await firstCard.getByTestId("property-type").textContent();

  // Extract property ID from href
  const href = await firstCard.getAttribute("href");
  const propertyId = href?.match(/\/property\/(\d+)/)?.[1];
  expect(propertyId).toBeDefined();

  // Navigate to property details using keyboard
  await page.keyboard.press("Tab"); // Skip link
  await page.keyboard.press("Tab"); // Skip link
  await page.keyboard.press("Enter");
  await page.keyboard.press("Tab"); // First property card
  await pressKeyAndWaitForGraphQL(page, "Enter");

  // Verify we're on correct property details page
  await expect(page).toHaveURL(`/property/${propertyId}`);

  // Verify page heading matches
  await expect(page.getByTestId("property-details-title")).toHaveText(title!);

  // Verify each fact matches what we captured from the card
  // Extract numbers from card text for comparison
  const roomsNumber = rooms?.match(/\d+/)?.[0];
  const areaNumber = area?.match(/\d+/)?.[0];

  await expect(page.getByTestId("property-details-rooms-value")).toHaveText(
    roomsNumber!
  );
  await expect(page.getByTestId("property-details-area-value")).toContainText(
    areaNumber!
  );
  await expect(page.getByTestId("property-details-type-value")).toHaveText(
    type!
  );
  await expect(page.getByTestId("property-details-location-value")).toHaveText(
    location!
  );

  // Navigate back using the back button
  const backButton = page.getByRole("link", {
    name: "Navigate back to property listings",
  });
  await backButton.focus();
  await page.keyboard.press("Enter");

  // Wait for navigation to complete
  await page.waitForURL("/");

  // Verify we're back on homepage
  await expect(page).toHaveURL("/");

  // Verify results are visible
  const resultsContainer = page.locator("#results");
  await expect(resultsContainer).toBeVisible();

  // Verify first property card is still there
  await expect(firstCard).toBeVisible();
});
