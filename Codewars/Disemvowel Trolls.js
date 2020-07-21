//Instructions from Codewars:
/*Trolls are attacking your comment section! A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat. 
Your task is to write a function that takes a string and return a new string with all vowels removed. For example, the string "This website is for losers LOL!" would 
become "Ths wbst s fr lsrs LL!". Note: for this kata y isn't considered a vowel.*/

function disemvowel(str) {
  let split = str.split('')
  let accumulator = '';
  for(let i = 0; i < split.length; i++){
    if(split[i] !== 'a' && split[i] !== 'A' && split[i] !== 'e' && split[i] !== 'E' && split[i] !== 'i' && split[i] !== 'I' && split[i] !== 'o' && split[i] !== 'O' && split[i] !== 'u' && split[i] !== 'U'){
      accumulator += split[i]
    }
  }
  return accumulator;
  
}
