const mongoose =require('mongoose')

const connectionString= process.env.CONNECTIONSTRING

mongoose.connect(connectionString).then(res=>{
    console.log("Connected with mongo DB Atlas");
}).catch(err=>{
    console.log("Connected with mongo DB Failed",err);
})