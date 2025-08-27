/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

// style
// import "./ScrollToTopButton.scss";

// context
import { useDarkMode } from "../../contexts/DarkModeContext";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { isDarkMode } = useDarkMode();

    // وظيفة للتحقق من موضع التمرير
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // وظيفة للتمرير إلى الأعلى
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // تمرير سلس
        });
    };

    // استمع لحدث التمرير
    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        <>
            {/* <div className="fixed bottom-20 right-6 z-50"> */}
            {isVisible && (
                <button
                    onClick={() => {
                        scrollToTop();
                    }}
                    className={`
                        fixed bottom-10 right-10 bg-blue-500 text-white p-3 rounded-full  
                        transition-all duration-500 z-20
                        ${
                            isVisible
                                ? " opacity-100 cursor-pointer"
                                : " opacity-0 cursor-default"
                            // ? "back-top-btn btn  has-before active opacity-100 pointer-events-auto"
                            // : "back-top-btn btn has-before opacity-0"
                        }
                    `}
                    aria-label="back top top"
                    data-back-top-btn
                >
                    {/* <svg
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        fill="none"
                    >
                        <style
                            dangerouslySetInnerHTML={{
                                __html: "@keyframes slide-20{to{transform:translateY(-2px)}}",
                            }}
                        />
                        <path
                            fill="#0A0A30"
                            d="M18.215 13.484a.857.857 0 11-1.098 1.317l-4.594-3.828L7.93 14.8a.857.857 0 11-1.097-1.317l5.131-4.276a.854.854 0 011.12 0l5.132 4.276z"
                            style={{
                                animation:
                                    "slide-20 1s infinite alternate both cubic-bezier(1,-.01,0,.98)",
                            }}
                        />
                    </svg> */}

                    <ChevronUp size={30} />
                    {/* <ion-icon name="chevron-up" aria-hidden="true"></ion-icon> */}
                </button>
            )}
            {/* </div> */}
        </>
    );
};

export default ScrollToTopButton;
