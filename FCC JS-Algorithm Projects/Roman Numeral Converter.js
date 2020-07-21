//Instructions from FCC:
/*Convert the given number into a roman numeral. All roman numerals answers should be provided in upper-case.*/

function convertToRoman(num) {
  const romans = {
    M: 1000,
    CM: 900,
    D: 500, 
    CD: 400,   
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  }

    let acc = '';
    let value = Object.values(romans);
    let key = Object.keys(romans);
    console.log(key, value)
    for(let i = 0; i < value.length; i++){
    while(num >= value[i]){
      num -= value[i]
      acc += key[i]
    }
    }
 return acc;
}

convertToRoman(36);
