const menuitems=require('../models/menuItemModel')

exports.addMenuItemController= async(req,res)=>{
    const {title,description,price,category}=req.body
    console.log(req.body);
    try{
        const newMenuItem= new menuitems({
            title,itemDescription:description,price,category
        })
        await newMenuItem.save()
        res.status(200).json(newMenuItem)
    }catch(err){
        res.status(404).json(err)
    }
}

exports.getFoodItemController= async(req,res)=>{
    const {category} =req.body
    try{
        const allFoodItem= await menuitems.find({category})
        res.status(200).json(allFoodItem)
    }catch(err){
        res.status(404).json(err)
    }
}