import { postcss } from "autoprefixer";
import kmdv from "../../images/kmdv.jpg";
import kmle from "../../images/kmle.jpg";
import kmt4 from "../../images/kmt4.jpg";

const posts = [
    {
        id: 1,
        title: "Tuần lễ vàng 30/4",
        href: "#",
        description:
            "Khuyến mãi TẶNG THÊM 1 CHỈ VÀNG khi mua xe trong tuần lễ vàng (28/4 - 5/5) Quý khách liên hệ ngay Hotline 0911 847 860 hoặc Tư vấn bán hàng của Hyundai Quốc Việt để được tư vấn và hỗ trợ nhanh nhất.",
        date: "25 Tháng 04, 2023",
        datetime: "2023-04-25",
        category: { title: "Marketing", href: "#" },
        author: {
            name: "Michael Foster",
            role: "Co-Founder / CTO",
            href: "#",
            kmdv: kmle,
        },
    },
    {
        id: 1,
        title: "Chương trình khuyến mãi tháng 4",
        href: "#",
        description:
            "KHUYẾN MÃI THÁNG 4: Siêu khuyến mãi trong dịp tháng 4 này với: KHUYẾN MÃI 100% LỆ PHÍ TRƯỚC BẠ. Áp dụng từ 01/04 - 30/4/2023 khi mua xe EX GT Tại Đại lý Hyundai Quốc Việt - HOTLINE: 0949 243 888",
        date: "25 Tháng 04, 2023",
        datetime: "2023-04-25",
        category: { title: "Marketing", href: "#" },
        author: {
            name: "Michael Foster",
            role: "Co-Founder / CTO",
            href: "#",
            kmdv: kmt4,
        },
    },
    {
        id: 1,
        title: "Khuyến mãi dịch vụ mùa xuân",
        href: "#",
        description:
            "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
        date: "25 Tháng 04, 2023",
        datetime: "2023-04-25",
        category: { title: "Marketing", href: "#" },
        author: {
            name: "Michael Foster",
            role: "Co-Founder / CTO",
            href: "#",
            kmdv,
        },
    },
];

export default function Post() {
    return (
        <div className="bg-blue-200 py-24 sm:py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Tin tức
                    </h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Cập nhật tin tức mới nhất về các chương trình khuyến mãi
                        của Hyundai Quốc Việt.
                    </p>
                </div>
                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-800 pt-10 sm:mt-16 sm:pt-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post) => (
                        <article
                            key={post.id}
                            className="flex max-w-xl flex-col items-start justify-between"
                        >
                            <div className="relative flex items-center gap-x-4">
                                <img
                                    src={post.author.kmdv}
                                    className="h-full w-full object-cover object-center mt-6"
                                />
                            </div>
                            <div className="group relative">
                                <h3 className="mt-8 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                    <a href={post.href}>
                                        <span className="absolute inset-0" />
                                        {post.title}
                                    </a>
                                </h3>
                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                                    {post.description}
                                </p>
                            </div>
                            <div className="flex items-center gap-x-4 text-xs">
                                <time
                                    dateTime={post.datetime}
                                    className="text-gray-500"
                                >
                                    {post.date}
                                </time>
                                <a
                                    href={post.category.href}
                                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                >
                                    {post.category.title}
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
