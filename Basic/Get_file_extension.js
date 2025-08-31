const readline=require("readline");
const r=readline.Interface({
    input:process.stdin,
    output:process.stdout
});

r.question("enter file name along with entension eg .png:",(file_name)=>{
    if(!file_name.includes('.'))
    {
        console.log("It's not a extension file");  
    }
    else{
        const last_extension=file_name.split('.').pop();// getting string after the . 

        // if more than one extension then getting index of . +1 till the end
        const full_extension=file_name.substring(file_name.indexOf('.')+1);

        console.log("Last extension: ",last_extension);
        if(full_extension!== last_extension)
        {
            console.log("Full extension: ",full_extension);
        }
    }
    r.close();
});