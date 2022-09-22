const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

var sum = 0;
   
askNumber();

function askNumber(){
    readline.question('Input your number or write "stop" to stop and add: ', number => {
        if(number === "stop"){
            console.log("Sum: " + sum);            
            readline.close();
        } else {
            sum += Number(number);
            //process.nextTick(getNumber);
            setImmediate(getNumber);
        }        
   });
}    

function getNumber(){
    askNumber();
}
