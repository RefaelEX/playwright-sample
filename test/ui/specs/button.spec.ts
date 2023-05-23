import { expect } from '@playwright/test';
import { myTest } from '../../../src/testFixtures/myTest';

myTest.describe('button spec', () => {
  
  myTest('click button', async ({testPage}) => {
    const expectedClickedText = 'I was clicked';
    await testPage.button1.click();
    expect(await testPage.divClickText.innerText()).toEqual(expectedClickedText);
  });
  
  myTest('should validate button text', async ({testPage}) => {
    expect(await testPage.button1.innerText()).toEqual('Click me');
  });
  
  myTest('should click button after 3 second delay', async ({testPage}) => {
    const expectedClickedText = 'I was clicked after delay';
    await testPage.delayButton.click();
    expect(await testPage.delayButtonTextDiv.innerText()).toEqual(expectedClickedText);
  });
  
  myTest('should be disabled on page load', async ({testPage}) => {
    expect(await testPage.delayButton.isDisabled()).toBeTruthy();
    /**
     * Using Assertions library
     * https://playwright.dev/docs/test-assertions
     */
    await expect(testPage.delayButton).toBeDisabled();
  });
});
