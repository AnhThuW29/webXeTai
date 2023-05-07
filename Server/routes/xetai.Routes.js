const router = require("express").Router();
const xetaiController = require("../controller/xetaiController");
const multer = require("multer");

// SET STORAGE
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log("1111111: ", file);
        cb(null, "/server/public/images");
    },
    filename: function (req, file, cb) {
        console.log("LOG hình ảnh: ", file);
        cb(null, file.originalname);
    },
});

var upload = multer({ storage: storage });

// thêm xe tải
router.post("/add", upload.single("HinhAnh"), xetaiController.addXetai);

// lấy tất cả xe tải
router.get("/getall", xetaiController.getAll);

// lấy chi tiết 1 xe tải
router.get("/getone/:id", xetaiController.getOneByID);

//lấy theo loại xe tải
router.get("/getbyidloaixe/:id", xetaiController.getByIDLoaiXe);

// update
router.put("/update/:id", xetaiController.updateXeTai);

// delete

router.delete("/delete/:id", xetaiController.deleteXeTai);

module.exports = router;
