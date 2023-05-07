import React, { useEffect, useState } from "react";
import axiosSP from "../../Data/sanpham.js";
import "./SanPham.css";
import { Link } from "react-router-dom";
import { URL_IMAGES } from "../../Data/URLgetData";
import { UilTruck } from "@iconscout/react-unicons";

import H150 from "../../images/H150.png";
import N250 from "../../images/N250.png";
import M75S from "../../images/M75S.png";
import M110SP from "../../images/M110XL.jpg";
import M110SL from "../../images/M110XL.jpg";
import M110XL from "../../images/M110XL.jpg";

// const XeTaiNhe = [
//     {
//         name: "Xe tải 1,5 tấn",
//         description: "New porter H150",
//         imageSrc: H150,
//         imageAlt:
//             "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
//         href: "#",
//     },
//     {
//         name: "Xe tải 2,5 tấn",
//         description: "New mighty N250/N250SL",
//         imageSrc: N250,
//         imageAlt:
//             "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
//         href: "#",
//     },
// ];
const XeTaiTrung = [
    {
        name: "Xe tải 3,5 tấn",
        description: "New Mighty 75S",
        imageSrc: M75S,
        imageAlt:
            "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
        href: "#",
    },
    {
        name: "Xe tải 7 tấn",
        description: "New Mighty 110SP",
        imageSrc: M110SP,
        imageAlt:
            "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
        href: "#",
    },
    {
        name: "Xe tải 7 tấn",
        description: "New Mighty 110SL",
        imageSrc: M110SL,
        imageAlt:
            "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
        href: "#",
    },
    {
        name: "Xe tải 7 tấn",
        description: "New Mighty 110XL",
        imageSrc: M110XL,
        imageAlt:
            "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
        href: "#",
    },
];

const SanPham = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const xetaiData = JSON.parse(localStorage.getItem("xetaiData"));

    useEffect(() => {
        const getSP = async () => {
            try {
                await axiosSP.get("/xetai/getall").then((res) => {
                    setData(res.data);
                });
            } catch (error) {
                setError(error);
            }
        };
        getSP();
    }, []);

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl pt-6 sm:pt-6 lg:max-w-none lg:py-12">
                    <div className="menuItem grid justify-items-center">
                        <UilTruck size="40" />
                        <h2 className="text-2xl font-bold text-gray-900">
                            XE TẢI NHẸ
                        </h2>
                    </div>
                    <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                        {data.map((item, index) => (
                            <Link
                                to={"/xetai/" + item._id}
                                style={{ textDecoration: "none" }}
                            >
                                <div key={index} className="group relative">
                                    <div className="relative h-fit w-9/16 overflow-hidden rounded-lg bg-white sm:aspect-h-2/5 sm:aspect-w-2 lg:aspect-h-2/5 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                        <img
                                            src={H150}
                                            className="h-full w-full object-cover object-center mt-6"
                                        />
                                    </div>
                                    <h3 className="mt-6 text-sm text-gray-500">
                                        <a>
                                            <span className="absolute inset-0" />
                                            {item.TenXe}
                                        </a>
                                    </h3>
                                    <p className="text-base font-semibold text-gray-900">
                                        {item.TieuDe}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                {/* <div class="border-b-2 border-gray-800 mt-10 ml-10 mr-10"></div> */}

                <div className="mx-auto max-w-2xl pt-6 sm:pt-6 lg:max-w-none lg:py-6">
                    <div className="menuItem">
                        <UilTruck size="40" />
                        <h2 className="text-2xl font-bold text-gray-900">
                            XE TẢI TRUNG
                        </h2>
                    </div>

                    <div className="mt-6 space-y-12 lg:grid lg:grid-cols-4 lg:gap-x-4 lg:space-y-4">
                        {XeTaiTrung.map((XeTaiTrung) => (
                            <div
                                key={XeTaiTrung.name}
                                className="group relative"
                            >
                                <div className="relative h-fit w-9/16 overflow-hidden rounded-lg bg-white sm:aspect-h-2/5 sm:aspect-w-2 lg:aspect-h-2/5 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                    <img
                                        src={XeTaiTrung.imageSrc}
                                        alt={XeTaiTrung.imageAlt}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <h3 className="mt-6 text-sm text-gray-500">
                                    <a href={XeTaiTrung.href}>
                                        <span className="absolute inset-0" />
                                        {XeTaiTrung.name}
                                    </a>
                                </h3>
                                <p className="text-base font-semibold text-gray-900">
                                    {XeTaiTrung.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SanPham;
