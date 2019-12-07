var element
var $ = function (select) {
  if (select === undefined) {
    return
  }
  if (select instanceof Node) {
    element = select
    return $
  } else if (select.substr(0, 1) == '#') {
    return document.querySelector(select)
  }
  return document.querySelectorAll(select)
}

var EventUtil = {
  addHandler: function (element, type, handler) {
    if (element.addEventListener) {
      element.addEventListener(type, handler, false)
    } else if (element.attachEvent) {
      element.attachEvent('on' + type, handler)
    } else {
      element['on' + type] = handler
    }
  },
  getEvent: function (event) {
    return event ? event : window.event
  },
  getTarget: function (event) {
    return event.target || event.srcElement
  },
  preventDefault: function (event) {
    if (event.preventDefault) {
      event.preventDefault()
    } else {
      event.returnValue = false
    }
  },
  removeHandle: function (element, type, handler) {
    if (element.removeEventListener) {
      element.addEventListener(type, handler, false)
    } else if (element.detachEvent) {
      element.detachEvent('on' + type, handler)
    } else {
      element['on' + type] = null
    }
  },
  stopPropagation: function (event) {
    if (event.stopPropagation) {
      event.stopPropagation()
    } else {
      event.cancelBubble = true
    }
  }
}
$.addHandler = function (element, type, handler) {
  if (element.addEventListener) {
    element.addEventListener(type, handler, false)
  } else if (element.attachEvent) {
    element.attachEvent('on' + type, handler)
  } else {
    element['on' + type] = handler
  }
}
$.getEvent = function (event) {
  return event ? event : window.event
}
$.getTarget = function (event) {
  return event.target || event.srcElement
}
$.preventDefault = function (event) {
  if (event.preventDefault) {
    event.preventDefault()
  } else {
    event.returnValue = false
  }
}
$.removeHandle = function (element, type, handler) {
  if (element.removeEventListener) {
    element.addEventListener(type, handler, false)
  } else if (element.detachEvent) {
    element.detachEvent('on' + type, handler)
  } else {
    element['on' + type] = null
  }
}
$.stopPropagation = function (event) {
  if (event.stopPropagation) {
    event.stopPropagation()
  } else {
    event.cancelBubble = true
  }
}
$.getRelatedTarget = function (event) {
  if (event.relatedTarget) {
    return event.relatedTarget
  } else if (event.toElement) {
    return event.toElement
  } else if (event.fromElement) {
    return event.fromElement
  } else {
    return null
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