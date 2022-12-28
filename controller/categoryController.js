const response = require("../helper/responses");
const categories = [{ id: 1 , categoryName:"men"}, { id: 2 , categoryName:"women"}]

const getAllcategories = (req, res) => {
    return response.success(res, 'all categories', [...categories])
};

const createsCategory = (req, res) => { 
    const {categoryName} = req.body
    if (categoryName.length < 2) return response.failedWithMessage(res, "Category name is not valid")
    categories.push({id: categories.length + 1, categoryName :categoryName })
    return response.success(res ,"a new category added successfully", categories[categories.length -1])
}

module.exports = {
  getAllcategories,
  createsCategory,
  categories,
};
