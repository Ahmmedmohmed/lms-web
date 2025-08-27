/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useNavigate } from "react-router-dom";

// style
import "./Landing.scss";

// component
import LoginModle from "../../pages/app/loginpage/LoginModle";

// ui form
import BtnRow from "../button/BtnRow";
import BtnLinkFull from "../button/BtnLinkFull";
import BtnLinkBorder from "../button/BtnLinkBorder";

// assets
import landingimage from "../../assets/images/landing/image-1.png";

function Landing() {
    const navigate = useNavigate();

    return (
        <>
            <div className="landing-page" id="landing">
                <div className="conatiner">
                    <div className="contents">
                        <div className="content" data-aos="fade-left">
                            <h1>
                                {`أكبر منصة تعليمية إفتراضية على`}
                                <span>{` مستوى مصر `}</span>
                            </h1>

                            <p>
                                {`أكاديمية شاملة تضم جميع المناهج الدراسية من
                                الإبتدائي و حتى المرحلة الجامعية. و هذا مايميز
                                أكاديمية مُعلم عن غيرها من الأكاديميات
                                الإفتراضية . ماذا تنتظر وفر الجهد و المال و قم
                                بحجز دروسك عبر أكاديمية أكاديمية مُعلم .`}
                            </p>

                            {/* <div className="btn">
                                <Link to={`/login`} href="#" id="login">
                                    تسجيل الدخول
                                </Link>

                                <Link to={`/signup`} href="subscribe.html">
                                    الاٍشتراك
                                </Link>
                            </div> */}
                            <BtnRow>
                                <BtnLinkFull
                                    onClick={() => {
                                        navigate(`/login`);
                                    }}
                                >
                                    {`تسجيل الدخول`}
                                </BtnLinkFull>

                                <BtnLinkBorder
                                    onClick={() => {
                                        navigate(`/signup`);
                                    }}
                                >
                                    {`الاٍشتراك`}
                                </BtnLinkBorder>
                            </BtnRow>
                        </div>

                        <LoginModle />

                        <div className="image" data-aos="fade-right">
                            <img
                                src={landingimage || "images/image-1.png"}
                                alt={`landing image`}
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Landing;
