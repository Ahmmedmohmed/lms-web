/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import {
    Facebook,
    Instagram,
    Linkedin,
    MailOpen,
    Phone,
    X,
    Youtube,
} from "lucide-react";

// style
import "./Footer.scss";

// data
import { menuLinks } from "../../data/data";

// utils
import { nameplatform } from "../../utils/constants";

// assets
// import imagelogo from "../../assets/images/logo/logo-light.svg";
import imagelogo from "../../assets/images/logo/logo.png";
import imagefavicon from "../../assets/images/logo/favicon.png";
import noimage from "../../assets/images/error/no-image.jpg";

function Footer() {
    return (
        <>
            <footer
                className={`footer mt-60 relative text-gray-50 text-2xl
                select-none
                `}
                // style="background-image: url('./assets/images/footer-bg.png')"
            >
                <div className="waves">
                    <div className="wave" id="wave1" />
                    <div className="wave" id="wave2" />
                    <div className="wave" id="wave3" />
                    <div className="wave" id="wave4" />
                </div>

                <div className="footer-top section">
                    <div className="container  grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-2">
                        <div className="footer-brand mb-20 lg:mb-0 flex items-center justify-center flex-col lg:justify-start lg:items-start">
                            <Link to={`/`} href="#" className="logo">
                                <img
                                    src={imagefavicon || noimage}
                                    // width="162"
                                    // height="50"
                                    alt="EduWeb logo"
                                    loading="lazy"
                                    onError={(e) => {
                                        e.target.src = noimage;
                                        e.target.onerror = null; // لمنع التكرار إذا فشلت الصورة الافتراضية
                                    }}
                                    className="max-h-64"
                                />
                            </Link>

                            <p className="footer-brand-text mt-8">
                                جميع الحقوق محفوظة لـ {nameplatform}
                            </p>

                            {/* <div className="wrapper">
                                <span className="span">Add:</span>

                                <address className="address">
                                    70-80 Upper St Norwich NR2
                                </address>
                            </div>

                            <div className="wrapper">
                                <span className="span">Call:</span>

                                <a
                                    href="tel:+011234567890"
                                    className="footer-link"
                                >
                                    +01 123 4567 890
                                </a>
                            </div>

                            <div className="wrapper">
                                <span className="span">Email:</span>

                                <a
                                    href="mailto:info@eduweb.com"
                                    className="footer-link"
                                >
                                    info@eduweb.com
                                </a>
                            </div> */}
                        </div>

                        <ul className="footer-list  mb-20 lg:mb-0  flex items-center justify-center flex-col lg:justify-start lg:items-start">
                            <li>
                                <p
                                    className={`footer-list-title text-white text-4xl font-bold mb-4`}
                                >
                                    {`
                                        الصفحات
                                    `}
                                </p>
                            </li>

                            <ul className="flex flex-row lg:flex-col flex-wrap gap-6 lg:gap-2 text-2xl font-bold">
                                {menuLinks?.length &&
                                    menuLinks?.map((link, index) => (
                                        <li key={index}>
                                            <Link
                                                to={`${link?.to}`}
                                                href="#"
                                                className={`footer-link transition-all duration-500 py-2
                                                hover:text-blue-500    
                                                `}
                                            >
                                                {link?.title}
                                            </Link>
                                        </li>
                                    ))}
                            </ul>
                        </ul>

                        {/*  <ul className="footer-list">
                            <li>
                                <p className="footer-list-title">
                                    {`
                                        روابط سريعة
                                    `}
                                </p>
                            </li>

                            <li>
                                <Link
                                    to={`/termsandconditions`}
                                    href="#"
                                    className="footer-link"
                                >
                                    {`
                                        الاحكام والشروط
                                    `}
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to={`/deliverypolicy`}
                                    href="#"
                                    className="footer-link"
                                >
                                    {`
                                    سياسة التوصيل
                                    `}
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to={`/refundpolicy`}
                                    href="#"
                                    className="footer-link"
                                >
                                    {`
                                    سياسة استرداد الأموال
                                    `}
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to={`/privacypolicy`}
                                    href="#"
                                    className="footer-link"
                                >
                                    {`
                                    سياسة الخصوصية
                                    `}
                                </Link>
                            </li>
                        </ul> */}

                        <div className="footer-list text-left flex items-center justify-center flex-col lg:justify-end lg:items-end">
                            <p className="footer-list-title text-white text-4xl font-bold mb-4">
                                {`                       
                                    وسائل التواصل
                                `}
                            </p>

                            <div className="flex flex-col gap-4 mt-4">
                                <div className="wrapper flex items-center justify-end gap-4 py-2  ">
                                    <a
                                        href="tel:+201201234567"
                                        className="footer-link transition-all duration-500 hover:text-blue-500 hover:transition-all hover:duration-500"
                                    >
                                        01201234567
                                    </a>

                                    <span className="span font-bold ">
                                        <Phone className="text-blue-500" />
                                        {/* <ion-icon name="call-outline"></ion-icon> */}
                                    </span>
                                </div>

                                <div className="wrapper flex items-center justify-end gap-4 py-2">
                                    <a
                                        href="tel:+96605600000000"
                                        className="footer-link transition-all duration-500 hover:text-blue-500 hover:transition-all hover:duration-500"
                                    >
                                        05600000000
                                    </a>

                                    <span className="span font-bold">
                                        <Phone className="text-blue-500" />
                                        {/* <ion-icon name="call-outline"></ion-icon> */}
                                    </span>
                                </div>

                                <div className="wrapper flex items-center justify-end gap-4 py-2">
                                    <a
                                        href="mailto:alfateh@gmail.com"
                                        className="footer-link transition-all duration-500 hover:text-blue-500 hover:transition-all hover:duration-500"
                                    >
                                        alfateh@gmail.com
                                    </a>

                                    <span className="span  font-bold">
                                        <MailOpen className="text-blue-500" />
                                        {/* <ion-icon name="mail-open-outline"></ion-icon> */}
                                    </span>
                                </div>
                            </div>

                            <ul className="social-list flex flex-wrap justify-end gap-4 mt-8">
                                <li>
                                    <a
                                        href="#"
                                        target="_blank"
                                        className="social-link p-4 transition-all duration-500 rounded-full
                                        hover:bg-blue-500 hover:text-white
                                        "
                                    >
                                        <Facebook />
                                        {/* <ion-icon name="logo-facebook"></ion-icon> */}
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#"
                                        target="_blank"
                                        className="social-link p-4 transition-all duration-500 rounded-full
                                        hover:bg-blue-500 hover:text-white
                                        "
                                    >
                                        <Linkedin />
                                        {/* <ion-icon name="logo-linkedin"></ion-icon> */}
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#"
                                        target="_blank"
                                        className="social-link p-4 transition-all duration-500 rounded-full
                                        hover:bg-blue-500 hover:text-white
                                        "
                                    >
                                        <Instagram />
                                        {/* <ion-icon name="logo-instagram"></ion-icon> */}
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#"
                                        target="_blank"
                                        className="social-link p-4 transition-all duration-500 rounded-full
                                        hover:bg-blue-500 hover:text-white
                                        "
                                    >
                                        <X />
                                        {/* <ion-icon name="logo-twitter"></ion-icon> */}
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#"
                                        target="_blank"
                                        className="social-link p-4 transition-all duration-500 rounded-full
                                        hover:bg-blue-500 hover:text-white
                                        "
                                    >
                                        <Youtube />
                                        {/* <ion-icon name="logo-youtube"></ion-icon> */}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div
                    className="footer-bottom select-none
                py-10 border-t border-gray-400
                "
                >
                    <div className="container">
                        <p className="copyright text-center flex items-center justify-center gap-4">
                            <span className="mx-2">تصميم و تطوير شركة</span>

                            <a
                                // href="#"
                                // target="_blank"
                                className="copyright-link cursor-pointer text-blue-500"
                            >
                                {` <CodeNet> `}
                            </a>

                            <span className="year">
                                {new Date().getFullYear()}
                            </span>

                            {/* <span>Copyright</span>
                            <span className="year">
                                {new Date().getFullYear()}
                            </span>
                            <span>All Rights Reserved by</span>
                            <a href="#" className="copyright-link">
                                Mazen Saad
                            </a> */}
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
