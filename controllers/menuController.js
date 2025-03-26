const menues = require('../models/menuModel')

exports.addMenuController = async (req, res) => {
    const { name, description } = req.body
    try {
        const newMenuItem = new menues({
            name, description
        })
        await newMenuItem.save()
        res.status(200).json(newMenuItem)
    } catch (err) {
        res.status(404).json(err)
    }
}

exports.getAllMenuController = async (req, res) => {
    try {
        const allmenues = await menues.find()
        res.status(200).json(allmenues)
    } catch (err) {
        res.status(404).json(err)
    }
} 