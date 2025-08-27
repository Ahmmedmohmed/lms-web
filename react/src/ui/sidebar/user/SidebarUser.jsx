/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    BadgeHelp,
    BookOpen,
    ClipboardList,
    Heart,
    Home,
    Images,
    Languages,
    LayoutDashboard,
    MonitorStop,
    Package,
    Route,
    Send,
    Star,
    User,
    UserCog,
    X,
} from "lucide-react";

// Uitls
import { App_User, nameplatform } from "../../../utils/constants";

// Component
import NavLinkUser from "./NavLinkUser";

// assets
// import imagelogo from "../../../assets/images/logo/logo.svg";
import imagelogo from "../../../assets/images/logo/logo.png";
import imagefavicon from "../../../assets/images/logo/favicon.png";

function SidebarUser({ isOpen, toggleSidebar }) {
    const navigate = useNavigate();

    const navLinks = [
        {
            to: `/${App_User}/home`,
            icon: <Home size={20} />,
            label: "الرئيسية",
        },

        {
            to: `/${App_User}/dashboard`,
            icon: <LayoutDashboard size={20} />,
            label: "لوحة التحكم",
        },

        {
            to: `/${App_User}/courses`,
            icon: <BookOpen size={20} />,
            label: "الدورات",
        },
        {
            to: `/${App_User}/favoritecourses`,
            icon: <Heart size={20} />,
            label: "الدورات المفضلة",
        },
        {
            to: `/${App_User}/packages`,
            icon: <Package size={20} />,
            label: "الباقات",
        },

        {
            to: `/${App_User}/quranschools`,
            icon: <Route size={20} />,
            label: "مدرسة القران",
        },

        {
            to: `/${App_User}/powerpoints`,
            icon: <Images size={20} />,
            label: "ملفات البوربوينت",
        },
        {
            to: `/${App_User}/powerpointservices`,
            icon: <MonitorStop size={20} />,
            label: "طلب بوربوينت",
        },
        {
            to: `/${App_User}/proofreadingservices`,
            icon: <Languages size={20} />,
            label: "التدقيق اللغوي",
        },

        // {
        //     to: `/${App_User}/test-results`,
        //     icon: <ClipboardList size={20} />,
        //     label: "نتيجة الاختبارات",
        // },
        {
            to: `/${App_User}/account`,
            icon: <User size={20} />,
            label: "الحساب",
        },
        {
            to: `/${App_User}/profile`,
            icon: <UserCog size={20} />,
            label: "الملف الشخصي",
        },

        {
            to: `/${App_User}/review`,
            icon: <Star size={20} />,
            label: "تقييم",
        },
        {
            to: `/${App_User}/contact`,
            icon: <Send size={20} />,
            label: "تواصل",
        },
        {
            to: `/${App_User}/help`,
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
                className={`fixed top-0 right-0 h-full bg-white shadow-lg z-30 
                transition-all duration-300 ease-in-out transform 
                lg:translate-x-0 overflow-y-auto 
                ${
                    isOpen
                        ? "translate-x-0 w-64"
                        : "translate-x-full w-0 lg:w-64"
                }
                `}
                // style={{ backgroundColor: "#faa727" }}
                style={{ backgroundColor: "#c99739" }}
            >
                <div className="flex flex-col h-full">
                    <div className="p-4 py-5 border-b border-gray-100">
                        <h1
                            className="text-xl font-bold  text-start lg:text-center text-white cursor-pointer transition-all duration-500 hover:text-blue-600"
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
                                <NavLinkUser
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
                            <Link to={`/`} href="#" className="logo max-h-40">
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

                        <div className="text-sm text-white text-center">
                            {nameplatform} {new Date().getFullYear()} ©
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SidebarUser;
