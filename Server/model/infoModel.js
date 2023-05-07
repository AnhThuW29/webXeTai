const mongoose = require("mongoose");

const infoSchema = new mongoose.Schema({
    TenKH: {
        type: String,
    },
    SDT: {
        type: String,
    },
    DiaChi: [
        {
            ChiTiet: { type: String },
            TinhTP: { type: String },
            QuanHuyen: { type: String },
        },
    ],
    GhiChu: {
        type: String,
    },
});

let Info = mongoose.model("Info", infoSchema);

module.exports = Info;
