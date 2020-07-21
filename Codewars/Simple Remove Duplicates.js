//Instructions from Codewars:
//In this Kata, you will remove the left-most duplicates from a list of integers and return the result.

function solve(arr){
   return arr.filter((el, i) => i === arr.lastIndexOf(el))
}
