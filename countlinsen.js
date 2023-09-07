// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b


function myFunction(a, b) {
    var count = 0;
    for(let i = 0; i <= b.length; i++){
       if(b[i] === a){
          count++;
       }
    }
    return count;
}
result=myFunction("a", "i am a boy");
console.log(result);