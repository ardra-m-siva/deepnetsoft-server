require('dotenv').config()
const express=require('express')
const cors=require('cors')
const router=require('./routes/router')
require('./database/dbConnection')

const deepnet=express()
deepnet.use(cors())
deepnet.use(express.json())
deepnet.use(router)

const PORT =3000 ||process.env.PORT

deepnet.listen(PORT,()=>{
    console.log("Server started successfully");
})

deepnet.get("/",(req,res)=>{
    res.send(`<h1 style="color:green">Server Started at PORT ${PORT} </h1> `)
})
