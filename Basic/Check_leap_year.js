let leapyear=(year)=>{
    return (year%100===0)? (year%400===0):(year%4===0)
}

const readline =require("readline").createInterface({
    input:process.stdin,
    output:process.stdout
});

readline.question("Enter year: ",(q)=>{
    console.log(leapyear(q)?"Yes":"No");
    readline.close()
})
