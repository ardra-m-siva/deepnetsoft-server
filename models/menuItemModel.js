const mongoose=require('mongoose')

const menuItemSchema=mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    itemDescription:{
        type:String,
        required:true,
    },
    price:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    }
})

const menuitems=mongoose.model('menuitems',menuItemSchema)

module.exports=menuitems