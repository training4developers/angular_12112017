import { AppPage } from './app.po';

describe('demo-app App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display home works message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('home works!');
  });
});
