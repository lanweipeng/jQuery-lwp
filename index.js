var element



var $ = function (select) {
  if (typeof select === 'function') {
    window.onload = select()
  }
  else if (select === undefined) {

    return
  }
  else if (select instanceof Node) {
    element = select
    return $
  } else if (select.substr(0, 1) == '#') {
    s = document.querySelector(select)
    return document.querySelector(select)
  } else {
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

$.getClipboardText = function (event) {
  var clipboardData = (event.clipboardData || window.clipboardData)
  return clipboardData.getData('text')
}
$.setClipboardText = function (event, value) {
  if (event.clipboardData) {
    return event.clipboardData.setData('text/plian', value)
  } else if (window.clipboardData) {
    return window.clipboardData.setData('text', value)
  }
}
$.css = function (x, y) {
  console.log(s)
}


toString = Object.prototype.toString;







(function (window) {
  var jQuery = (function () {
    var class2type = {},
      arr = [],
      getProto = Object.getPrototypeOf,
      push = arr.push,
      indexOf = arr.indexOf;
    var isFunction = function (obj) {
      return typeof obj === 'function'&&typeof obj.nodeType !== 'number';
    },
    isWindow=function(obj){
      return obj!=null&&obj.window===window;
    }
    function ToType(obj) {
      // console.log(toString.call(obj))
      return class2type[toString.call(obj)]
    }
    var jQuery = function (selector) {
      return new jQuery.fn.init(selector);
    };
    jQuery.fn = jQuery.prototype = {
      length: 0,
      each: function (callback) {//啥用
        return jQuery.each(this, callback)
      }
    }
    var rootjQuery,
     init =
      jQuery.fn.init =
      function (selector,context,root) {
        if (!selector) {
          return this;
        } 
        root=root||rootjQuery;
        // else {
          // if (jQuery.type(selector) === 'string') {
          //   var elem = document.getElementById(selector.split('#')[1]);
          //   this[0] = elem;
          //   this.length = 1

          // }else if(selector.nodeType){
          //   this[0]=selector;
          //   this.length=1;
          //   return this;
          // }else if(jQuery.isFunction(selector)){
          //   return root.ready!==undefined?root.ready(selector):selector(jQuery)
          // }
        // }
        // return jQuery.makeArray(selector, this);
        return this;
      }
    init.prototype = jQuery.fn;
    rootjQuery=jQuery(document);
    // jQuery.prototype.init = jQuery.fn;
    jQuery.extend = jQuery.fn.extend = function () {
      var i = 1,
        option,
        src,
        copy,
        deep=false,
        target = arguments[0] || {};

      var length  = arguments.length;
      if(typeof target==='boolean'){
        deep=target;
        target=arguments[i]||{};
        i++
      }
      if (i === length) {
        target = this;
        i--;
      }
      if(typeof target!=='object'&&!isFunction(target)){
        target={}
      }
      for (; i < length; i++) {
        if ((options = arguments[i]) != null) {
          for (name in options) {
            
            copy = options[name];
            if(deep&&copy&&(jQ)){
              src=target[name];
              target[name] =jQuery.extend(deep,clone,copy)
            }else if(copy!==undefined){
              target[name] = copy;

            }
          }
        }
      }
      return target;
    }
    jQuery.extend({
      isPlainObject: function (obj) {
        return class2type[toString.call(obj)] === 'object'
      },
      merge: function (first, second) {
        var len = +second.length
        i = first.length
        j = 0;
        for (; j < len; j++) {
          first[i++] = second[j];
        }
        first.length = i
        return first
      },
      makeArray: function (arr, result) {
        var ret = result || [];
        if (arr != null) {
          if (isArrayLike(Object(arr))) {
            jQuery.merge(ret, typeof arr === "string" ? [arr] : arr)
          } else {
            push.call(ret, arr)
          }
        }
        return ret
      },
      each: function (obj, callback) {
        var length,i=0;
        if(isArrayLike(obj)){
          length=obj.length;
          for(; i<length;i++){
            if(callback.call(obj[i],i,obj[i])===false){
              break;
            }
          }
        }else{
          for(i in obj){
            if(callback.call(obj[i],i,obj[i])===false){
              break;
            }
          }
        }
      },
      inArray:function(elem,arr,i){
        return arr == null ? -1 : indexOf.call(arr,elem,i)
      }
    });
    
    jQuery.each(['Number','Boolean','String','BigInt','Symbol','Null','Undefined',
    'Object','Function','Array','Date','RegExp','Error'],function(index,item){
      class2type["[object "+item+"]"]=item.toLowerCase();
    });
    jQuery.type = ToType;
    jQuery.isWindow=isWindow;
    jQuery.isFunction=isFunction;
    function isArrayLike(obj) {
      var length = !!obj && "length" in obj && obj.length,
        type = ToType(obj)
      return type === "array" || length === 0 || (length - 1) in obj
    }
    var rnothtmlwhite=/[^\x20\r\n\t\f]+/g;
    function createOptions(options){
      var option={};
      jQuery.each(options.match(rnothtmlwhite)||[],function(_,flag){
        option[flag]=true;
      });
      return option;
    }
    jQuery.Callbacks = function (flags) {
      flags=typeof flags==='string'?createOptions(flags):flags;
      var list= [],locked
      self = {
        add: function (fn) {
          if(list){
            (function add(args){
              jQuery.each(args,function(_,arg){
                if(isFunction(arg)){
                  list.push(arg)
                }else if(arg&&arg.length&&ToType(arg)!=='string'){
                  add(arg)
                }
              })
            })(arguments);
          }
          return this;
        },
        fire: function (value) {
          if(list){
            locked=locked||flags&&flags.once//为什么要locked||
            list.forEach(item => {
              item(value)
            });
            if(locked){
              list=""
            }
          }
          return this;
        },
        remove:function(fn){
          list=list.filter(item=>item!=fn);
          return this;
        },
        has:function(fn){
          return fn?jQuery.inArray(fn,list)>-1:list.length>0;
        },
        disable:function(){
          locked=[];
          list="";
          return this;
        },
        empty:function(){
          list=[];
          return this;
        },
        lock:function(){
          locked=[]
          list="";
          return this;
        },
        locked:function(){
          return !!locked;
        }
      };
      return self;
    }

    return jQuery;
  })()
  window.$ = window.jQuery = jQuery;
})(window)