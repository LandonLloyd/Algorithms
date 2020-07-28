//Instructions from Codewars:
/*Create a function that takes 2 positive integers in form of a string as an input, and outputs the sum (also as a string) If either input is an empty string, consider 
it as zero.*/

function sumStr(a,b) {
  let first = parseInt(a)
  let last = parseInt(b)
  if(a === ""){
    first = 0
  }if(b === ""){
    last = 0
  }
  let sum = first + last
  return sum.toString()
}
