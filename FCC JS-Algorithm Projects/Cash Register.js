//Instructions from FreeCodeCamp:
/*Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in
-drawer (cid) as the third argument. cid is a 2D array listing available currency. The checkCashRegister() function should always return an object with a status key and 
a change key. Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change. Return 
{status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due. Otherwise, return {status: "OPEN", change: [...]},
with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.*/

function checkCashRegister(price, cash, cid) {
  let changeDue = cash - price;
  let changeArr = [];
  let changeHandled = 0;

  if(cash - price > parseFloat(cid.reduce((a,b) => a + b[1], 0).toFixed(2))){
    return {status: "INSUFFICIENT_FUNDS", change: []}
  }
  if(cash - price === parseFloat(cid.reduce((a, b) => a + b[1], 0).toFixed(2))){
    return {status: "CLOSED", change: cid}
  }
  while(changeDue >= 100 && cid[8][1] >= 100){
    changeDue -= 100;
    cid[8][1] -= 100;
    changeHandled += 100;
  }
  changeArr.push(["ONE HUNDRED", changeHandled])
  changeHandled = 0;

  while(changeDue >= 20 && cid[7][1] >= 20){
    changeDue -= 20;
    cid[7][1] -= 20;
    changeHandled += 20;
  }
  changeArr.push(["TWENTY", changeHandled]);
  changeHandled = 0;

  while(changeDue >= 10 && cid[6][1] >= 10){
    changeDue -= 10;
    cid[6][1] -= 10;
    changeHandled += 10;
  }
  changeArr.push(["TEN", changeHandled]);
  changeHandled = 0;
  while(changeDue > 5 && cid[5][1] > 5){
    changeDue -= 5;
    cid[5][1] -= 5;
    changeHandled += 5;
  }
  changeArr.push(["FIVE", changeHandled]);
  changeHandled = 0;

  while(changeDue >= 1 && cid[4][1] >= 1){
    changeDue -= 1;
    cid[5][1] -= 1;
    changeHandled += 1;
  }
  changeArr.push(["ONE", changeHandled]);
  changeHandled = 0;

  while(changeDue >= 0.25 && cid[3][1] >= 0.25){
    changeDue -= 0.25;
    cid[5][1] -= 0.25;
    changeHandled += 0.25;
  }
  changeArr.push(["QUARTER", changeHandled]);
  changeHandled = 0;

  while(changeDue >= 0.1 && cid[2][1] >= 0.1){
    changeDue -= 0.1;
    cid[5][1] -= 0.1;
    changeHandled += 0.1;
  }
  changeArr.push(["DIME", changeHandled]);
  changeHandled = 0;

  while(changeDue >= 0.05 && cid[1][1] >= 0.05){
    changeDue -= 0.05;
    cid[5][1] -= 0.05;
    changeHandled += 0.05;
  }
  changeArr.push(["NICKEL", changeHandled]);
  changeHandled = 0;

  while(changeDue >= 0.01 && cid[0][1] >= 0.01){
    changeDue -= 0.01;
    cid[0][1] -= 0.01;
    changeHandled += 0.01;
  }
  changeArr.push(["PENNY", changeHandled]);
  changeHandled = 0;

if (changeDue > 0 && changeDue < 0.01) {
    changeDue = 0
    changeArr[8][1] += 0.01
  }

  if(changeDue === 0){
    return {status: "OPEN", change: changeArr.filter((a) => a[1] > 0)}
  }
  return {status: "INSUFFICIENT_FUNDS", change: []}
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
