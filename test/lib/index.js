
// const add =require('../src/index')
// QUnit.test('add two numbers', assert => {
//   assert.equal(add(1, 1), 2, '1 + 1 = 2');

// const QUnit = require("./qunit");

// });
QUnit.test('add two numbers', assert => {
  assert.equal($.isNumberic(1), true, '$.isNumberic(1)');
});
QUnit.test('trim',assert=>{
  assert.equal($.trim("  hello, how are you?  "),"hello, how are you?","\s")
  assert.equal($.trim(" f   "),"f"," f  ")
})