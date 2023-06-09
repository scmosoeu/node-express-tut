const {createReadStream} = require('fs')

const stream = createReadStream('./content/big.txt', {highWaterMark: 90000})

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = CreateReadStream('./content/big.txt', {highWaterMark: 90000})
// const stream = CreateReadStream('./content/big.txt', {encoding: 'utf-8'})

stream.on('data', (result) => {
  console.log(result)
})

stream.on('error', (err) => console.log(err))