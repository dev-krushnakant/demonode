const {readFile,writeFile} = require('fs')

console.log('start');
readFile('./content/first.txt','utf8',(err,result) => { 
    if(err){
        console.log(err);
    }
    const first = result;
    
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err);
        }
        const second = result;
        writeFile('./content/result-async.txt',`The result : ${first}, ${second}`,(err,result)=>{
            if(err){
                console.log(err);
            }
            console.log('Done with this task')
        })
    })
})

console.log('starting next task now ')
