function convertToRoman(num) 
{
  let newNum = [];
  let j = num;

  while (j != 0)
  {
    while (j >= 1000)
    {
      j -= 1000;
      newNum.push('M');
    }
    while (j >= 900)
    {
      j -= 900;
      newNum.push('CM');
    }
    while (j >= 500)
    {
      j -= 500;
      newNum.push('D');
    }
    while (j >= 400)
    {
      j -= 400;
      newNum.push('CD');
    }
    while (j >= 100)
    {
      j -= 100;
      newNum.push('C');
    }
    while (j >= 90)
    {
      j -= 90;
      newNum.push('XC');
    }
    while (j >= 50)
    {
      j -= 50;
      newNum.push('L');
    }
    while (j >= 40)
    {
      j -= 40;
      newNum.push('XL');
    }
    while (j >= 10)
    {
      j -= 10;
      newNum.push('X');
    }
    while (j >= 9)
    {
      j -= 9;
      newNum.push('IX');
    }
    while (j >= 5)
    {
      j -= 5;
      newNum.push('V');
    }
    while (j >= 4)
    {
      j -= 4;
      newNum.push('IV');
    }
    while (j >= 1)
    {
      j -= 1;
      newNum.push('I');
    }
  }
  newNum = newNum.join('');
  return newNum;
}

console.log(convertToRoman(83));