import { expect } from '@playwright/test';
import { myTest } from '../../../src/testFixtures/myTest';

myTest.describe('iframe spec', () => {
  myTest('should get text of element inside the iframe', async ({testPage}) => {
    const expectedText = 'This page is displayed in an iframe';
    
    const hText = await testPage.hElementInIframe.innerText();
    expect(hText).toEqual(expectedText);
  });
});
