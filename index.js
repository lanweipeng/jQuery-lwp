var element,
class2type={
"[object Number]":"number",
"[object Boolean]":"boolean",
"[[object String]":"string",
"[object BigInt]":"bigint",
"[object Symbol]":"symbol",
"[object Null]":"null",
"[object Undefined]":"undefined",
"[object Object]":"object",
"[object Function]":"function",
"[object Array]":"array",
"[object Date]":"date",
"[object RegExp]":"rgexp",
"[object Error]":"error",
"[object String]":"string",
},
arr=[]
push=arr.push

// console.log(class2type)
var s
var $ = function (select) {
  if(typeof select === 'function'){
    window.onload=select()
  }
  else if (select === undefined) {

    return
  }
 else if (select instanceof Node) {
    element = select
    return $
  } else if (select.substr(0, 1) == '#') {
    s=document.querySelector(select)
    return document.querySelector(select)
  }else{
    return document.querySelectorAll(select)

  }
  return this
}


$.getButton = function (event) {
  if (document.implementation.hasFeature('MouseEvents', '2.0')) {
    return event.button
  } else {
    switch (event.button) {
      case 7: return 0
      case 6: return 2
      case 4: return 1
    }
  }
}
$.getCharCode = function (event) {
  if (typeof event.charCode == 'number') {
    return event.charCode
  } else {
    return event.keyCode
  }
}
$.addClass = function (string) {
  element.classList.add(string)
}
$.removeClass = function (string) {
  element.classList.remove(string)
}

$.getClipboardText=function(event){
  var clipboardData=(event.clipboardData||window.clipboardData)
  return clipboardData.getData('text')
}
$.setClipboardText=function(event,value){
  if(event.clipboardData){
    return event.clipboardData.setData('text/plian',value)
  }else if(window.clipboardData){
    return window.clipboardData.setData('text',value)
  }
}
$.css=function(x,y){
console.log(s)
}
const JQ=function(){};
JQ.prototype={
  css:function(x,y){
    console.log(s)
    }
}
var jq=new JQ();
function $(body){
  console.log(body)
// window.onload=body()
}
$.type=ToType;
toString=Object.prototype.toString;
function ToType(obj){
  console.log(toString.call(obj))
return class2type[toString.call(obj)]
}
$.isPlainObject=function(obj){
  console.log(class2type[toString.call(obj)])
return class2type[toString.call(obj)]==='object'
}
$.prototype={
  merge:function(first,second){
return [...first,...second]
  },
}
$.merge = function (first, second) {
  var len = +second.length
  i = first.length
  j = 0;
  for (; j < len; j++) {
    first[i++] = second[j];
  }
  first.length = i
  return first
}
$.parseHTML=function(str){

}
$.isWindow=function(obj){
  return obj===window
  // return obj!=null && obj===window
}

$.makeArray=function(arr,result){
  var ret=result||[];
  if(arr!=null){
if(isArrayLike(Object(arr))){
$.merge(ret,typeof arr==="string"?[arr]:arr)
}else{
  // push.call(ret,arr)
  ret.push(arr)
}
  }
  return ret
}
function isArrayLike(obj){
  var length=!!obj&&length in obj&&obj.length,
  type=$.type(obj)
  return type==="array"||length===0||(length-1) in obj
}
var jQuery=function(selector){
  return new jQuery.fn.init(selector);
};
jQuery.fn=jQuery.prototype={

}
var init=jQuery.fn.init=function(selector){
  var elem=document.getElementById(selector.split('#')[1]);
  this[0]=elem;
  this.length=1
  return this
}
init.prototype=jQuery.fn;
