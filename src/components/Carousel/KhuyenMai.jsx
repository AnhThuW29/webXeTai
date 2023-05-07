import Carousel from "../Carousel/Carousel.jsx";
import km1 from "../../images/km1.jpg";
import km2 from "../../images/km2.jpg";
import "../MainDash/MainDash.css";

const slides = [km1, km2];

export default function KhuyenMai() {
    return (
        <div className="body">
            <div className="slider" data-carousel="slide">
                <Carousel autoSlide={true} className="slides">
                    {slides.map((s) => (
                        <img src={s} />
                    ))}
                </Carousel>
            </div>
        </div>
    );
}
