function evenChars(string) {
    if(string.length < 2 || string.length > 100){
      return "invalid string";
    }
    let newA = [];
    for(let i = 1; i < string.length; i += 2){
      newA.push(string[i]);
    }
  return newA;
}

/*Instructions from Codewars: Write a function that returns a sequence (index begins with 1) of all the even characters from a string. If the string is smaller than two 
characters or longer than 100 characters, the function should return "invalid string".*/
