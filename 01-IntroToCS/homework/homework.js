'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var revez = []
  for(var i = 0;i<num.length;i++){
    revez.unshift(num[i])
  }
  var decimal = 0
  for(var o = 0;o<revez.length;o++){
    decimal = decimal + revez[o] * Math.pow(2,o)
  }
  return decimal
}

function DecimalABinario(num) {
  // tu codigo aca
var binario = [];
var n = num;
for(var i = 0;i<num;i++){
  if(n < 1) return binario.join("");
  if(n % 2 === 0){
    binario.unshift(0);
    n = n / 2;
  }else{
    binario.unshift(1);
    n = Math.floor(n) / 2;
  }
}
return binario.join("");
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}