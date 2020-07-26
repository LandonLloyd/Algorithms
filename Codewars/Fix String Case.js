//Instructions from Codewars:
/*In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or 
uppercase only based on: 1: make as few changes as possible. 2: if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.*/

function solve(s){
  let split = s.split('');
  let upper = 0;
  let lower = 0;
  for(let i = 0; i < split.length; i++){
    if(split.join('').charCodeAt(i) >= 65 && split.join('').charCodeAt(i) <= 90){
      upper++
    }else if(split.join('').charCodeAt(i) >= 97 && split.join('').charCodeAt(i) <= 122){
      lower++
    }
  }
  if(lower > upper){
    return split.join('').toLowerCase()
  }else if(lower < upper){
    return split.join('').toUpperCase()
  }else if(lower === upper){
    return split.join('').toLowerCase()
  }
