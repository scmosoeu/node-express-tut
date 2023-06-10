const http = require('http');
const {readFileSync} = require('fs');

// get all files
const homePage = readFileSync('./navbar-app/index.html')
const homeStyles = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((req, res) => {
  // console.log(req.method)
  const url = req.url;
  
  if(url === '/') {
    // home page
    res.writeHead(200, {'content-type': 'text/html'})
    res.write(homePage)
    res.end()
  } else if(url === '/about') {
    // about page
    res.writeHead(200, {'content-type': 'text/html'})
    res.write('<h1>about page</h1>')
    res.end()
  
  } else if(url === '/styles.css') {
    // styles
    res.writeHead(200, {'content-type': 'text/css'})
    res.write(homeStyles)
    res.end()
  } else if(url === '/logo.svg') {
    // image/logo
    res.writeHead(200, {'content-type': 'image/svg+xml'})
    res.write(homeImage)
    res.end()
  } else if(url === '/browser-app.js') {
    // logic
    res.writeHead(200, {'content-type': 'text/javascript'})
    res.write(homeStyles)
    res.end()
  } else {
    // 404
    res.writeHead(404, {'content-type': 'text/html'})
    res.write('<h1>page not found</h1>')
    res.end()
  }
})

server.listen(5000);