const mongoose=require('mongoose')

const menuSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    }
})

const menus=mongoose.model('menus',menuSchema)

module.exports=menus