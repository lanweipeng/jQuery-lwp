
var notDeep={},obj1={name:'lwp',age:23};
obj2={name:'hw',age:undefined}
// $.extend(notDeep,obj1);
// console.log(notDeep)
$.extend(notDeep,obj2);
console.log(notDeep)
// var deep={};
// deep={name:'lwp',age:23,firends:{name:'huangwei'}}
// $.extend(true,deep,{name:'lwp',age:23,firends:{name:'huangwei'}})
// console.log(deep)