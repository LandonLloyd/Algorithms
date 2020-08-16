/*Write a program that generates an array of integers from 1 to 100 (inclusive). But:
for multiples of 3, add "Fizz" to the array instead of the number
for multiples of 5, add "Buzz" to the array instead of the number
for multiples of 3 and 5, add "FizzBuzz" to the array instead of the number*/

function fizzBuzz() {
  let arr = [];
  let n = 100;
  for(let i = 1; i <= n; i++){
    arr.push(i)
  }
for(let i = 0; i < arr.length; i++){
  if(arr[i] % 3 === 0 && arr[i] % 5 === 0){
    arr[i] = 'FizzBuzz'
  }
  if(arr[i] % 3 === 0){
    arr[i] = 'Fizz'
  }
  if(arr[i] % 5 === 0){
    arr[i] = 'Buzz'

  }
}
console.log(arr)
return arr
}

fizzBuzz()
