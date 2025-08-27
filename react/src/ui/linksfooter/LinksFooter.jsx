import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
    faFacebook,
    faInstagram,
    faXTwitter,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
    faAnglesLeft,
    faClock,
    faEnvelope,
    faGraduationCap,
    faLocationDot,
    faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";

// style
import "./LinksFooter.scss";

function LinksFooter() {
    const menuLinks = [
        { title: "الرئيسية", to: "/" },
        { title: "الدروس", to: "/material" },
        { title: "التدريس عن بعد", to: "/online" },
        { title: "لماذا نحن ؟", to: "/whyus" },
        { title: "كيف يعمل ؟", to: "/work" },
        { title: "أساتذتنا", to: "/teachers" },
        { title: "أراء طلابنا", to: "/testimonial" },
    ];

    return (
        <>
            <div className="links-footer">
                <div className="container">
                    <div className="content" data-aos="fade-down">
                        <div className="box" data-aos="fade-down">
                            <div className="logo">
                                <div className="icon-logo">
                                    <FontAwesomeIcon icon={faGraduationCap} />
                                </div>

                                <a href="#">
                                    <span>أكا</span>ديمية <span>مُع</span>لم
                                </a>
                            </div>

                            <p className="parag">
                                {`تسعى أكاديمية مُعلم إلى تغيير مفهوم التعليم
                                الإفتراضي بشكل عام و ذلك من خلال تقديم الأفضل في
                                مجال التعليم الإفتراضي بتقديم أفضل الدروس من طرف
                                أفضل الأساتذة.`}
                            </p>

                            <div className="terms">
                                <h3 className="title">اتفاقيات الإستخدام :</h3>

                                <ul>
                                    <a href="#">الخصوصية</a>
                                    <a href="#">شروط الإستخدام</a>
                                </ul>
                            </div>
                        </div>

                        <div className="box" data-aos="fade-down">
                            <h3 className="title">خريطة الموقع : </h3>

                            <ul>
                                {menuLinks &&
                                    menuLinks?.map((link, index) => (
                                        <li key={index}>
                                            <FontAwesomeIcon
                                                icon={faAnglesLeft}
                                            />
                                            <Link
                                                to={link?.to}
                                                href="#landing"
                                                // className="active"
                                            >
                                                {link?.title}
                                            </Link>
                                        </li>
                                    ))}

                                {/* 
                                <li>
                                    <FontAwesomeIcon icon={faAnglesLeft} />
                                    <a href="cours.html">الدروس</a>
                                </li>

                                <li>
                                    <FontAwesomeIcon icon={faAnglesLeft} />
                                    <a href="#online">التدريس عن بعد</a>
                                </li>

                                <li>
                                    <FontAwesomeIcon icon={faAnglesLeft} />
                                    <a href="#why-us">لماذا نحن ؟</a>
                                </li>

                                <li>
                                    <FontAwesomeIcon icon={faAnglesLeft} />
                                    <a href="#works">كيف يعمل ؟</a>
                                </li>

                                <li>
                                    <FontAwesomeIcon icon={faAnglesLeft} />
                                    <a href="#teachers">أساتذتنا</a>
                                </li>

                                <li>
                                    <FontAwesomeIcon icon={faAnglesLeft} />
                                    <a href="#testimonial">أراء طلابنا</a>
                                </li> */}
                            </ul>
                        </div>

                        <div className="box twasal" data-aos="fade-down">
                            <h3 className="title">تواصل معنا :</h3>

                            <div className="contac">
                                <FontAwesomeIcon
                                    icon={faLocationDot}
                                    className="fa-fw"
                                />
                                <p>مصر</p>
                            </div>

                            <div className="contac">
                                <FontAwesomeIcon
                                    icon={faClock}
                                    className="fa-fw"
                                />
                                <p>أوقات العمل : كل يوم / 24 ساعة</p>
                            </div>

                            <div className="contac">
                                <FontAwesomeIcon
                                    icon={faPhoneVolume}
                                    className="fa-fw"
                                />
                                <a href="tel:01012312345">+201012312345</a>
                            </div>

                            <div className="contac">
                                <FontAwesomeIcon icon={faEnvelope} />
                                <a href="mailto:mazen7saad@gmail.com">
                                    mazen7saad@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="copy-right" data-aos="fade-down">
                        <div className="right">
                            <div className="rightpargraph">
                                <p>
                                    <span>{` أكاديمية مُعلم `}</span>

                                    {` جميع الحقوق محفوظة ل `}

                                    <span>{` محمد العمري `}</span>
                                </p>

                                <p>© {new Date().getFullYear()}</p>
                            </div>
                        </div>

                        <div className="Social">
                            <h3 className="title-main">تابع أكاديمية مُعلم</h3>
                            <div className="social-media">
                                <FontAwesomeIcon icon={faFacebook} />
                                <FontAwesomeIcon icon={faInstagram} />
                                <FontAwesomeIcon icon={faYoutube} />
                                <FontAwesomeIcon icon={faXTwitter} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LinksFooter;
