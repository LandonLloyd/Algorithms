function sumPrimes(num) {
  const prime = [2]
for(let i = 3; i <= num; i++){ //just change to this :)
  if(isPrime(i)){
    prime.push(i)
  }
}

  console.log(prime.reduce((num,prime) => num + prime))
  return prime.reduce((num, prime) => num + prime)
}

sumPrimes(10);

function isPrime(num){
  for(let j = 2; j < num; j++){
      if(num % j == 0){
        return false;
        
      }
    }return true;
}
