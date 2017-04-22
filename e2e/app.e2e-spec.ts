import { AngularTohPage } from './app.po';

describe('angular-toh App', () => {
  let page: AngularTohPage;

  beforeEach(() => {
    page = new AngularTohPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
