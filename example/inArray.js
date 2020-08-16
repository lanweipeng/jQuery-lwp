function say(){

}
var obj={}
var list=[say,obj,'hh'];
console.log(jQuery.inArray(say,list))
console.log(jQuery.inArray(obj,list))
console.log(jQuery.inArray('hh',list))
console.log(jQuery.inArray('hh',{}))//这就是为什么要用indexOf.call 而不是直接.indexOf,因为原型链可能不存在此方法，那就会报错
console.log(jQuery.inArray('hh',undefined))