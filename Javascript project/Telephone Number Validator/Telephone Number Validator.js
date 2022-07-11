function telephoneCheck(str) 
{
  let checkStr = [];
  let newStr = [];
  let strLen = 0;

  for (let i = 0; i < str.length; i++)
  {
    while (str[i] === '-' || str[i] === '(' || str[i] === ')' || str[i] === ' ')
      i++;
    checkStr.push(str[i]);
    strLen++;
  }
  if (!(strLen >= 10 && strLen <= 11))
    return false;
  for (let i = 0; i < checkStr.length; i++)
  {
    if (!(checkStr[i] >= '0' && checkStr[i] <= '9'))
      return false;
  }
  for (let i = 0; i < str.length; i++)
  {
    newStr.push(str[i]);
  }
  if (newStr.length === 10)
  {
    for (let i = 0; i < newStr.length; i++)
    {
      if (!(newStr[i] >= '0' && newStr[i] <= 9))
        break;
      else if (newStr[9] >= '0' && newStr[9] <= '9')
        return true;
    }
  }
  if (strLen === 10)
  {
    if (newStr[3] === '-' && newStr[7] === '-')
      return true;
    else if (newStr[0] === '(' && newStr[4] === ')' && newStr[8] === '-')
      return true;
    else if (newStr[0] === '(' && newStr[4] === ')' && newStr[5] === ' ' && newStr[9] === '-')
      return true;
    else if (newStr[3] === ' ' && newStr[7] === ' ')
      return true;
  }
  else if (strLen === 11)
  {
    if (newStr[0] === '1' && newStr[1] === ' ' && newStr[5] === ' ' && newStr[9] === ' ')
      return true;
    else if (newStr[0] === '1' && newStr[1] === ' ' && newStr[5] === '-' && newStr[9] === '-')
      return true;
    else if (newStr[0] === '1' && newStr[1] === ' ' && newStr[2] === '(' && newStr[6] === ')' && newStr[7] === ' ' && newStr[11] === '-')
      return true;
    else if (newStr[0] === '1' && newStr[1] === '(' && newStr[5] === ')' && newStr[9] === '-')
      return true;
  }
  return false;
}

console.log(telephoneCheck("5555555555"));