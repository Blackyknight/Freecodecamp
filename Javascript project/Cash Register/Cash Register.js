function checkCashRegister(price, cash, cid) 
{
  let result = new Object;
  let monnaie = cash - price; 
  let counter = 0;
  let newArr = ['PENNY', cid[0][1]];

  result.status = "OPEN";
  result.change = [];
  if (monnaie >= 100)
  {
    while (monnaie >= 100 && cid[8][1] != 0)
    {
      monnaie -= 100;
      cid[8][1] -= 100;
      counter += 100;
    }
    result.change.push(["ONE HUNDRED", counter]);
    counter = 0;
  }
  if (monnaie >= 20)
  {
    while (monnaie >= 20 && cid[7][1] != 0)
    {
      monnaie -= 20;
      cid[7][1] -= 20;
      counter += 20;
    }
    result.change.push(["TWENTY", counter]);
    counter = 0;
  }
  if (monnaie >= 10)
  {
    while (monnaie >= 10 && cid[6][1] != 0)
    {
      monnaie -= 10;
      cid[6][1] -= 10;
      counter += 10;
    }
    result.change.push(["TEN", counter]);
    counter = 0;
  }
  if (monnaie >= 5)
  {
    while (monnaie >= 5 && cid[5][1] != 0)
    {
      monnaie -= 5;
      cid[5][1] -= 5;
      counter += 5;
    }
    result.change.push(["FIVE", counter]);
    counter = 0;
  }
  if (monnaie >= 1)
  {
    while (monnaie >= 1 && cid[4][1] != 0)
    {
      monnaie -= 1;
      cid[4][1] -= 1;
      counter += 1;
    }
    result.change.push(["ONE", counter]);
    counter = 0;
  }
  if (monnaie >= 0.25)
  {
    while (monnaie >= 0.25 && cid[3][1] != 0)
    {
      monnaie -= 0.25;
      cid[3][1] -= 0.25;
      counter += 0.25;
    }
    result.change.push(["QUARTER", counter]);
    counter = 0;
  }
  if (monnaie >= 0.1)
  {
    while (monnaie >= 0.1 && cid[2][1] != 0)
    {
      monnaie -= 0.1;
      cid[2][1] -= 0.1;
      counter += 0.1;
    }
    result.change.push(["DIME", counter]);
    counter = 0;
  }
  if (monnaie >= 0.05)
  {
    while (monnaie >= 0.05 && cid[1][1] != 0)
    {
      monnaie -= 0.05;
      cid[1][1] -= 0.05;
      counter += 0.05;
    }
    result.change.push(["NICKEL", counter]);
    counter = 0;
  }
  if (monnaie >= 0.01)
  {
    while (monnaie >= 0.01 && cid[0][1] != 0)
    {
      monnaie -= 0.01;
      cid[0][1] -= 0.01;
      counter += 0.01;
    }
    counter += 0.01;
    result.change.push(["PENNY", counter]);
    counter = 0;
  }
  if (monnaie < 0.01)
    monnaie = 0;
  if (monnaie != 0)
  {
    result.status = "INSUFFICIENT_FUNDS";
    result.change = [];
  }
  if (monnaie == 0 && cid[1][1] == 0 && cid[2][1] == 0 && cid[3][1] == 0 && cid[4][1] == 0 && cid[5][1] == 0 && cid[6][1] == 0 && cid[7][1] == 0 && cid[8][1] == 0)
  {
    result.status = "CLOSED";
    result.change = [];
    result.change.push(newArr);
    result.change.push(['NICKEL', cid[1][1]]);
    result.change.push(['DIME', cid[2][1]]);
    result.change.push(['QUARTER', cid[3][1]]);
    result.change.push(['ONE', cid[4][1]]);
    result.change.push(['FIVE', cid[5][1]]);
    result.change.push(['TEN', cid[6][1]]);
    result.change.push(['TWENTY', cid[7][1]]);
    result.change.push(['ONE HUNDRED', cid[8][1]]);
  }
  return result;
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));