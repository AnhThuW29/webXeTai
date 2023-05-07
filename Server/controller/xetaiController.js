const xetaiModel = require("../model/xetaiModel");
const LoaiXe = require("../model/LoaiXeModel");

const xetaiController = {
    // Thêm 1 xe tải
    addXetai: async (req, res) => {
        try {
            console.log(req.body);
            const newXeTai = new xetaiModel(req.body);

            //thêm hình
            if (req.file) {
                var nameImg = req.file.originalname;
                newXeTai.HinhAnh = nameImg;
            }

            // Save DB
            const saveXT = await newXeTai.save();

            //gán xe tải vào loại xe tải
            if (req.body.LoaiXe) {
                const lx = LoaiXe.findById(req.body.LoaiXe); // Nếu có loại xe thì tìm _id của loại xe
                await lx.updateOne({ $push: { dsLoaiXe: saveXT._id } }); // gán xe cho loại xe, push chỉ dùng cho array
            }

            res.status(200).json(saveXT); // Lưu thành công và trả về tt xe tải
        } catch (error) {
            console.log(error);
            res.status(500).json(err);
        }
    },

    // Update 1 xe tải
    updateXeTai: async (req, res) => {
        try {
            const xetai = await xetaiModel.findById(req.params.id);
            await xetai.updateOne({ $set: req.body });
            res.status(200).json("Update Successfully!");
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // delete
    deleteXeTai: async (req, res) => {
        try {
            await LoaiXe.updateMany(
                { dsLoaiXe: req.params.id },
                { $pull: { dsLoaiXe: req.params.id } }
            );
            await xetaiModel.findByIdAndDelete(req.params.id);
            res.status(200).json("Delete");
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    },

    // Lấy tất cả xe tải
    getAll: async (req, res) => {
        try {
            const xetai = await xetaiModel
                .find()
                .populate("LoaiXe", ["TenLoaiTour"])
                .sort({ createdAt: -1 });
            res.status(200).json(xetai);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // Lấy 1 xe tải theo id
    getOneByID: async (req, res) => {
        try {
            console.log(req.body);
            const one = await xetaiModel.findById(req.params.id); // lấy ra 1 xe tải theo id, params là :
            res.status(200).json(one);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // get by id loai xe
    getByIDLoaiXe: async (req, res) => {
        try {
            const t = await xetaiModel.find({ LoaiXe: req.params.id }).sort({
                createdAt: -1,
            });
            res.status(200).json(t);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    },
};

module.exports = xetaiController;
