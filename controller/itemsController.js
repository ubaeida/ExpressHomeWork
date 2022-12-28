const response = require("../helper/responses");
const {categories} = require("./categoryController")
const items = [
    { id: 1, name: "T-shirt", price: "36$", categoryid: 1 }, 
    { id: 2, name: "dress", price: "100$", categoryid: 2 },
    { id: 3, name: "skirt", price: "25$", categoryid: 2 },
    { id: 4, name: "hoodie", price: "10$", categoryid: 1 }
]
const getAllItemes = (req, res) => { 
    return response.success(res, 'All items', [...items])
}
const addItem = (req, res) => { 
    const { name, price, categoryid} = req.body
    const item = categories.find( categoray => categoray.id == categoryid)
    if(!item) return response.failedWithMessage(res, "Category not found")
    else {
        items.push({id: items.length+1, name, price ,categoryid})
        response.success(res ,"a new category added successfully", items[items.length -1])}
}
const deleteItem = (req, res) => { 
    const {id }= req.params
    var index= items.findIndex(item => item.id == id )
    if (index == -1) return response.failedWithMessage(res, "item not found")
    else {
        items.splice(index, 1)
        response.success(res ,"item deleted", [])
    }
}
const getSigleItem = (req, res) => { 
    const {id }= req.params
    var item= items.find(item => item.id == id )
    if(!item) return response.failedWithMessage(res, "item not found")
    else {
        response.success(res ,"Item found", [item])}
}
const updateItem = (req, res) => { 
    const {id }= req.params
    const { name, price, categoryid} = req.body
    var item= items.find(item  => item.id == id )
    if(!item) return response.failedWithMessage(res, "item not found")
    else {
        item.name = name
        item.price = price
        item.categoryid =categoryid
        response.success(res ,"Item updated successfully", [item])}
}
const getItemsByCategoryId = (req, res) => {
    const {id }= req.params
    const itemsList = items.filter(item  => item.categoryid == id )
    if (itemsList.length == 0) response.failedWithMessage(res, 'No items found in requested category or category not found')
    else response.success(res, 'All items in requested category', [...itemsList])
} 
module.exports = {
    getAllItemes,
    addItem,
    deleteItem,
    getSigleItem,
    updateItem,
    getItemsByCategoryId
};
