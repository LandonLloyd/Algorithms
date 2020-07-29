//Instructions from Codewars:
/*Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even. For example, 
capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.*/

function capitalize(s){
  let split = s.split('');
  let evenUp = []
  let oddUp = []
  for(let i = 0; i < split.length; i++){
    if(i % 2 === 0){
      evenUp.push(split[i].toUpperCase())
    }else{
      evenUp.push(split[i].toLowerCase())
    }
  }
  for(let i = 0; i < split.length; i++){
    if(i % 2 !== 0){
      oddUp.push(split[i].toUpperCase())
    }else{
      oddUp.push(split[i].toLowerCase())
    }
  }
  return [evenUp.join(''), oddUp.join('')]
};
