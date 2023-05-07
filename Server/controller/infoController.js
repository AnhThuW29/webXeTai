const infoModel = require("../model/infoModel");

const InfoController = {
    // add info
    addInfo: async (req, res) => {
        try {
            const newInfo = await new infoModel(req.body);
            const save = await newInfo.save();

            res.status(200).json(save);
        } catch (error) {
            console.log("Lỗi controller: ", error);
        }
    },

    // get all info

    getAll: async (req, res) => {
        try {
            const all = await infoModel.find();
            res.status(200).json(all);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    },
};

module.exports = InfoController;
