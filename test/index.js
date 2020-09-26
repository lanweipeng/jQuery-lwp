
const add =require('../src/index')
QUnit.test('add two numbers', assert => {
  assert.equal(add(1, 1), 2, '1 + 1 = 2');
});