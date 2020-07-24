//Instructions from Codewars:
/*You are provided with array of positive non-zero ints and int n representing n-th power (n >= 2). For the given array, calculate the sum of each value to the n-th 
power. Then subtract the sum of the original array.*/

function modifiedSum(a, n) {
  let result = 0;
  let sum = 0;
  for(let i = 0; i < a.length; i++){
    let power = Math.pow(a[i], n)
    result += power
    sum += a[i]
  }
  return result - sum
}
