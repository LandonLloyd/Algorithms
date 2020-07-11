function smallestCommons(arr) {
  let max = Math.max(...arr)
  let min = Math.min(...arr);
  while(max > min + 1){
    max--
    arr.push(max);
    arr.sort()
  }
  console.log(arr)
  let LCM = 1;
  for(let i = 0; i < arr.length; i++){
    LCM = lcm(LCM, arr[i])
  }
  return LCM;
}


smallestCommons([1,5]);

function gcd(a, b){
  if(b === 0){
    return a;
  }return gcd(b, a % b)
}

function lcm(a, b){
  return a * b / gcd(a, b)
}
