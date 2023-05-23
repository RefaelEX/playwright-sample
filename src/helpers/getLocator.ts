import { Locator, Page } from "@playwright/test";


export function getLocator(page: Page, selector: string, iframeSelector?: string): Locator {
    return iframeSelector ? page.frameLocator(iframeSelector).locator(selector) : page.locator(selector);
}