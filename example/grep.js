var arr1=[0,1,2];
var res=$.grep( arr1, function(n,i){
  return n > 0;
});
console.log(res);
var res2=$.grep( arr1, function(n,i){
  return n > 0;
},true);
console.log(res2);
