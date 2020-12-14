const assert = require('assert');
const Rectangle = require('../Rectangle');

describe('rectangle', () => {
  it('is a square', () => {
    const rectangle = new Rectangle(10, 10);
    assert.strictEqual(rectangle.isSquare(), true);
  })

  it('is a not square', () => {
    const rectangle = new Rectangle(12, 7);
    assert.strictEqual(rectangle.isSquare(), false);
  })

  it('gives the area', () => {
    const rectangle = new Rectangle(20, 3);
    assert.strictEqual(rectangle.getArea(), 60)
  })

  it('gives the perimeter', () => {
    const rectangle = new Rectangle(15, 6);
    assert.strictEqual(rectangle.getPerimeter(), 42)
  })
})