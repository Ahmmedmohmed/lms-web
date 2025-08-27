/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { createContext, useEffect, useState } from "react";

const AppMenuContext = createContext();

function AppMenuProviderUser({ children }) {
    const [navMenu, setNavMenu] = useState(false);
    const [navMenuChild, setNavMenuChild] = useState(true);

    // useEffect(() => {
    //     window.addEventListener("scroll", () => {
    //         setNavMenu(false);
    //     });
    // }, []);

    useEffect(() => {
        document.querySelector(".AppMain").addEventListener("scroll", () => {
            setNavMenu(false);
        });
    }, []);

    // useEffect(() => {
    //     const mainElement = mainRef.current;

    //     if (mainElement) {
    //         const handleScroll = () => {
    //             setNavMenu(false);
    //             console.log("Scrolling detected, closing sidebar");
    //         };
    //         mainElement.addEventListener("scroll", handleScroll);

    //         return () => {
    //             mainElement.removeEventListener("scroll", handleScroll);
    //         };
    //     }
    // }, [mainRef]);

    return (
        <AppMenuContext.Provider
            value={{
                navMenu,
                setNavMenu,
                navMenuChild,
                setNavMenuChild,
            }}
        >
            {children}
        </AppMenuContext.Provider>
    );
}

function useAppMenuUser() {
    const context = useContext(AppMenuContext);
    if (context === undefined)
        throw new Error(`AppMenuContext was used outside of AppMenuProvider`);

    return context;
}

export { AppMenuProviderUser, useAppMenuUser };
