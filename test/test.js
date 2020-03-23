const assert = require('assert');
const magicSquare = require('../src/index');
describe('Magic Square', function() {
  it('[[4, 9, 2], [3, 5, 7], [8, 1, 5,]] should return 1', function() {
    const s =  [[4, 9, 2], [3, 5, 7], [8, 1, 5,]];
    const result = magicSquare(s);
    assert.equal(result, 1)
  });
  it('[[4, 8, 2], [4, 5, 7], [6, 1, 6,]] should return 4', function() {
    const s =  [[4, 8, 2], [4, 5, 7], [6, 1, 6,]];
    const result = magicSquare(s);
    assert.equal(result, 4)
  });
});