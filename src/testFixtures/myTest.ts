import { test as base } from '@playwright/test';
import { TestPage } from "../pages/testPage"

type MyFixtures = {
    testPage: TestPage
}

export const myTest = base.extend< MyFixtures >({
    testPage: async ({ page }, use) => {
      const testPage = new TestPage(page);
      await testPage.goTo();
      await use(testPage);
    },
  });
  