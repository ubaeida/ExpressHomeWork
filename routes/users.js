var express = require("express");
var router = express.Router();
const userController = require("../controller/userController");
/* GET users listing. */

router.post("/register", userController.register);
router.get("/", userController.getUsers);
router.post("/login", userController.login);
router.get("/me", userController.getProfile)



module.exports = router;