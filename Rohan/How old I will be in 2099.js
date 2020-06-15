function  calculateAge(bornyear, year) {
  console.log("You are "+(year-bornyear)+" years old.");
  if((year-bornyear) > 1)
    return "You are "+(year-bornyear)+" years old.";
  else if((year-bornyear) == 1)
    return "You are "+(year-bornyear)+" year old.";
  else if((year-bornyear) == 0)
    return "You were born this very year!";
  else if((year-bornyear)== -1)
    return "You will be born in "+(bornyear-year)+" year."
  else
    return "You will be born in "+(bornyear-year)+" years."
// enter your code here.

}
