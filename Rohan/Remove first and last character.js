function removeChar(str){
 //You got this!
 var arr = str.split("");
 var str1 = "";
 for(let i=1;i<arr.length-1;i++){
   str1 += arr[i];
 }
  return str1;
};
