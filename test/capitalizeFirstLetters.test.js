// test/capitalizeFirst.test.js
const assert = require('assert');
const capitalizeFirstLetters = require('../capitalizeFirstLetters');


describe('capitalizeFirstLetters', () => {
  it('is a function accepting one arg', () => {
    assert.strictEqual(typeof capitalizeFirstLetters, 'function');
    assert.strictEqual(capitalizeFirstLetters.length, 1);
  });
  it('transform javascript correctly', () => {
    assert.strictEqual(capitalizeFirstLetters('javaScript'), 'JavaScript');
  });
  it('works with a 1 character string', () => {
    assert.strictEqual(capitalizeFirstLetters('z'), 'Z');
  });
  it('works with an empty string', () => {
    assert.strictEqual(capitalizeFirstLetters(''), '');
  });
});

