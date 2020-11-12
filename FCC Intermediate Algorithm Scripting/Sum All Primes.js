//Instructions from FreeCodeCamp:
/*A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. 
In contrast, 4 is not prime since it is divisible by 1, 2 and 4. Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.*/

function sumPrimes(num) {
  const prime = [2];
  for (let i = 3; i <= num; i++) {
    //just change to this :)
    if (isPrime(i)) {
      prime.push(i);
    }
  }

  console.log(prime.reduce((num, prime) => num + prime));
  return prime.reduce((num, prime) => num + prime);
}

sumPrimes(10);

function isPrime(num) {
  for (let j = 2; j < num; j++) {
    if (num % j == 0) {
      return false;
    }
  }
  return true;
}
