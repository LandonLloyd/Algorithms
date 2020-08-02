//Instructions from Codewars:
/*Write function parseFloat (for Javascript parseF) which takes a string and returns a number or Nothing (for Python None, for Javascript null) if conversion is not 
possible.*/

function parseF(s) {
  if(!isNaN(parseFloat(s))){
    return parseFloat(s)
  }else if(isNaN(parseFloat(s))){
    return null;
  }
}
