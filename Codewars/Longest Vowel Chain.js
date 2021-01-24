//Instructions were to find the longest chain of vowels in a word.
function solve(s){
  let vowels = [
    'a',
    'e',
    'i',
    'o',
    'u'
  ];
  let counter = 0;
  let longest = 0;
  let split = s.split('');
  for(let i = 0; i < split.length; i++){
    if(split[i] === vowels[0] || split[i] === vowels[1] || split[i] === vowels[2] || split[i] === vowels[3] || split[i] === vowels[4]){
      counter++
      if(counter > longest){
        longest = counter;
      }
    }else{
      counter = 0;
    }
  }return longest;
}
