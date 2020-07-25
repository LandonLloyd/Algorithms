//Instructions from Codewars:
/*Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see 
the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. As usual, your function/method should 
be pure, i.e. it should not mutate the original string.*/

String.prototype.toAlternatingCase = function () {
  let acc = '';
  for(let i = 0; i < this.length; i++){
    if(this.charCodeAt(i) >= 97 && this.charCodeAt(i) <= 122){
      acc += this[i].toUpperCase()
    }else if(this.charCodeAt(i) >= 65 && this.charCodeAt(i) <= 90){
      acc += this[i].toLowerCase()
    }else{
      acc += this[i]
    }
  }
  return acc
}
