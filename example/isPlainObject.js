
//number false
console.log($.isPlainObject(3))
//boolean false
console.log($.isPlainObject(true))
//string false
console.log($.isPlainObject('4'))
console.log($.isPlainObject(new String('4')))
//bigint false
console.log($.isPlainObject(300000303000030300n))
//symbol false
console.log($.isPlainObject(Symbol()))
//null false
console.log($.isPlainObject(null))
//undefined false
console.log($.isPlainObject(undefined))
//object true
console.log($.isPlainObject({name:'lwp'}))
console.log($.isPlainObject({}))
console.log($.isPlainObject(new Object()))
//function false
console.log($.isPlainObject(function(){}))
console.log($.isPlainObject(class Person{}))
//array false
console.log($.isPlainObject([2]))
//date false
console.log($.isPlainObject(new Date()))
//regexp false
console.log($.isPlainObject(/3/))
//error false
console.log($.isPlainObject(new Error()))