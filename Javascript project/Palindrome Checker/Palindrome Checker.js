function palindrome(str) 
{
  let newStr = str.toLowerCase();

  newStr = newStr.replace(/\s+/g, '');
  newStr = newStr.replace(/[^a-z0-9]/gi, '');
  newStr = newStr.split('');
  let k = newStr.length - 1;
  let j = 0;

  for (let i = 0; i < ((newStr.length - 1) / 2); i++)
  {  
    if (newStr[j] !== newStr[k])
      return false;
    j++;
    k--;
  }

  return true;
}

console.log(palindrome(" 1E ye-@_ }-ey e1"));