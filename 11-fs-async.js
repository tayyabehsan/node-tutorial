const {readFile, writeFile} = require('fs');

console.log('start');

readFile('./content/first.txt', 'utf8', (err, result)=>{
    if(err){
        console.log(err);
        return null;
        //return; You can use just return as well.
    }
    const first = result;

    readFile('./content/second.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err);
        return null;
        //return; You can use just return as well.
    }
    const second = result;
    
    writeFile('./content/result-async.txt',
    `Here is the result of async: ${first}, ${second}`,
    {flag: 'a'},
    (err, result)=> {
        if(err) {
            console.log(err);
            return;
        }
        console.log('done with this task');

    })

    })
    
    
});
console.log('starting next....');

//Node will create a file. If file already exists it will overwrite

// writeFileSync(
//     './content/result-sync.txt',
//     `Here is the result : ${first}, ${second}`
// );
//If you want to append pass a third argument which is a property. 

//NOTICE RESULTS WITH 10-FS-SYNC (BLOCKING/ LINE BY LINE EXECUTION... HERE NEXT USER IS WAITING IN LINE TILL THE FIRST USER TASK IS COMPLETED )
//11-FS-ASYNC NON-BLOCKING (MULTIPLE USER REQUESTS HANDLED IN ASYNC THE MOMENT YOU GET THE REQUEST NODE OFF LOADS IT AND MOVES ON TO NEXT ONE)
