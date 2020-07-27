
var notDeep={},notDeepClone={name:'lwp',age:23};
$.extend(notDeep,notDeepClone);
console.log(notDeep)
var deep={};
deep={name:'lwp',age:23,firends:{name:'huangwei'}}
$.extend(true,deep,{name:'lwp',age:23,firends:{name:'huangwei'}})
console.log(deep)