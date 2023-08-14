//test cases 1012ab23s
assert = chai.assert;


describe('Footer Copyright Test', function () {
  it('Should have the copyright symbol in the footer', function () {
    const footerElement = document.querySelector('footer');
    const footerText = footerElement.textContent;
    expect(footerText).to.include('&#169');
  });
});


describe('Footer Test', function () {
  it('Should have the copyright symbol in the footer', function () {
    const footerElement = document.querySelector('footer');
    expect(footerElement.textContent).to.include('&#169');
  });
});

  describe('Recommended Recipe Images Test', function () {
    it('Should have three recommended recipe images', function () {
      const recipeImages = document.querySelectorAll('h3 + a img');
      expect(recipeImages).to.have.lengthOf(3);
    });
  });

