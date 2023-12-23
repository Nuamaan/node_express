const http = require('http');

const server = http.createServer((req, res) => {
    // console.log(req);
    if (req.url === '/') {
        res.end('Home Page')
    } else if (req.url === '/about') {
        res.end('About Page')
    } else {
        res.end(`
        <h1>Oops</h1>
        <p>The page cant be found</p>
        <a href='/'>back home</a>
        `)
    }

})

server.listen(4000)