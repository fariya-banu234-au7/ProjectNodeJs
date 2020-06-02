const http = require('http');

const server = http.createServer((req, res) => {
    // console.log(req);
    // console.log(req.method);
    // const {headers, url, method} = req;
    // console.log(headers,url,method);
    res.statusCode = 404;
    const todos = [
        {id: 1, todo: 'One'},
        {id: 2, todo: 'Two'},
        {id: 3, todo: 'Three'},
    ];

    // res.setHeader('Content-Type','text/html');
    res.setHeader('Content-Type','application/json');
    // res.write("<h1>Hello</h1>");
    // res.end(JSON.stringify(todos));
    // res.end(
    //     JSON.stringify({
    //     status: true,
    //     data: todos
    // }));  
    res.writeHead(400, {
        'Content-Type':'application/json'
    });

    res.end(
        JSON.stringify({
        status: false,
        data: null
    }));
}); //creates a server 

const PORT = 5000;

server.listen(PORT,
    () => console.log(`Server is running on port : ${PORT}`));