const menuController=require('../controllers/menuController')
const menuItemController=require('../controllers/menuItemController')

const express=require('express')
const router=express.Router()

router.post("/add-menu",menuController.addMenuController)

router.get("/get-menu",menuController.getAllMenuController)

router.post("/add-menu-item",menuItemController.addMenuItemController)

router.post("/get-food-item",menuItemController.getFoodItemController)

module.exports=router