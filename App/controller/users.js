const { httpError } = require("../helpers/handleError.js")
const userModel = require("../models/users.js")

const getItems = async (req, res) => {
    // res.send({list: [1,2,3]})
    try {
        
        const listAll = await userModel.find({})
        res.send({ data: listAll })
    }
    catch (e) {
        httpError(res, e)
    }
}

const getItem = async (req, res) => {
    try {
        
        const listOne = await userModel.find({_id: req.body.id })
        res.send({ data: listOne })
    }
    catch (e) {
        httpError(res, e)
    }

}

const createItem = async (req, res) => {
    try {
        const { name, DOB, bio } = req.body
        const resDetail = await userModel.create({
            name, DOB, bio
        })
        res.send({ data: resDetail })
    }
    catch (e) {
        httpError(res, e)
    }

}

const updateItem = async (req, res) => {
    try {
        const { name, DOB, bio } = req.body
        const resDetail = await userModel.findByIdAndUpdate({ _id: req.body.id},{
            name, DOB, bio
        })
        res.send({ data: resDetail })
    }
    catch (e) {
        httpError(res, e)
    }

}

const deleteItem = async (req, res) => {
    try {
        const resDetail = await userModel.findOneAndDelete({_id: req.body.id})
        res.send({ data: resDetail })
    }
    catch (e) {
        httpError(res, e)
    }

}

module.exports = { getItem, getItems, createItem, updateItem, deleteItem }