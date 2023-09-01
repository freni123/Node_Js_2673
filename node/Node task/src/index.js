const http = require('http')
const fs = require('fs')
const bodyParser=require('body-parser');
const express = require('express');
const { connectDB } = require("./src/db/dbConnection");
const routes = require('./src/routes/v1');
const config = require('./src/config/config');


// // fs module
// http.createServer(function(req, res){
//     fs.readFile('./index.html', function(err, data){
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write(data);
//         return res.end();
//     });
// }).listen(9009);

// // express using server
// const express = require('express');
const app = express();

// app.get('/',(req,res)=> {
//     res.send('Express server is Running');
//     console.warn('Express server is Running');
//     res.end()
// }).listen(4500);
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

//Routes  Namespace upload files
app.use("/v1", routes);

app.use((req, res, next) => {
  next(new Error("Route not found!"));
});

// Database connection
connectDB();

// create sewrver using http
const server = http.createServer(app);

server.listen(config.port, () => {
    console.log("server listning port number 3000!");
  });