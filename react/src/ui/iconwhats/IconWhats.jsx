import React from "react";

// style
// import "./IconWhats.scss";

// utils
import { phonenumber } from "../../utils/constants";

// assets
import imagewhatsapp from "../../assets/images/whatsapp/floating-whatsapp.gif";

function IconWhats() {
    return (
        <>
            <a
                href={`https://wa.me/+2${phonenumber}`}
                className="floating-whatsapp fixed bottom-32 right-10 cursor-pointer z-20"
                target="_blank"
                title="تواصل معنا عن طريق الواتساب"
            >
                <img
                    src={imagewhatsapp}
                    alt="تواصل معنا عن طريق الواتساب"
                    title="تواصل معنا عن طريق الواتساب"
                    width="50"
                    height="50"
                />
            </a>
        </>
    );
}

export default IconWhats;
