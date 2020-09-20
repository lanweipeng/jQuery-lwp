var res=$.map( [0,1,2], function(n){
  return n + 4;
});
console.log(res);
var res2=$.map( [0,1,2], function(n){
  return n > 0 ? n + 1 : null;
});
console.log(res2);
var res3=$.map( [0,1,2], function(n){
  return [ n, n + 1 ];
});
console.log(res3);
res4 = jQuery.map( [ 3, 4, 5 ], function( v, k ) {
  return k;
} );
console.log(res4);
var res5 = jQuery.map( { a: 1, b: 2 }, function( v, k ) {
  return k;
} );
console.log(res5)

res6 = jQuery.map( { a: 1, b: 2 }, function( v ) {
  return v;
} );

console.log(res6);
res7 = jQuery.map( [ "a", undefined, null, "b" ], function( v ) {
  return v;
} );
console.log(res7);
res8 = jQuery.map( { a: "a", b: undefined, c: null, d: "b" }, function( v ) {
  return v;
} );
console.log(res8);
result = {
  Zero: function() {},
  One: function( a ) { a = a; },
  Two: function( a, b ) { a = a; b = b; }
};
callback = function( v, k ) {
  return k==="foo"
};
for ( i in result ) {
  label = i;
  result[ i ].foo = "bar";
  console.log(jQuery.map( result[ i ], callback ));
}
result = {
  "undefined": undefined,
  "null": null,
  "false": false,
  "true": true,
  "empty string": "",
  "nonempty string": "string",
  "string \"0\"": "0",
  "negative": -1,
  "excess": 1
};
callback = function( v, k ) {
return k==='length'
};
for ( i in result ) {
  label = i;
  var res9=jQuery.map( { length: result[ i ] }, callback );
  console.log(res9)
}