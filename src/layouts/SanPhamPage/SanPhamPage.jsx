import React from "react";
// import "./Home.css";
import Navbar from "../../components/Navbar/Navbar.jsx";
import SanPham from "../../components/SanPham/SanPham.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import KhuyenMai from "../../components/Carousel/KhuyenMai.jsx";
import SingleSP from "./SingleSP.jsx";

export default function SanPhamPage() {
    return (
        <div className="App">
            <div>
                <Navbar />
            </div>
            {/* <div class="border-b-2 border-gray-200 mt-6 mb-10 ml-20 mr-20"></div> */}

            <div>
                <KhuyenMai />
            </div>

            <div class="border-b-2 border-gray-200 mt-10 ml-20 mr-20"></div>

            <div>
                <SanPham />
            </div>

            <div>
                <Footer />
            </div>
        </div>
    );
}
