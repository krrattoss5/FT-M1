'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length <= 1){
    return array;
  }
  let pivote = array.pop();
  let left = [];
  let right = [];
  let aux = [];
  let n = array.length;

  for (let i = 0; i < n; i++) {
    if(array[i] <= pivote){
      left.push(array[i]);
    }else{
      right.push(array[i]);
    }
  }
  return aux.concat(quickSort(left), pivote, quickSort(right));
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length === 1) return array
  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid);

  function merge(left, right){
    let leftIndex = 0;
    let rightIndex = 0;
    let arrOrdered = [];

    while(leftIndex < left.length && rightIndex < right.length){
      if(left[leftIndex] < right[rightIndex]){
        arrOrdered.push(left[leftIndex]);
        leftIndex++
      } else {
        arrOrdered.push(right[rightIndex]);
        rightIndex++
      }
    }

    return arrOrdered.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
  }

  return merge(mergeSort(left), (mergeSort(right)))

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
