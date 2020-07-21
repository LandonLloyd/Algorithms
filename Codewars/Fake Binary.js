//Instructions from Codewars:
//Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

function fakeBin(x){
let accumulator = '';
  for(let i = 0; i < x.length; i++){
    if(x[i] < 5){
      accumulator += 0
    }else if(x[i] >= 5){
      accumulator += 1
    }
  }return accumulator
}
