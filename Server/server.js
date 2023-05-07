const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
var bodyParser = require("body-parser");
const morgan = require("morgan");

const XetaiRouter = require("./routes/xetai.Routes");
const LoaiXeRouter = require("./routes/LoaiXe.Routes");
const InfoKHRouter = require("./routes/info.Routes");

app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use(morgan("common"));
dotenv.config();

app.use("/public", express.static("public"));

// kết nối mongodb
mongoose.set("strictQuery", true);
mongoose.connect(process.env.MONGODB_URL, () => {
    try {
        console.log("--- Connected to MongoDB!!");
    } catch (error) {
        console.log("MongoDB: ", error);
    }
});

app.use("/xetai", XetaiRouter);
app.use("/LoaiXe", LoaiXeRouter);
app.use("/infoKH", InfoKHRouter);

// app.get("/", (req, res) => {
//     return res.send("Hello World!");
// });

app.listen(8000, () => {
    console.log(`Connect successfull!!`);
});
