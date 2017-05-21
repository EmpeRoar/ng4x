import { Ng4xPage } from './app.po';

describe('ng4x App', () => {
  let page: Ng4xPage;

  beforeEach(() => {
    page = new Ng4xPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
