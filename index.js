var express = require('express');
var swaggerUi= require('swagger-ui-express')
var bodyParser = require('body-parser')
var app = express();
const swaggerDocument = require('./config/swagger.json');
app.use(bodyParser.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(process.env.PORT || 3000,
    console.log("Server Start"));


app.get('/getAllData',(req,res)=>{
   res.json({message:"Hi I am from 3000 PORT"})
})


app.post('/postAllData',(req,res)=>{
    res.json({message:"Hi I am from 3000 PORT",id:req.body.id,name:req.body.name})
 })