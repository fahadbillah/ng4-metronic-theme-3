import { MetronicNg4Page } from './app.po';

describe('metronic-ng4 App', () => {
  let page: MetronicNg4Page;

  beforeEach(() => {
    page = new MetronicNg4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
