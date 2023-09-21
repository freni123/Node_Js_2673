const http = require('http');
const express = require('express');
const bodyparser = require('body-parser');
const routes = require('./routes/v1');
const config = require('./config/config');
const {connectDB} = require('./db/dbConnection');
const app = express();

/**allow form data from body */
app.use(bodyparser.urlencoded({ extended: false }));

/**allow json data from body */
app.use(bodyparser.json());

/**frantend error handle useing cors */
// app.use(cors());

/** enable cors */
// app.use(cors());
// app.options("*", cors());

//Routes Namespace upload files
app.use("/v1",routes);

app.use((req,res,next) => {
    next(new Error("Route not Found!"));
});
//Database connection
connectDB();

// create server using http
const server = http.createServer(app);

server.listen(config.port, () => {
    console.log("server listening 4500");
});

