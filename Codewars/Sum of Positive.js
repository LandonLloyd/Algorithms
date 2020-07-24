//Instructions from Codewars:
/*You get an array of numbers, return the sum of all of the positives ones. Note: if there is nothing to sum, the sum is default to 0.*/

function positiveSum(arr) {
  let acc = 0;
  for(let i = 0; i < arr.length; i++){
     if(arr[i] >= 0){
      acc += arr[i]
    }else if(arr === []){
      return 0
    }
  }return acc
}
