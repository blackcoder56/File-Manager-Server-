const express = require('express');
const { hostname } = require('os');
const app = new express();
const server = require('http').createServer(app);
const cors = require('cors');
const port = process.env.port || 8080;
const mainProcess = require('./API/main');
require('dotenv').config({path: __dirname+'/.env'});


const isDev = process.env.Node_ENV === "development";

//--MiddleWare 
app.use(cors());
app.use(express.json());
//--API Routes

app.use('/api/dir/',mainProcess);

try {
    server.listen(port);
    if(isDev) console.log(`Server is starting in Developement Mode\nOn http://localhost:${port}`);
    else console.log(`Server is Starting in Production mode \nOn http://localhost:${port}`);
} catch (error) {
    console.log('Somthing went Wrong server is not started');
}