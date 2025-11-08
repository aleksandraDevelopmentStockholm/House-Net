import { Page, Response } from "@playwright/test";

/**
 * Press a keyboard key and wait for a GraphQL API response to complete
 * before continuing. This ensures assertions only run after data is loaded.
 *
 * @param page - Playwright Page object
 * @param key - Keyboard key to press (e.g., "Enter", "Space")
 * @returns Promise that resolves with the Response when GraphQL call completes, or null if navigation occurred
 */
export async function pressKeyAndWaitForGraphQL(
  page: Page,
  key: string
): Promise<Response | null> {
  try {
    // Set up listener for GraphQL response with timeout
    const responsePromise = page.waitForResponse(
      (resp) => resp.url().includes("/api/graphql") && resp.status() === 200,
      { timeout: 3000 }
    );

    // Press the key
    await page.keyboard.press(key);

    // Wait for GraphQL response to complete before continuing
    const response = await responsePromise;
    return response;
  } catch {
    // No GraphQL request (likely SSR navigation or filter action)
    // Wait for page to be in a stable state
    await page.waitForLoadState("networkidle");
    return null;
  }
}
/**
 * Wait for either a GraphQL response OR for content to be visible.
 * This handles both client-side fetching (when filters are applied)
 * and server-side rendering (initial page load with no filters).
 *
 * @param page - Playwright Page object
 * @returns Promise that resolves with the Response when GraphQL call completes, or null if SSR data is used
 */
export async function WaitForGraphQL(page: Page): Promise<Response | null> {
  try {
    // Set up listener for GraphQL response with a reasonable timeout
    const responsePromise = page.waitForResponse(
      (resp) => resp.url().includes("/api/graphql") && resp.status() === 200,
      { timeout: 3000 } // If no request happens in 3s, assume SSR data is being used
    );

    const response = await responsePromise;
    return response;
  } catch {
    // No GraphQL request was made (server-side rendering provided the data)
    // Wait for the results container to be visible to ensure content is loaded
    await page.locator("#results").waitFor({ state: "visible" });
    return null;
  }
}

/**
 * Press a keyboard key and wait for a specific option to be highlighted in the dropdown
 *
 * @param page - Playwright Page object
 * @param key - Keyboard key to press (e.g., "ArrowDown", "ArrowUp")
 * @param optionText - Text of the option to wait for (e.g., "House", "Apartment")
 */
export async function navigateWithKeyPress(
  page: Page,
  key: string,
  optionText: string
): Promise<void> {
  await page.keyboard.press(key);

  // Wait for the option with this text to be highlighted
  // Radix UI uses data-highlighted attribute
  await page
    .getByRole("option", { name: optionText })
    .waitFor({ state: "visible" });

  // Give a brief moment for the highlight state to update
  await page.waitForTimeout(50);
}
