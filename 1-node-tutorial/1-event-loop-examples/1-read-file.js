const fs = require('fs')

console.log('Started first task')

// readFile is asynchronous
fs.readFile('./content/first.txt', 'utf-8', (err, result) => {
    if(err) {
        console.log(err)
        return
    }
    console.log(result)
    console.log('completed first task')
})

console.log('starting next task')