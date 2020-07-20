var element
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
