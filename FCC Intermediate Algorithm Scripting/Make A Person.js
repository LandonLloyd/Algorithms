//Instructions from FreeCodeCamp:
/*Fill in the object constructor with the following methods below:
getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must 
be the only available means of interacting with the object.*/

var Person = function (firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  var name = firstAndLast.split(" ");
  this.getFullName = function () {
    return name.join(" ");
  };
  this.getFirstName = function () {
    return name[0];
  };
  this.getLastName = function () {
    return name[1];
  };
  this.setFirstName = function (first) {
    return (name[0] = first);
  };
  this.setLastName = function (last) {
    return (name[1] = last);
  };
  this.setFullName = function (full) {
    return (name = full.split(" "));
  };
  console.log(firstAndLast.split(" ")[0]);
};

var bob = new Person("Bob Ross");
bob.getFullName();
