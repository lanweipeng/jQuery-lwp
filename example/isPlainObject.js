
console.log($.isPlainObject({}));//true
console.log($.isPlainObject(new Object()));//true
console.log($.isPlainObject({name:'lwp'}));//true
console.log($.isPlainObject({say:function(){}}));//true
console.log($.isPlainObject('string'));//false
console.log($.isPlainObject(12));//false
console.log($.isPlainObject([]));//false

console.log($.isPlainObject(function(){}));//false
function Person(){
  this.name='zhangsan'
}
debugger
console.log($.isPlainObject(new Person()));//false
console.log($.isPlainObject(Object.create(null)));//true
console.log($.isPlainObject(Object.create(Object.prototype)));//true
console.log($.isPlainObject(Object()));//true