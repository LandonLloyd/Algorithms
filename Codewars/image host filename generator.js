//Make a unique fileName for a imaginary image file hosting website

function generateName(){
   var str = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 6; i++)
    str += possible.charAt(Math.floor(Math.random() * possible.length));
  str = str.toUpperCase();
  if(!photoManager.nameExists(str)){
    return str
  }
}
