const loaixeModel = require("../model/LoaiXeModel");

const xetaiController = {
    addLoaiXe: async (req, res) => {
        try {
            // console.log(req.body);
            const newLoaiXe = new loaixeModel(req.body);

            // Save DB
            const saveLX = await newLoaiXe.save();
            res.status(200).json(saveLX); // Lưu thành công và trả về tt xe tải
        } catch (error) {
            console.log(error);
            res.status(500).json(err);
        }
    },

    getAll: async (req, res) => {
        try {
            const loaixe = await loaixeModel.find();
            res.status(200).json(loaixe);
        } catch (error) {
            res.status(500).json(error);
        }
    },
};

module.exports = xetaiController;
