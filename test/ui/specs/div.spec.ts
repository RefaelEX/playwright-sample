import { expect } from '@playwright/test';
import { myTest } from '../../../src/testFixtures/myTest';

myTest.describe('div spec', () => {
  myTest('validate div text', async ({testPage}) => {
    const expectedText = 'I was not clicked';
    expect(await testPage.divClickText.innerText()).toEqual(expectedText);
  });
});
