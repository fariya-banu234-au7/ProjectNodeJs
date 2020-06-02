const http = require('http');
const chalk = require('chalk');
const server = http.createServer((req,res) => {
    console.log(chalk.blue("It's working!"));
    res.write(req.method);
    res.end();
});

const PORT = 4000;

server.listen(PORT, () => {
    console.log(`Server is running on PORT :: ${PORT}`);
});

