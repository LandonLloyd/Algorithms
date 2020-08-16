//This isn't technically in the Eloquent JavaScript book but I like the Looping a Triangle project and decided to do the same with a square.

function square(n) {
  let counter = 1;
  while(counter <= n){
    console.log('*'.repeat(n))
    counter++
  }
}

square(2)
