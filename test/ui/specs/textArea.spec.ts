import { expect } from '@playwright/test';
import { myTest } from '../../../src/testFixtures/myTest';


myTest.describe('text area spec', () => {
  
  myTest('should get textarea value', async ({testPage}) => {
    const expectedDefaultValue = 'Text Area';
    const currValue = (await testPage.textArea.inputValue()).trim();
    expect(currValue).toEqual(expectedDefaultValue);
  });
  
  myTest('should clear textArea', async ({testPage}) => {
    const expectedValue = '';
    await testPage.textArea.fill('');
    const currValue = await testPage.textArea.inputValue();
    expect(currValue).toEqual(expectedValue);
  });

  myTest('should fill textArea', async ({testPage}) => {
    const expectedNewValue = 'New Text In Text Area';
    await testPage.textArea.fill(expectedNewValue);
    const currValue = await testPage.textArea.inputValue();
    expect(currValue).toEqual(expectedNewValue);
  });
});
