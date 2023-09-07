// var a = [25, 5, 1, 10, 16];

// var n = a.length;
// var swapped;

// do {
//   swapped = false;

//   for (var i = 0; i < n - 1; i++) {
//     if (a[i] > a[i + 1]) {
//       // Swap elements
//       var temp = a[i];
//       a[i] = a[i + 1];
//       a[i + 1] = temp;
//       swapped = true;
//     }
//   }
// } while (swapped);

// console.log("Sorted Array:", a);


var a = [25, 5, 1, 10, 16];

var temp;



  for (var i = 0; i <=a.length - 2; i++) {
    {
        for(var j=i+1; j<=a.length-1; j++)
        {
            if (a[i] > a[j]) {
                // Swap elements
                // temp = a[i];
                // a[i] = a[j];
                // a[j] = temp;
                // console.log(a)

                  a[i]= a[i]^a[j];
                  a[j] =  a[i]^a[j];
                  a[i] =  a[i]^a[j];
                
                console.log(a)

              }
            }

        }
        console.log(a)
    }
    


