const {readFile, writeFile} = require('fs')
// const fs = require('fs')

console.log('start')
readFile('./content/first.txt', 'utf-8', (err, result) => {
    if(err) {
        console.log(err)
    }
    const first = result;
    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if(err) {
            console.log(err)
        }
        const second = result
        writeFile(
            './content/result-async.txt', 
            `Here is the result: ${first}, ${second}`,
            (err, result) => {
                if(err) {
                    console.log(err)
                }
                console.log('done with this task')
            }
        )
    })
})
console.log('starting the next one')
