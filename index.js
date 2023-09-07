



var a = [46, 23, 6, 21, 6, 34, 2, 18];
var target = 6;
var found = 0;


for (var i = 0; i < a.length; i++) {
  if (a[i] == target) {
    found++
    
  }
  
}

if (found==0) {
    console.log( " not found in the array." );
} else {
  
  console.log(target + " found " +`${found}` +"times in the list");
}



// var a = [46, 23, 12, 21, 6, 34, 2, 18];
// var target = 6;

// for (var i = 0; i < a.length; i++) {
//     if (a[i] === target) {
//         console.log(target + " found at index " + `${a[i]}==${target}`);
//     }
//     else{
//         console.log(target + " not found in the array.");
//     }
//   }