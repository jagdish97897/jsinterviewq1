var a=25,b=50, hcf;
if(a>b)
{
    bignum=a;
    smallnum=b;
}
else
{
    smallnum=a;
    bignum=b;
}
console.log("hcf of", smallnum+ " " +bignum)
for(let i=0; i<=smallnum; i++)
{
    if((bignum%i==0) && (smallnum%i==0))
    {
        hcf=i;
    }
}
console.log(hcf);



// var hcf;
// function jagdish(num1, num2){

//     var bigNum;
//     var smallNum;
//     if(num1 > num2){
//         bigNum = num1;
//         smallNum = num2;
//     } else{
//         bigNum = num2;
//         smallNum = num1;
    
//     }

//     for(let i = 1; i <=smallNum; i++){
//         if((bigNum % i == 0 )&& (smallNum % i == 0)){
            
//             hcf = i;
//         }
//     }

    
    
// }
// jagdish(45,90);
// console.log(hcf);