const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    TieuDe: {
        type: String,
        ref: "TieuDe",
    },
    NoiDung: {
        type: String,
    },
    NgayDang: {
        type: String,
    },
    TieuDe1: {
        type: String,
    },
    TieuDe2: {
        type: String,
    },
    HinhAnh: {
        type: String,
    },
});

let post = mongoose.model("post", postSchema);

module.exports = post;
