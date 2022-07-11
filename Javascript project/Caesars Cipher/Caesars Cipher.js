function rot13(str) 
{
  let newStr = "";
  let code = 0;

  for (let i = 0; i < str.length; i++)
  {
    
    code = str[i].charCodeAt(str[i]);
    if (code !== 32)
    {
      if (str[i] >= 'A' && str[i] <= 'M')
        code += 13;
      else if (str[i] >= 'N' && str[i] <= 'Z')
        code -= 13;
    }
    newStr += String.fromCharCode(code);
  }

  return newStr;
}

console.log(rot13("SERR PBQR PNZC"));