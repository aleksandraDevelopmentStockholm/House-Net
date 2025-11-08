  import { test, expect } from '@playwright/test';
  import AxeBuilder from '@axe-core/playwright';

  test('check accessibility and log violations on homepage', async ({ page }) => {
    await page.goto('/');

    // Wait for the results container to be visible, indicating the page has fully loaded
    await page.waitForSelector('#results', { state: 'visible' });

    const accessibilityScanResults = await new AxeBuilder({ page })
      .analyze();

    // Log violations if any
    if (accessibilityScanResults.violations.length > 0) {
      console.log('Accessibility violations found:');
      accessibilityScanResults.violations.forEach(violation => {
        console.log(`- ${violation.id}: ${violation.description}`);
        console.log(`  Impact: ${violation.impact}`);
        console.log(`  Help: ${violation.helpUrl}`);
      });
    }

    expect(accessibilityScanResults.violations).toEqual([]);
  });

    test('check accessibility and log violations on property page', async ({ page }) => {
    await page.goto('/property/1');

    // Wait for the property title to be visible, indicating the page has fully loaded
    await page.waitForSelector('[data-testid="property-details-title"]', { state: 'visible' });

    const accessibilityScanResults = await new AxeBuilder({ page })
      .analyze();

    // Log violations if any
    if (accessibilityScanResults.violations.length > 0) {
      console.log('Accessibility violations found:');
      accessibilityScanResults.violations.forEach(violation => {
        console.log(`- ${violation.id}: ${violation.description}`);
        console.log(`  Impact: ${violation.impact}`);
        console.log(`  Help: ${violation.helpUrl}`);
      });
    }

    expect(accessibilityScanResults.violations).toEqual([]);
  });