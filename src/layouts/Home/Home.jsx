import React from "react";
// import "./Home.css";
import Navbar from "../../components/Navbar/Navbar.jsx";
import MainDash from "../../components/MainDash/MainDash.jsx";
import SanPham from "../../components/SanPham/SanPham.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Post from "../Post/Post.jsx";
import BaoHanh from "../BaoHanh/BaoHanh.jsx";

export default function Home() {
    return (
        <div className="App">
            <div>
                <Navbar />
            </div>
            {/* <div class="border-b-2 border-gray-200 mt-6 mb-10 ml-20 mr-20"></div> */}

            <div>
                <MainDash />
            </div>

            <div class="border-b-2 border-gray-200 mt-10 ml-20 mr-20"></div>

            <div>
                <SanPham />
            </div>

            <div>
                <Post />
            </div>

            <div>
                <BaoHanh />
            </div>

            <div>
                <Footer />
            </div>
        </div>
    );
}
