const http = require('http');

const server = http.createServer((req, res)=>{
    //console.log(req);
    if(req.url === '/') {
        res.write(`
            <html>
            <body>
                <h1>Welcome to HomePage</h1>
                <br> 
                <a href="/about">About Us</a>
            </body>
            </html>
        `);
        res.end();
    }
    else if(req.url === '/about') {
        res.write(`
        <html>
        <body>
            <h1>Welcome to About US</h1>
            <br>  
            <a href="/">Home</a>
        </body>
        </html>
    `);
        res.end();
    }
    else {
    res.write(`
        <html>
        <body>
            <h1>OOPS!</h1>
            <p>We can't seem to find the page you are looking for...</p>
            <a href="/">Home Page</a>
        </body>
        </html>
    `);
    res.end();
    }
    //res.write('Welcome to our homepage');
    //res.end();
});

server.listen(5000);
