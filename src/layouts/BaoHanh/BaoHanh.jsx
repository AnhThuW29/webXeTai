const features = [
    {
        name: "Bảo hành",
        description: "Chính sách bảo hành. Bảo hành điện tử.",
    },
    {
        name: "Chiến dịch khuyến mãi ",
        description: "Service Clinic",
    },
    {
        name: "Bảo dưỡng định kì & sửa chữa",
        description: "Bảo dưỡng định kì. Sửa chữa chung & đồng sơn",
    },
    {
        name: "Hướng dẫn khách hàng tự chăm sóc xe",
        description: "Do It Yourself",
    },
    {
        name: "Phụ tùng & phụ kiện chính hãng",
        description:
            "Đảm bảo được sự vừa vặn, độ bền và tính năng vận hành tốt nhất.",
    },
    {
        name: "Bảo hiểm liên kết",
        description: "Bảo hiểm TNDS. Bảo hiểm thân xe",
    },
];

export default function BaoHanh() {
    return (
        <div className="bg-white">
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Chương trình dịch vụ
                    </h2>
                    <p className="mt-4 text-gray-500">
                        "Before service" là một chương trình dịch vụ đặc trưng
                        của Hyundai, được triển khai tại tất cả các Đại lý
                        Hyundai trên toàn cầu. Mục đích của chương trình là chủ
                        động tổ chức các hoạt động chăm sóc xe nhằm ngăn chặn
                        mọi sự cố khi vận hành, tạo sự hài lòng cao nhất cho
                        khách hàng sử dụng xe Hyundai. Qua đó, góp phần xây dựng
                        văn hóa lái xe an toàn và thú vị.
                    </p>

                    <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                        {features.map((feature) => (
                            <div
                                key={feature.name}
                                className="border-t border-gray-200 pt-4"
                            >
                                <dt className="font-medium text-gray-900">
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-sm text-gray-500">
                                    {feature.description}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                    <img
                        src="https://hyundaiquocviet.com/wp-content/uploads/2022/05/home1.png"
                        alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                        className="rounded-lg bg-gray-100"
                    />
                    <img
                        src="https://hyundaiquocviet.com/wp-content/uploads/2022/05/maxresdefault-e1653290591822.jpg"
                        alt="Top down view of walnut card tray with embedded magnets and card groove."
                        className="rounded-lg bg-gray-100"
                    />
                    <img
                        src="https://hyundaiquocviet.com/wp-content/uploads/2022/05/bao-duong-xe-tai-hyundai-1-1.jpg"
                        alt="Side of walnut card tray with card groove and recessed card area."
                        className="rounded-lg bg-gray-100"
                    />
                    <img
                        src="https://hyundaiquocviet.com/wp-content/uploads/2022/05/a38fd972726db333ea7c.jpg"
                        alt="Walnut card tray filled with cards and card angled in dedicated groove."
                        className="rounded-lg bg-gray-100"
                    />
                </div>
            </div>
        </div>
    );
}
