import Carousel from "../Carousel/Carousel.jsx";
import solati from "../../images/solati.jpg";
import truck from "../../images/truck.jpg";
import { UilPhone } from "@iconscout/react-unicons";

import "./MainDash.css";

const slides = [solati, truck];

export default function MainDash() {
    return (
        <div>
            <div className="body">
                <div
                    className="slider"
                    // className="flex justify-center max-w-3xl w-full h-full ml-auto mr-auto"
                    data-carousel="slide"
                >
                    <Carousel autoSlide={true} className="slides">
                        {slides.map((s) => (
                            <img src={s} />
                        ))}
                    </Carousel>
                </div>
            </div>
            {/* <div className="bandrol grid grid-cols-2 justify-items-center ">
                <ul className="sub-bandrol col-span-1 ml-20">
                    <li>Hỗ trợ vay ngân hàng</li>
                    <li>Thủ tục nhanh chóng - Tỷ lệ thành công cao</li>
                </ul>
                <ul
                    className="sub-bandrol col-span-1 mr-20"
                    style={{ margin: "20px" }}
                >
                    <div className="menuItem">
                        <UilPhone />
                        <span>Liên hệ ngay:</span>
                    </div>
                    <li>09111111111</li>
                </ul>
            </div> */}
        </div>
    );
}
