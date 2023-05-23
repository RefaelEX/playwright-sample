import { Locator, Page, Response } from '@playwright/test';
import { BasePage } from './basePage';
import { getLocator } from '../helpers/getLocator';

const URL = 'http://127.0.0.1:8000/';

const selectors = {
  button: '#testPageClick > button',
  clickDivText: '#testPageClick > div',
  textArea: '#testPageTextArea > textarea',
  inputText: '#testPageInputText > input[type=text]',
  h1: '#testPageHeading > h1',
  alertButton: '#alert-button',
  confirmAlertButton: '#confirm-alert-button',
  anotherAlertButton: '#another-alert-button',
  selectElement: '#testPageSelect > select',
  iframe01: '#iframe01',
  delayButton: '#delay-button',
  delayButtonText: '#delayButtonText',
  hElementInIframe: '#h1-id'
};

export class TestPage extends BasePage {
  public button1: Locator;
  public divClickText: Locator;
  public selectElement: Locator;
  public inputTextElement: Locator;
  public hElement: Locator;
  public textArea: Locator;
  public delayButton: Locator;
  public delayButtonTextDiv: Locator;
  public hElementInIframe: Locator;

  constructor(page: Page) {
    super(page);
    this.button1 = getLocator(page, selectors.button);
    this.divClickText = getLocator(page, selectors.clickDivText);
    this.selectElement = getLocator(page, selectors.selectElement);
    this.inputTextElement = getLocator(page, selectors.inputText);
    this.hElement = getLocator(page, selectors.h1);
    this.textArea = getLocator(page, selectors.textArea);
    this.delayButton = getLocator(page, selectors.delayButton);
    this.delayButtonTextDiv = getLocator(page, selectors.delayButtonText);
    this.hElementInIframe = getLocator(page, selectors.hElementInIframe, selectors.iframe01)
  }

  goTo(): Promise<Response | null> {
    return this.page.goto(URL);
  }
}
