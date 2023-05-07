import React, { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

import { dataSidebar } from "../../Data/dataSidebar.js";

const navigation = [
    { name: "Trang chủ", href: "#", current: true },
    { name: "Sản phẩm", href: "#", current: false },
    { name: "Dịch vụ", href: "#", current: false },
    { name: "Chăm sóc khách hàng", href: "#", current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Example() {
    const [selected, setSelected] = useState(0);
    const [expanded, setExpaned] = useState(true);
    const userData = JSON.parse(localStorage.getItem("userData"));
    return (
        <Disclosure as="nav" className="bg-blue-200">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Menu</span>
                                    {open ? (
                                        <XMarkIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <Bars3Icon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <img
                                        className="block h-8 w-auto lg:hidden"
                                        src="https://hyundaiquocviet.com/wp-content/uploads/2022/05/hyundai-logo.png"
                                        alt="Your Company"
                                    />
                                    <img
                                        className="hidden h-8 w-auto lg:block"
                                        src="https://hyundaiquocviet.com/wp-content/uploads/2022/05/hyundai-logo.png"
                                        alt="Your Company"
                                    />
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {dataSidebar.map((item, index) => {
                                            return (
                                                <div
                                                    class="text-gray-900 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-md font-medium"
                                                    aria-current="page"
                                                    style={{ marginLeft: 0 }}
                                                    key={index}
                                                    onClick={() =>
                                                        setSelected(index)
                                                    }
                                                >
                                                    <Link
                                                        to={item.route}
                                                        style={{
                                                            textDecoration:
                                                                "none",
                                                        }}
                                                        // className="menuItem active"
                                                    >
                                                        {/* <item.icon /> */}
                                                        <span>
                                                            {item.heading}
                                                        </span>
                                                    </Link>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                {/* <button
                                    type="button"
                                    className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                >
                                    <span className="sr-only">Thông báo</span>
                                    <BellIcon
                                        className="h-6 w-6"
                                        aria-hidden="true"
                                    />
                                </button> */}
                            </div>
                            <div className="space-y-1 px-2 pb-3 pt-2">
                                <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                                    HYUNDAI QUỐC VIỆT
                                </h2>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </Disclosure>
    );
}
