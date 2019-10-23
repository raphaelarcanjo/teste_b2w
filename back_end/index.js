const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

const path = require('path')
const db = require('./db')
const collection = "planets"

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})

// app.get('/planet/:id',(req,res)=>{
    // db.getDB().collection(collection).find({}).toArray((err,documents)=>{
    //     if(err) throw err
    //     else 
    // })
// })

// app.get('/add',(req,res)=>{
    
// })

app.use((err,req,res,next)=>{
    res.status(err.status).json({
        error:{
            message:err.message
        }
    })
})

db.connect(err=> {
    if(err) console.log(err)
    else app.listen(3000,()=> console.log("Servidor rodando na porta 3000"))
})