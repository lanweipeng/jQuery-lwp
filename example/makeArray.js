let obj={1:'lwp',0:10,length:2}
let obj2={1:'lwp',0:10}
console.log($.makeArray(obj))
console.log($.makeArray(obj2,obj))
console.log($.makeArray("obj"))
console.log($.makeArray(1))
console.log($.makeArray(0))
console.log($.makeArray(""))
console.log($.makeArray(null))//[]

console.log($.makeArray(undefined))//[]
// debugger
// let obj={name:'lwp',age:'2',length:0}
// console.log(isArrayLike(obj))
// for(let i in obj){
// 	console.log(i)
// }