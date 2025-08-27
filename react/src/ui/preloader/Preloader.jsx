import React, { useState, useEffect } from "react";

// assets
import favicon from "../../assets/images/logo/favicon.png";

const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // عند تحميل الصفحة بالكامل، نخفي الـ Preloader
        const handleLoad = () => setIsLoading(false);

        // إذا كانت الصفحة محملة بالفعل، نخفي الـ Preloader فورًا
        if (document.readyState === "complete") {
            setIsLoading(false);
        } else {
            window.addEventListener("load", handleLoad);
        }

        // تنظيف الـ event listener عند إزالة المكون
        return () => window.removeEventListener("load", handleLoad);
    }, []);

    return (
        <>
            <div
                className={`select-none fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-300 ${
                    isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
            >
                <img
                    src={favicon}
                    alt="Loading..."
                    className="w-[200px] h-[300px]"
                />
            </div>
        </>
    );
};

export default Preloader;
