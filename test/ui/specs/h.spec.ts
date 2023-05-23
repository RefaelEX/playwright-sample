import { expect } from '@playwright/test';
import { myTest } from '../../../src/testFixtures/myTest';

myTest.describe('h spec', () => {
  myTest('validate h text', async ({testPage}) => {
    const expectedText = 'Test Page';
    expect(await testPage.hElement.innerText()).toEqual(expectedText);
  });

  myTest('validate h css property', async ({testPage}) => {
    const expectedCssValue = 'center';
    await expect(testPage.hElement).toHaveCSS('text-align', expectedCssValue);
  });
});
