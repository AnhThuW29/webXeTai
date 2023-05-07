const router = require("express").Router();

const loaixeController = require("../controller/LoaiXeController");

// thêm xe tải
router.post("/add", loaixeController.addLoaiXe);

// lấy tất cả xe tải
router.get("/getall", loaixeController.getAll);

module.exports = router;
