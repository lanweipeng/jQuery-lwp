function separate(letter){
  console.log('-----'+letter+'-----')
}
var callbacks=$.Callbacks();
function sayHello(value){
  console.log(value+'hello');
  return false;
}
function sayHi(value){
  console.log(value+'hi')
}
callbacks.add(sayHello)
callbacks.fire('hh')
callbacks.add(sayHi);
callbacks.fire('hh')
callbacks.remove(sayHi)
callbacks.fire('hh')
console.log(callbacks.has(sayHello))
console.log('---once--')
var callbacks2=$.Callbacks('once');
callbacks2.add(sayHello);
callbacks2.add(sayHi);
callbacks2.fire('lwp')
callbacks2.add(sayHi)
callbacks2.fire('hw');
console.log('----stopOnfalse---');
var callbacks3=$.Callbacks('stopOnfalse');
callbacks3.add(sayHello);
callbacks3.fire('lwp')
console.log('---has---');
var callbacks4=$.Callbacks();
console.log(callbacks4.has())
callbacks4.add(sayHi)
console.log(callbacks4.has())
console.log(callbacks4.has(sayHi))
console.log(callbacks4.has(sayHello))
console.log('---empty---')
var callbacks5=$.Callbacks();
callbacks5.add(sayHi);
callbacks.fire('hh')
callbacks.empty();
callbacks.fire('hh');
console.log('---options----');
var callbacks6=$.Callbacks({once:true})//只能传这种方式和空格隔开的string
var callbacks7=$.Callbacks(null)//不起作用
var callbacks8=$.Callbacks(7)//不起作用
separate('add');
var callbacks9=$.Callbacks();
callbacks9.add([sayHello,sayHi]);
callbacks9.fire('lwp')
var callbacks10=$.Callbacks();
callbacks10.add(sayHello,sayHi);
callbacks10.fire('lwp');
separate('链式调用');
var callbacks11=$.Callbacks();
callbacks.add(sayHi).fire('lwp');
separate('disable');
var callbacks12=$.Callbacks();
callbacks12.add(sayHi).fire('lwp').disable().add(sayHello).fire('lwp');
separate('lock');
var callbacks13=$.Callbacks();
callbacks13.add(sayHi).fire('lwp').lock().add(sayHello).fire('lwp');
separate('locked');
console.log(callbacks13.locked());
separate('unique');
var callbacks14=$.Callbacks("unique");
callbacks14.add( sayHello );
callbacks14.fire( "foo" );
callbacks14.add( sayHello ); // repeat addition
callbacks14.add( sayHi );
callbacks14.fire( "bar" );
callbacks14.remove( sayHi );
callbacks14.fire( "foobar" );
