var element
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
    return document.querySelector(select)
  }else{
    return document.querySelectorAll(select)

  }
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
function $(body){
  console.log(body)
// window.onload=body()
}