import { expect } from '@playwright/test';
import { myTest } from '../../../src/testFixtures/myTest';

myTest.describe('select spec', () => {
  myTest('validate selected option', async ({testPage}) => {
    const expectedText = 'firstOption';
    expect(await testPage.selectElement.inputValue()).toEqual(expectedText);
  });

  myTest('select option', async ({testPage}) => {
    await testPage.selectElement.selectOption(['secondOption']);
    expect(await testPage.selectElement.inputValue()).toEqual('secondOption');
  });
});
