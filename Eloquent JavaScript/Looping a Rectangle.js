//This isn't technically in the Eloquent JavaScript book but I like the Looping a Triangle project and decided to do the same with a rectangle.

function rect(w, h) {
  let counter = 1;
  while(counter <= h){
    console.log('*'.repeat(1).repeat(w))
    counter++
  }
}

rect(3, 4)
