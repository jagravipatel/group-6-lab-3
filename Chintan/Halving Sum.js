// n + n/2+ n/4+...1
function halvingSum(n) {

  let sum = 0;
  while(n>=1){
    sum += n
    n= parseInt(n/2);
  }
    return sum;
}