//Instructions from FreeCodeCamp:
//Reverse the provided string. You may need to turn the string into an array before you can reverse it. Your result must be a string.

function reverseString(str) {
  let split = str.split('');
  split = split.reverse()
  split = split.join('');
  return split;
}

reverseString("hello");
