/*
Write a JavaScript program to get the current date.
Expected Output :
mm-dd-yy, mm/dd/yy or dd-mm-yy, dd/mm/yy
This JavaScript program retrieves the current date and formats it in 
multiple ways (mm-dd-yy, mm/dd/yy, dd-mm-yy, dd/mm/yy). 
It uses the Date object to get the current day, month, and year, 
and then adds leading zeros if necessary to ensure proper formatting.
Finally, it logs the formatted date strings to the console.
*/

var today= new Date();

var dd= today.getDate();
var mm=today.getMonth()+1;// as month starts from 0
var yy=today.getFullYear();

if(dd<10){
    dd = '0'+dd;
}

if(mm<10){
    mm='0'+mm;
}

// mm-dd-yy 
today = mm + '-' + dd + '-' + yy;
console.log(today);

// mm/dd/yy
today = mm + '/' + dd + '/' + yy;
console.log(today);

// dd-mm-yy
today = dd + '-' + mm + '-' + yy;
console.log(today);

// dd/mm/yy
today = dd + '/' + mm + '/' + yy;
console.log(today); 


