import { Page, Response } from '@playwright/test';

export abstract class BasePage {

  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  abstract goTo(): Promise<null | Response>;
}
