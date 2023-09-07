var a = [25, 27, 45, 50, 54];
let f=0;
var p = 2;
var mid;
var left = 0;
var right = a.length - 1;

while (left <= right) {
  var mid = Math.floor((left + right) / 2);

  if (a[mid] === p) {
   f=1;
    console.log(p + " found at index " + mid);
    break;
  } else if (a[mid] < p) {
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}
if(f==0)
{
    console.log("not found")
}
else
{
    console.log("found")
}

