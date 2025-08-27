/* eslint-disable no-unused-vars */
import { useState } from "react";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";

// api
import { userLogout } from "../../api/user/authUser";

// plugins
import Toast from "../../plugin/Toast";

// ui form
import ButtonIcon from "../button/ButtonIcon";

// ui
import SpinnerMini from "../spinner/SpinnerMini";

function AppLogout() {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const [errorsMessage, setErrorsMessage] = useState("");
    let refresh_token = Cookies.get("refresh_token");

    const { register, formState, getValues, handleSubmit, reset } = useForm();
    const { errors } = formState;

    const handleLogout = async () => {
        try {
            if (errors?.root) {
                return;
            }

            const { data, error } = await userLogout(refresh_token);

            if (error) {
                if (error?.message) {
                    setErrorsMessage(error?.message);
                    Toast("error", `${error?.message}.`);
                    setIsLoading(false);
                }
            } else {
                setIsLoading(true);
                // Toast("success", `${data?.message || "Logout Successfully."}`);
                Toast("success", `تم تسجيل الخروج بنجاح`);
                navigate(`/login`);
            }
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    };

    return (
        <>
            <ButtonIcon
                disabled={isLoading}
                onClick={() => {
                    handleLogout();
                }}
            >
                {!isLoading ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
            </ButtonIcon>
        </>
    );
}

export default AppLogout;
