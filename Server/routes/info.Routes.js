const InfoController = require("../controller/infoController");
const router = require("express").Router();

// add
router.post("/add", InfoController.addInfo);

// get all
router.get("/getall", InfoController.getAll);

module.exports = router;
