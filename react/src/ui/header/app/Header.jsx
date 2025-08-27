/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
    faAngleLeft,
    faBars,
    faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    ChevronDown,
    ChevronUp,
    LogIn,
    Menu,
    ShoppingCart,
    User,
    X,
} from "lucide-react";

// style
import "./Header.scss";

// data
import { menuLinks, dropMenuLinks } from "../../../data/data";

// store
import UserDataStore from "../../../store/UserDataStore";

// utils
import { App_Admin, nameMainColor } from "../../../utils/constants";

// component
// import Logo from "./Logo";

// assets
// import imagelogo from "../../../assets/images/logo/logo.svg";
import imagelogo from "../../../assets/images/logo/logo.png";
import imagefavicon from "../../../assets/images/logo/favicon.png";

function Header() {
    const navigate = useNavigate();
    let { userData } = UserDataStore();

    const dropdownRef = useRef(null);
    const [navbar, setNavbar] = useState(false);
    const [dropMenu, setDropMenu] = useState(false);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setDropMenu(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        // window.addEventListener("scroll", () => {
        //     setNavbar(false);
        // });
    }, []);

    return (
        <>
            <header
                className="header fixed top-0 left-0 w-full bg-white py-4 shadow-sm z-20"
                data-header
            >
                <div className="container content flex items-center justify-between gap-6 sm:px-10">
                    <Link to={`/`} href="#" className="logo max-h-40">
                        <img
                            src={imagefavicon}
                            // width="162"
                            // height="50"
                            alt="Riyadah"
                            loading="lazy"
                            className="max-h-20"
                        />
                    </Link>

                    <nav
                        className={` fixed top-0 -right-[320px] bg-white w-full max-w-[320px] lg:w-full lg:max-wf h-full z-[2]  overflow-y-auto 
                            ${
                                navbar
                                    ? "navbar active lg:all-unset -translate-x-[320px] transition-all duration-500 "
                                    : "navbar translate-x-[320px]"
                            }
                         `}
                        data-navbar
                    >
                        <div className="wrapper flex items-center justify-between gap-6 px-5 py-7 lg:hidden border-e border-gray-300">
                            <Link to={`/`} href="#" className="logo">
                                <img
                                    src={imagefavicon}
                                    // width="162"
                                    // height="50"
                                    alt="EduWeb logo"
                                    loading="lazy"
                                    className="max-h-20"
                                />
                            </Link>

                            <button
                                className="nav-close-btn relative text-black text-3xl p-3 rounded-full transition-all duration-500 bg-white border border-gray-100 hover:bg-blue-500 hover:text-white hover:border-gray-400"
                                aria-label="close menu"
                                onClick={() => {
                                    setNavbar(false);
                                    setDropMenu(false);
                                }}
                            >
                                <X />
                                {/* <ion-icon
                                    name="close-outline"
                                    aria-hidden="true"
                                ></ion-icon> */}
                            </button>
                        </div>

                        <ul className="navbar-list px-4 py-6 lg:flex lg:gap-6 lg:p-0">
                            {menuLinks?.length &&
                                menuLinks?.map((link, index) => (
                                    <li
                                        key={index}
                                        className="navbar-item border-b border-gray-300 lg:border-0"
                                    >
                                        <NavLink
                                            to={`${link?.to}`}
                                            // href="#home"
                                            className={`navbar-link py-8 font-bold text-4xl transition-all duration-500
                                                lg:text-black lg:py-10
                                            `}
                                            data-nav-link
                                            onClick={() => {
                                                setNavbar(false);
                                            }}
                                        >
                                            {link?.title}
                                        </NavLink>
                                    </li>
                                ))}
                            <li
                                className="navbar-item relative"
                                ref={dropdownRef}
                            >
                                <a
                                    // to={`${link?.to}`}
                                    // href="#home"
                                    className="navbar-link py-4 font-bold text-4xl transition-all duration-500
                                                lg:text-black lg:py-10 cursor-pointer flex items-center justify-between gap-2"
                                    data-nav-link
                                    onClick={() => {
                                        // setNavbar(false);
                                        setDropMenu(!dropMenu);
                                    }}
                                >
                                    <span>الاقسام</span>
                                    {dropMenu ? (
                                        <ChevronDown size={20} />
                                    ) : (
                                        <ChevronUp size={20} />
                                    )}
                                </a>

                                <div
                                    className={`
                                    relative lg:absolute top-0 lg:top-full left-0 lg:-left-full
                                    rounded-2xl overflow-hidden bg-white flex flex-col items-start justify-start z-50 
                                    gap-3 lg:shadow-lg  
                                    border border-gray-200
                                    ${
                                        dropMenu
                                            ? `dropdown__menu block visible`
                                            : `dropdown__menu hidden`
                                    }
                                    `}
                                    style={{
                                        // display: "none",
                                        // position: "absolute",
                                        // top: "100%",
                                        // left: "-100%",
                                        // background: "#121212",
                                        // borderRadius: "6px",
                                        minWidth: "160px",
                                        // overflow: "hidden",
                                    }}
                                >
                                    {dropMenuLinks?.length &&
                                        dropMenuLinks?.map((link, index) => (
                                            <Link
                                                to={`${link?.to}`}
                                                className={`text-2xl font-bold p-4 hover:text-white 
                                                hover:bg-blue-500 hover:duration-500 
                                                transition-all duration-500 w-full`}
                                                // href={link?.to}
                                                onClick={() => {
                                                    setNavbar(false);
                                                    setDropMenu(false);
                                                }}
                                                key={index}
                                            >
                                                {link?.title}
                                            </Link>
                                        ))}
                                </div>
                            </li>
                        </ul>
                    </nav>

                    <div className="header-actions flex justify-between items-center gap-4 ">
                        <button
                            className="header-action-btn flex items-center justify-center relative text-black text-3xl p-3 rounded-full transition-all duration-500 hover:bg-blue-500 hover:text-white"
                            aria-label="open menu"
                            data-nav-toggler
                            onClick={() => {
                                // setNavbar(true);
                                navigate(`/store`);
                            }}
                        >
                            <ShoppingCart size={24} />
                        </button>

                        {!userData?.id && (
                            <Link to={`/login`} href="#" className="btn ">
                                <span className="span hidden md:block">
                                    تسجيل
                                </span>

                                <LogIn size={18} />
                                {/* <ion-icon name="log-in-outline"></ion-icon> */}
                            </Link>
                        )}

                        {userData?.id && (
                            <button
                                className="header-action-btn flex items-center justify-center relative text-black text-3xl p-3 rounded-full transition-all duration-500 hover:bg-blue-500 hover:text-white"
                                aria-label="open menu"
                                data-nav-toggler
                                onClick={() => {
                                    setNavbar(true);
                                    navigate(`/${App_Admin}/home`);
                                }}
                            >
                                <User size={24} />
                            </button>
                        )}

                        <button
                            className="header-action-btn  flex items-center justify-center relative text-black text-3xl p-3 rounded-full transition-all duration-500 hover:bg-blue-500 hover:text-white lg:hidden"
                            aria-label="open menu"
                            data-nav-toggler
                            onClick={() => {
                                setNavbar(true);
                            }}
                        >
                            {/* <img
                                src={imagemenu}
                                alt=""
                                srcset=""
                                className="w-20 h-20"
                            /> */}

                            {/* <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                            >
                                <g
                                    fill="none"
                                    stroke="currentColor"
                                    strokeDasharray={16}
                                    strokeDashoffset={16}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                >
                                    <path d="M5 5h14">
                                        <animate
                                            fill="freeze"
                                            attributeName="stroke-dashoffset"
                                            dur="0.2s"
                                            values="16;0"
                                        ></animate>
                                    </path>
                                    <path d="M5 12h14">
                                        <animate
                                            fill="freeze"
                                            attributeName="stroke-dashoffset"
                                            begin="0.2s"
                                            dur="0.2s"
                                            values="16;0"
                                        ></animate>
                                    </path>
                                    <path d="M5 19h14">
                                        <animate
                                            fill="freeze"
                                            attributeName="stroke-dashoffset"
                                            begin="0.4s"
                                            dur="0.2s"
                                            values="16;0"
                                        ></animate>
                                    </path>
                                </g>
                            </svg> */}

                            <Menu size={24} />

                            {/* <Menu /> */}

                            {/* <ion-icon
                                name="menu-outline"
                                aria-hidden="true"
                            ></ion-icon> */}
                        </button>
                        {/* <img
                                src={imagemenu}
                                alt=""
                                srcset=""
                                className="w-20 h-20"
                            /> */}
                    </div>

                    <div
                        className={`fixed inset-0 bg-black/70 cursor-default opacity-0 z-[1] transition-all duration-500 lg:hidden  ${
                            navbar
                                ? "overlay active opacity-100 cursor-pointer"
                                : "overlay hidden"
                        } `}
                        onClick={() => {
                            setNavbar(false);
                        }}
                    ></div>
                </div>
            </header>
        </>
    );
}

export default Header;
