//Make a triangle in the console using the '*' symbol. I refactored the original instructions from making a 7 layered triangle to making 'n' number of layers.

function triangle(n) {
  let counter = 1;
  while(counter <= n){
    console.log('*'.repeat(counter))
    counter++
  }
}

triangle(10)
