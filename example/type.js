
//number
console.log($.type(3))
//boolean
console.log($.type(true))
//string
console.log($.type('4'))
//bigint
console.log($.type(300000303000030300n))
//symbol
console.log($.type(Symbol()))
//null
console.log($.type(null))
//undefined
console.log($.type(undefined))
//object
console.log($.type({name:'lwp'}))
//function
console.log($.type(function(){}))
console.log($.type(class Person{}))
//array
console.log($.type([2]))
//date
console.log($.type(new Date()))
//regexp
console.log($.type(/3/))
//error
console.log($.type(new Error()))
