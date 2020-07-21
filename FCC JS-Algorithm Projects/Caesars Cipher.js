function rot13(str) {
  let a = {
    'A' : 'N',
    'B' : 'O',
    'C' : 'P',
    'D' : 'Q',
    'E' : 'R',
    'F' : 'S',
    'G' : 'T',
    'H' : 'U',
    'I' : 'V',
    'J' : 'W',
    'K' : 'X',
    'L' : 'Y',
    'M' : 'Z',
    'N' : 'A',
    'O' : 'B',
    'P' : 'C',
    'Q' : 'D',
    'R' : 'E',
    'S' : 'F',
    'T' : 'G',
    'U' : 'H',
    'V' : 'I',
    'W' : 'J',
    'X' : 'K',
    'Y' : 'L',
    'Z' : 'M'
  }
  let split = str.split('');
  for(let i = 0; i < split.length; i++){
    if(a.hasOwnProperty(split[i])){
    split[i] = a[split[i]]
    }
  }
  split = split.join('')
  console.log(split)
  return split;
  
}

rot13("SERR PBQR PNZC");
