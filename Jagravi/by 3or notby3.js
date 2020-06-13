function divisibleByThree(str)
{
var s = 0;
 for (var i = 0; i < str.length; i++)
  {
    s = s + parseInt(str[i]);
  }
  if (s % 3 ==0)
    return true ;
 else
    return false;