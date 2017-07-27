import { CRParadisePage } from './app.po';

describe('cr-paradise App', () => {
  let page: CRParadisePage;

  beforeEach(() => {
    page = new CRParadisePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
