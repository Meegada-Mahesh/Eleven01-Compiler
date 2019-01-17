const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");



const app = express();


app.set('view engine','ejs');
app.set('views',__dirname+'/views');

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());


app.listen(3000);
console.log("Server is running at port 3000");