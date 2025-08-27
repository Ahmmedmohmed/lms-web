/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, Bell, User, Moon, Sun, LogOut } from "lucide-react";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";

// API
// import { userLogout } from "../../../api/user/authUser";
import { userPublicLogout } from "../../../api/public/authPublic";

// Plugin
import Toast from "../../../plugin/Toast";

// Context
import { useDarkMode } from "../../../contexts/DarkModeContext";

// Utils
import {
    App_User,
    nameMainColor,
    nameplatform,
} from "../../../utils/constants";

// ui
import SpinnerMini from "../../spinner/SpinnerMini";

function HeaderUser({ toggleSidebar }) {
    const navigate = useNavigate();

    //
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    //
    const [isLoading, setIsLoading] = useState(false);
    const [errorsMessage, setErrorsMessage] = useState("");
    let refresh_token = Cookies.get("refresh_token");

    const {
        register,
        getValues,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    // console.log(`ee`, refresh_token);

    const handleLogout = async () => {
        try {
            setIsLoading(true);

            if (errors?.root) {
                return;
            }

            const { data, error } = await userPublicLogout(refresh_token);

            // console.log(`error`, error);
            // console.log(`data`, data);

            if (error) {
                if (error?.message) {
                    setErrorsMessage(error?.message);
                    Toast("error", `${error?.message}.`);
                    setIsLoading(false);
                    navigate(`/login`);
                }
            } else {
                setIsLoading(true);
                // Toast("success", `${data?.message || "Logout Successfully."}`);
                Toast("success", `تم تسجيل الخروج بنجاح`);
                navigate(`/login`);
            }
        } catch (error) {
            setIsLoading(false);
            console.log(`Error: ${error}`);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <header className="bg-white shadow-sm sticky top-0 z-10 ">
                <div className="container mx-auto px-4 py-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => {
                                    toggleSidebar();
                                }}
                                className="p-2 rounded-md text-gray-500 hover:bg-gray-100 lg:hidden cursor-pointer"
                            >
                                <Menu size={20} />
                            </button>

                            <h1
                                className={`text-xl font-bold text-blue-600  lg:hidden `}
                            >
                                {nameplatform}
                            </h1>
                        </div>

                        <div className="flex items-center gap-2">
                            <button
                                className="p-2 rounded-full text-gray-500 hover:bg-gray-100 cursor-pointer"
                                onClick={() => {
                                    navigate(`/${App_User}/account`);
                                }}
                            >
                                <User size={20} />
                            </button>

                            <button
                                className="p-2 rounded-full text-gray-500 hover:bg-gray-100 cursor-pointer"
                                onClick={() => {
                                    toggleDarkMode();
                                }}
                            >
                                {isDarkMode ? (
                                    <Sun size={20} />
                                ) : (
                                    <Moon size={20} />
                                )}
                            </button>

                            <button
                                className="p-2 rounded-full text-gray-500 hover:bg-gray-100 cursor-pointer"
                                onClick={() => {
                                    handleLogout();
                                }}
                            >
                                {!isLoading ? (
                                    <LogOut size={20} />
                                ) : (
                                    <SpinnerMini />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default HeaderUser;
