//Get the sum of all the parts of a list(ls) and put them in a new list.

function partsSums(ls) {
    let pushArr = [0];
    let acc = 0;
  for(let i = ls.length - 1; i >= 0; i--){
    acc += ls[i]
    pushArr.push(acc)
  }
  return pushArr.reverse()
}
