//Instructions from FreeCodeCamp:
/*Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these 
parameters. The range will be an array of two numbers that will not necessarily be in numerical order. For example, if given 1 and 3, find the smallest common multiple 
of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.*/

function smallestCommons(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  while (max > min + 1) {
    max--;
    arr.push(max);
    arr.sort();
  }
  console.log(arr);
  let LCM = 1;
  for (let i = 0; i < arr.length; i++) {
    LCM = lcm(LCM, arr[i]);
  }
  return LCM;
}

smallestCommons([1, 5]);

function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}
