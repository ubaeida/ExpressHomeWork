var express = require("express");
var router = express.Router();
const itemsController = require("../controller/itemsController");

router.get("/", itemsController.getAllItemes);
router.post("/", itemsController.addItem);
router.delete("/:id", itemsController.deleteItem);
router.get("/:id", itemsController.getSigleItem);
router.put("/:id", itemsController.updateItem);
router.get("/category/:id", itemsController.getItemsByCategoryId);

module.exports = router;
