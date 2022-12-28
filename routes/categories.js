var express = require("express");
var router = express.Router();
const categoryController = require("../controller/categoryController");

router.get('/', categoryController.getAllcategories)
router.post('/', categoryController.createsCategory)

module.exports = router;