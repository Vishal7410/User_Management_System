const express = require('express'); // create a server 
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');
const exp = require('constants');


const app = express(); // create instantace of the server

dotenv.config({path:'config.env'})
const PORT = process.env.PORT||8080

// log requuests
app.use(morgan('tiny'));

// parse request to body-parser
app.use(bodyparser.urlencoded({extended:true}))

//set view engine
app.set("view engine","ejs")
//app.set("view",path.resolve(__dirname,"views/ejs"))

// load asset 
app.use('/css',express.static(path.resolve(__dirname,"asset/css")))
app.use('/img',express.static(path.resolve(__dirname,"asset/img")))
app.use('/js',express.static(path.resolve(__dirname,"asset/js")))

// load Routers

app.use('/',require('./server/routes/router'))


app.listen(3000, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
