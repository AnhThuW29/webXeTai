import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import {
    SelectDistrict,
    SelectProvince,
    getProvinceName,
    getDistrictName,
} from "vn-ad";
import axios from "axios";

export default function LienHe() {
    const [ten, setTen] = useState();
    const [SDT, setSDT] = useState();
    const [diachi, setDiachi] = useState();
    const [tinh, setTinh] = useState();
    const [huyen, setHuyen] = useState();
    const [xa, setXa] = useState();
    const [ghichu, setGhichu] = useState();

    const hanldeSubmit = async (e) => {
        e.preventDefault();
        const data = {
            TenKH: ten,
            SDT: SDT,
            DiaChi: [
                {
                    ChiTiet: diachi,
                    TinhTP: getProvinceName(tinh),
                    QuanHuyen: getDistrictName(huyen),
                },
            ],
            GhiChu: ghichu,
        };

        await axios
            .post("http://localhost:8000/infoKH/add", data)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log("Lỗi liên hệ: ", err);
            });
    };

    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className="isolate bg-white px-6 py-24 sm:py-16 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Đăng ký nhận báo giá
                    </h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Để lại thông tin và số điện thoại, chúng tôi sẽ liên hệ
                        bạn ngay.
                    </p>
                </div>
                <form
                    action="#"
                    method="POST"
                    className="mx-auto mt-16 max-w-xl sm:mt-20"
                >
                    <div className="sm:grid-cols-2">
                        <div>
                            <label
                                htmlFor="first-name"
                                className="block text-sm font-semibold leading-6 text-gray-900"
                            >
                                Họ và tên
                            </label>
                            <div className="mt-2.5">
                                <input
                                    value={ten}
                                    onChange={(e) => setTen(e.target.value)}
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        {/* <div>
                            <label
                                htmlFor="last-name"
                                className="block text-sm font-semibold leading-6 text-gray-900"
                            >
                                Last name
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    name="last-name"
                                    id="last-name"
                                    autoComplete="family-name"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div> */}
                        <div className="sm:col-span-2 mt-2.5">
                            <label
                                htmlFor="company"
                                className="block text-sm font-semibold leading-6 text-gray-900"
                            >
                                Địa chỉ
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    name="company"
                                    id="company"
                                    autoComplete="organization"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2 mt-2.5">
                            <label
                                htmlFor="region"
                                className="block text-sm font-semibold leading-6 text-gray-900"
                            >
                                Tỉnh/Thành Phố
                            </label>
                            <div className="mt-2.5">
                                <SelectProvince
                                    value={tinh}
                                    onChange={setTinh}
                                    type="text"
                                    name="region"
                                    id="region"
                                    autoComplete="address-level1"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2 mt-2.5">
                            <label
                                htmlFor="postal-code"
                                className="block text-sm font-semibold leading-6 text-gray-900"
                            >
                                Quận/Huyện
                            </label>
                            <div className="mt-2.5">
                                <SelectDistrict
                                    value={huyen}
                                    province={tinh}
                                    onChange={setHuyen}
                                    type="text"
                                    name="postal-code"
                                    id="postal-code"
                                    autoComplete="postal-code"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2 mt-2.5">
                            <label
                                htmlFor="phone-number"
                                className="block text-sm font-semibold leading-6 text-gray-900"
                            >
                                Số điện thoại
                            </label>
                            <div className="relative mt-2.5">
                                <input
                                    value={SDT}
                                    onChange={(e) => setSDT(e.target.value)}
                                    type="tel"
                                    name="phone-number"
                                    id="phone-number"
                                    autoComplete="tel"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="message"
                                className="block text-sm font-semibold leading-6 text-gray-900"
                            >
                                Ghi chú
                            </label>
                            <div className="mt-2.5">
                                <textarea
                                    value={ghichu}
                                    onChange={(e) => setGhichu(e.target.value)}
                                    name="message"
                                    id="message"
                                    rows={4}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    defaultValue={""}
                                    placeholder="Loại xe tải bạn cần..."
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-10">
                        <button
                            // type="submit"
                            onClick={(e) => hanldeSubmit(e)}
                            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Gửi ngay
                        </button>
                    </div>
                </form>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}
