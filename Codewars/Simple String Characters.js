//Instructions from Codewars:
*/In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special 
characters, as follows. solve("*'&ABCDabcde12345") = [4,5,5,3]. --the order is: uppercase letters, lowercase, numbers and special characters. More examples in the test 
cases./*

Good luck!

function solve(s){
 let pushArr = [];
  let upper = 0;
  let lower = 0;
  let numbers = 0;
  let special = 0;
 let split = s.split('');
  for(let i = 0; i < split.length; i++){
    if(split[i].charCodeAt(0) <= 90 && split[i].charCodeAt(0) >= 65){
      upper++
    }else if(split[i].charCodeAt(0) <= 122 && split[i].charCodeAt(0) >= 97){
      lower++
    }else if(!isNaN(parseInt(split[i]))){
      numbers++
    }else{
      special++
    }
  }
  pushArr.push(upper);
  pushArr.push(lower);
  pushArr.push(numbers)
  pushArr.push(special);
  return pushArr;
}
