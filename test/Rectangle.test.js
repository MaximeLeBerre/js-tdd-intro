const Rectangle = require('../Rectangle');
const rectangle = new Rectangle(13, 7);

describe('isSquare', () => {
  it('check if square got same border', () => {
    if (rectangle.a === rectangle.b) {
      console.log(true);
    } else {
      console.log(false);
    }
  });
});


describe('getArea', () => {
  it('check that the rectangle is equal to the final area', () => {
    const calcArea = rectangle.a * rectangle.b;
    console.log(calcArea);
  });
});

describe('getPerimeter', () => {
  it('check that the rectangle is equal to the final area', () => {
    const calcPerimeter = rectangle.a * 2 + rectangle.b * 2;
    console.log(calcPerimeter);
  });
});