//Add two arrays together and return the sum as a number.
function arrayPlusArray(arr1, arr2) {
  let acc = 0;
  for(let i = 0; i < arr1.length; i++){
     acc += arr1[i]
  }
  for(let i = 0; i < arr2.length; i++){
     acc += arr2[i]
  }
  return acc
}
