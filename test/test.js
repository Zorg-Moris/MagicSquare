const assert = require('assert');
const { magicSquareFunc } = require('./function');
describe('Magic Square', function () {
  it('[[4, 9, 2], [3, 5, 7], [8, 1, 5]] should return 1', function () {
    let magicSquare = [[4, 9, 2], [3, 5, 7], [8, 1, 5]];
    let result = magicSquareFunc(magicSquare);
    assert.equal(result, 1);
  });
  it('[[4, 8, 2], [4, 5, 7], [6, 1, 6]] should return 20', function () {
    let magicSquare = [[4, 7, 1], [5, 9, 2], [8, 6, 5]];
    let result = magicSquareFunc(magicSquare);
    assert.equal(result, 20);
  });
});