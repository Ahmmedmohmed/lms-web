/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    Ampersand,
    BadgeHelp,
    BookCheck,
    BookOpen,
    ClipboardList,
    Clock3,
    FileQuestion,
    Home,
    Images,
    Languages,
    Layers2,
    LayoutDashboard,
    LibraryBig,
    MonitorStop,
    NotebookPen,
    NotebookText,
    Package,
    Radio,
    Route,
    School,
    Send,
    ShieldUser,
    Star,
    TableOfContents,
    TicketPercent,
    User,
    UserCog,
    UserRoundPen,
    X,
    Youtube,
} from "lucide-react";
import { FaUserEdit, FaUserGraduate, FaUserTie } from "react-icons/fa";

// Uitls
import { App_Admin, nameplatform } from "../../../utils/constants";

// Component
import NavLinkAdmin from "./NavLinkAdmin";

// assets
// import imagelogo from "../../../assets/images/logo/logo.svg";
import imagelogo from "../../../assets/images/logo/logo.png";
import imagefavicon from "../../../assets/images/logo/favicon.png";

function SidebarAdmin({ isOpen, toggleSidebar }) {
    const navigate = useNavigate();

    const navLinks = [
        {
            to: `/${App_Admin}/home`,
            icon: <Home size={20} />,
            label: "الرئيسية",
        },
        {
            to: `/${App_Admin}/dashboard`,
            icon: <LayoutDashboard size={20} />,
            label: "لوحة التحكم",
        },
        // {
        //     to: `/${App_Admin}/categories`,
        //     icon: <Layers2 size={20} />,
        //     label: "التصنيفات",
        // },
        {
            to: `/${App_Admin}/sections`,
            icon: <TableOfContents size={20} />,
            label: "أقسام الدورات",
        },
        {
            to: `/${App_Admin}/courses`,
            icon: <BookOpen size={20} />,
            label: "الدورات",
        },
        {
            to: `/${App_Admin}/coursesislive`,
            icon: <Radio size={20} />,
            label: "الدورات المباشرة",
        },
        {
            to: `/${App_Admin}/packages`,
            icon: <Package size={20} />,
            label: "الباقات",
        },
        {
            to: `/${App_Admin}/sectionsbooks`,
            icon: <LibraryBig size={20} />,
            label: "أقسام الكتب",
        },
        {
            to: `/${App_Admin}/books`,
            icon: <BookCheck size={20} />,
            label: "الكتب",
        },
        {
            to: `/${App_Admin}/powerpoints`,
            icon: <Images size={20} />,
            label: "باور بوينت",
        },
        {
            to: `/${App_Admin}/powerpointservices`,
            icon: <MonitorStop size={20} />,
            label: "طلبات بوربوينت",
        },
        {
            to: `/${App_Admin}/proofreadingservices`,
            icon: <Languages size={20} />,
            label: "التدقيق اللغوي",
        },
        {
            to: `/${App_Admin}/sectionsblogs`,
            icon: <NotebookText size={20} />,
            label: "أقسام المقالات",
        },
        {
            to: `/${App_Admin}/blogs`,
            icon: <NotebookPen size={20} />,
            label: "المقالات",
        },
        {
            to: `/${App_Admin}/youTubesuggestions`,
            icon: <Youtube size={20} />,
            label: "اقتراحات اليوتيوب",
        },
        {
            to: `/${App_Admin}/famoussayings`,
            icon: <Ampersand size={20} />,
            label: "أقوال مأثورة",
        },
        // {
        //     to: `/${App_Admin}/quranschool`,
        //     icon: <School size={20} />,
        //     label: "مدرسة القران",
        // },
        {
            to: `/${App_Admin}/quranpaths`,
            icon: <Route size={20} />,
            label: "مسارات القران",
        },
        // {
        //     to: `/${App_Admin}/quranpaths`,
        //     icon: <Route size={20} />,
        //     label: "مسارات القران",
        // },
        {
            to: `/${App_Admin}/interviewdates`,
            icon: <Clock3 size={20} />,
            label: "مواعيد المقابلات",
        },
        // {
        //     to: `/${App_Admin}/coupons`,
        //     icon: <TicketPercent size={20} />,
        //     label: "الكوبونات",
        // },
        // {
        //     to: `/${App_Admin}/questions-banks`,
        //     icon: <FileQuestion size={20} />,
        //     label: "الاختبارات",
        // },
        // {
        //     to: `/${App_Admin}/test-results`,
        //     icon: <ClipboardList size={20} />,
        //     label: "نتيجة الاختبارات",
        // },
        {
            to: `/${App_Admin}/account`,
            icon: <User size={20} />,
            label: "الحساب",
        },
        {
            to: `/${App_Admin}/profile`,
            icon: <UserCog size={20} />,
            label: "الملف الشخصي",
        },
        {
            to: `/${App_Admin}/admins`,
            icon: <ShieldUser size={20} />,
            label: "المسؤلين",
        },
        // {
        //     to: `/${App_Admin}/teachers`,
        //     icon: <FaUserTie size={20} />,
        //     label: "المدرسين",
        // },
        // {
        //     to: `/${App_Admin}/staffs`,
        //     icon: <UserRoundPen size={20} />,
        //     label: "المساعدين",
        // },
        {
            to: `/${App_Admin}/students`,
            icon: <FaUserGraduate size={20} />,
            label: "الطلاب",
        },
        {
            to: `/${App_Admin}/review`,
            icon: <Star size={20} />,
            label: "تقييم",
        },
        {
            to: `/${App_Admin}/contact`,
            icon: <Send size={20} />,
            label: "تواصل",
        },
        {
            to: `/${App_Admin}/help`,
            icon: <BadgeHelp size={20} />,
            label: "مساعدة",
        },
    ];

    return (
        <>
            {/* Overlay for mobile */}
            {isOpen && (
                <div
                    // className="fixed inset-0 bg-black bg-opacity-50  z-20 lg:hidden"
                    className="fixed inset-0 bg-black/50 z-20 lg:hidden cursor-pointer"
                    onClick={() => {
                        toggleSidebar();
                    }}
                />
            )}

            {/* Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full bg-white shadow-lg z-30 transition-all duration-300 ease-in-out transform lg:translate-x-0 overflow-y-auto 
                            ${
                                isOpen
                                    ? "translate-x-0 w-64"
                                    : "translate-x-full w-0 lg:w-64"
                            }`}
                style={{ backgroundColor: "#c99739" }}
                // style={{ backgroundColor: "#faa727" }}

                // #ffa42
                // #E97D0E
                // #faa727
                // #c79b55
                // #44848c
            >
                <div className="flex flex-col h-full">
                    <div className="px-4 py-5 border-b border-gray-100">
                        <h1
                            className="text-xl font-bold text-start lg:text-center text-white cursor-pointer transition-all duration-500 hover:text-blue-600 hover:transition-all hover:duration-500"
                            onClick={() => {
                                navigate(`/`);
                            }}
                        >
                            {nameplatform}
                        </h1>
                    </div>

                    <button
                        className="lg:hidden absolute top-4 left-4 p-1 rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100"
                        onClick={() => {
                            toggleSidebar();
                        }}
                    >
                        <X size={20} />
                    </button>

                    <nav className="flex-1 p-4">
                        <ul
                            className="space-y-2 flex flex-col gap-2"
                            onClick={() => {
                                toggleSidebar();
                            }}
                        >
                            {navLinks?.map((link, index) => (
                                <NavLinkAdmin
                                    key={index}
                                    to={link?.to}
                                    icon={link?.icon}
                                    label={link?.label}
                                />
                            ))}
                        </ul>
                    </nav>

                    <div
                        className="p-4 border-t border-gray-100 flex flex-col gap-4"
                        onClick={() => {
                            navigate(`/`);
                        }}
                    >
                        <div className="flex items-center justify-center">
                            <Link to={`/`} href="#" className="logo max-h-40 cursor-pointer">
                                <img
                                    src={imagefavicon}
                                    // width="162"
                                    // height="50"
                                    alt="Riyadah"
                                    loading="lazy"
                                    className="max-h-28"
                                />
                            </Link>
                        </div>

                        <div className="text-md text-white text-center select-none">
                            {nameplatform} {new Date().getFullYear()} ©
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SidebarAdmin;
