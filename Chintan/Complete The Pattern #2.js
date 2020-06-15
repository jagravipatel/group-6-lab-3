// 54321\n5432...5\n 
function pattern(n){
 var output="";
   if(n==1){
     output = '1';
     return output;
   }else{
     for(let i=1;i<=n; i++){
       for(let j=n; j>=i ; j--){
         output += (j);
       }
       
         output +='\n';
        
          
     }
     output = output.substring(0,output.length-1);
   }
 return output;
}