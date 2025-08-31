readline=require("readline");

const r=readline.Interface({
    input:process.stdin,
    output:process.stdout
});

r.question("enter the string ",(str1)=>{
    if(str1===null || str1===undefined || str1.substring(0,2)==='py')
    {
        r.close();
    }
    else{
        console.log('py'+str1)
    }
    r.close();
})