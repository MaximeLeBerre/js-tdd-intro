const assert = require('assert');
const Rectangle = require('../Rectangle');

describe('rectangle', () => {
  it('is a square', () => {
    const rectangle = new Rectangle(10, 10);
    // test1: check taht a and b are equal
    assert.strictEqual(rectangle.isSquare(), true);
  })

  it('is a not square', () => {
    const rectangle = new Rectangle(12, 7);
    // test2: check that a and b are !equal
    assert.strictEqual(rectangle.isSquare(), false);
  })

  it('gives the area', () => {
    const rectangle = new Rectangle(20, 3);
    // test3: check that the getArea is processed well
    assert.strictEqual(rectangle.getArea(), 60)
  })

  it('gives the perimeter', () => {
    const rectangle = new Rectangle(15, 6);
    // test4: check that the getPerimeter is processed well
    assert.strictEqual(rectangle.getPerimeter(), 42)
  })
})