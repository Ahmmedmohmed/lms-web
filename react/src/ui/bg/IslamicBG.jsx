import React from "react";

// style
import "./IslamicBG.scss";

// assets
import bg1 from "../../assets/images/bg/bg.png";
import bg2 from "../../assets/images/bg/bg2.png";

function IslamicBG() {
    return (
        <>
            <div
                className={`islamic_bg absolute
                top-0 left-0 w-full h-full max-h-full max-w-full
                bg-[#db9f3097] overflow-hidden opacity-60
                `}
            >
                <div className="header_bg-one">
                    <img src={bg1} alt="" />
                </div>

                <div className="header_bg-two">
                    <img src={bg2} alt="" />
                </div>
            </div>
        </>
    );
}

export default IslamicBG;
