const mongoose = require("mongoose");

const LoaiXeSchema = new mongoose.Schema({
    TenLoaiXe: {
        type: String,
    },
    dsLoaiXe: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Xetai",
        },
    ],
});

let LoaiXe = mongoose.model("LoaiXe", LoaiXeSchema);

module.exports = LoaiXe;
