//Instructions from Codewars:
/*You are given an array with positive numbers and a number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array,
then return -1. Don't forget that the first element has the index 0.*/

function index(array, n){
  if(array.indexOf(array[n]) > -1){
    return Math.pow(array[n], n)
  }else if(n > array.length - 1){
    return -1
  }
}
