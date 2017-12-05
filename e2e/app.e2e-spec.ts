import { CodingCubesPage } from './app.po';

describe('coding-cubes App', () => {
  let page: CodingCubesPage;

  beforeEach(() => {
    page = new CodingCubesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
