/*
Write a JavaScript program to display the current day and time in the following format.  
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38
*/
const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

const curr= new Date();

const day_name=days[curr.getDay()];
let hours=curr.getHours();
const minutes=curr.getMinutes();
const seconds=curr.getSeconds();

const am_or_pm=hours>=12?"PM":"AM";

hours =hours%12;
hours= hours ? hours:12;// edge case of 00 which is 12:pm/am

console.log(`Today is: ${day_name}.`);
console.log(`Current time is: ${hours} ${am_or_pm} : ${minutes} : ${seconds}`);
