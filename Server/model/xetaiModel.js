const mongoose = require("mongoose");

const xetaiSchema = new mongoose.Schema({
    TenXe: {
        // type: mongoose.Schema.Types.ObjectId,
        type: String,
        ref: "TenXe",
    },
    TieuDe: {
        type: String,
    },
    MoTa: {
        type: String,
    },
    Gia: {
        type: String,
    },
    NoiBat: {
        type: String,
    },
    TaiTrong: {
        type: String,
    },
    KichThuocThung: {
        type: String,
    },
    LoaiDongCo: {
        type: String,
    },
    TongTai: {
        type: String,
    },
    CDCS: {
        type: String,
    },
    DungTich: {
        type: String,
    },
    CongSuat: {
        type: String,
    },
    Momen: {
        type: String,
    },
    HopSo: {
        type: String,
    },
    Phanh: {
        type: String,
    },
    BaoHanh: {
        type: String,
    },
    HinhAnh: {
        type: String,
    },
    ThongSoXe: {
        // Hình ảnh cho thông số xe
        type: String,
    },
    LoaiXe: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "LoaiXe",
    },
});

let Xetai = mongoose.model("Xetai", xetaiSchema);

module.exports = Xetai;
