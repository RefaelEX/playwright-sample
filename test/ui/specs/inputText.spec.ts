import { expect } from '@playwright/test';
import { myTest } from '../../../src/testFixtures/myTest';

myTest.describe('input text spec', () => {
  myTest('validate input attribute', async ({testPage}) => {
    expect(await testPage.inputTextElement.getAttribute('name')).toEqual('itname');
  });
  
  
  myTest('validate input value', async ({testPage}) => {
    expect(await testPage.inputTextElement.inputValue()).toEqual('Input type Text');
  });
});
