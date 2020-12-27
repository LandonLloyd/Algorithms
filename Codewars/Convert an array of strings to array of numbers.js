function toNumberArray(stringarray){
  let numArray = [];
  for(let i = 0; i < stringarray.length; i++){
    let nums = Number(stringarray[i]);
    numArray.push(nums);
  }
  return numArray;
}

/*Instructions from CodeWars: Some really funny web dev gave you an array of numbers from his API response as an array of strings! You need to cast the whole array to the correct type. Create the function
JavaScript: toNumberArray(array)
Ruby: toNumberArray(array)
C#: ToDoubleArray(array)

that takes as a parameter an array of numbers represented as strings and outputs an array of numbers.

ie:["1", "2", "3"] to [1, 2, 3]

Note that you can receive floats as well.*/
