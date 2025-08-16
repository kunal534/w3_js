/*
Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.
This JavaScript program calculates the area of a triangle with sides of lengths 5, 6, and 7 using Heron's formula.
It first computes the semi-perimeter (s) of the triangle, then uses it to find the area, which is logged to the console.

*/
/*
To get data we need the readline module which would get data from the terminal
creating an interface object r1 that connects input stream from terminal via process.stdin and 
terminal output stream via process.stout
*/
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});


/*
 Here what happen :
 
 In nodejs to get data from terminal we use readline and we have made an interface and an object
 which would gather the raw data from data stream from terminal: 
 1. The question is used to display the message on terminal via the output:process.stout and data is fetched via input:process.stdin
 2. So once the user type the value it is passed via the call_back function in our case:
    (side1)=>{} the value types is stored in the respective varible of call_back
*/
readline.question("Enter side 1: ", (side1) => {
  readline.question("Enter side 2: ", (side2) => {
    readline.question("Enter side 3: ", (side3) => {
      side1 = parseFloat(side1);
      side2 = parseFloat(side2);
      side3 = parseFloat(side3);

      const peri = (side1 + side2 + side3) / 2;
      const area = Math.sqrt(
        peri * (peri - side1) * (peri - side2) * (peri - side3)
      );

      console.log("Area of triangle: " + area.toFixed(2));
      readline.close();// after the output we close the process hence no listening for input
      // NOTE: we can't again mention readline in this nested loop 
    });
  });
});
