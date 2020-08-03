//Instructions from Codewars:
//Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

const quarterOf = (month) => {
  if(month <={
    return 1
  }else if(month > 3 && month <= 6){
    return 2
  }else if(month > 6 && month <= 9){
    return 3
  }else{
    return 4
  }
}
