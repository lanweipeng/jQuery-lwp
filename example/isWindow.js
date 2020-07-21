"use strict"

// const { isWindow } = require("jquery")

function isWindow(obj){
  return obj!=null && obj===window
}
// console.log(isWindow(window))
console.log(isWindow(null))
console.log(isWindow(undefined))