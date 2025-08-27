/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

// style
// import "./ResendOTP.scss";

// api
// import { userResendOTP } from "../../api/user/authUser";
import { publicResendOTP } from "../../api/public/authPublic";

// plugin
import Toast from "../../plugin/Toast";

function ResendOTP() {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const [errorsMessage, setErrorsMessage] = useState("");

    const [canResend, setCanResend] = useState(true);
    const [timer, setTimer] = useState(0);
    let userData = Cookies.get("userData");

    const handleResendOTP = async () => {
        try {
            setIsLoading(true);

            if (!userData) {
                return;
            }

            let userJson = JSON.parse(userData);
            let email = userJson?.email;

            const { data, error } = await publicResendOTP(email);

            if (error) {
                if (error?.message) {
                    setErrorsMessage(error?.message || "Invalid Email");
                    Toast("error", `${error?.message || "Invalid Email"}.`);
                    setIsLoading(false);
                }
            } else {
                Toast(
                    "success",
                    `${
                        `تم إعادة إرسال رمز التفعيل إلى بريدك الإلكتروني بنجاح.`
                        // "OTP has been resent to your email Successfully."
                        // data?.message ||
                    }`
                );
                startTimer();
            }
        } catch (error) {
            setIsLoading(false);
            console.log(`Error: ${error}`);
        } finally {
            setIsLoading(false);
        }
    };

    const startTimer = () => {
        setCanResend(false);
        setTimer(180);

        const countdown = setInterval(() => {
            setTimer((prev) => {
                if (prev <= 1) {
                    clearInterval(countdown);
                    setCanResend(true);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
    };

    return (
        <>
            <div className="resendotp flex items-center gap-4 my-6 text-2xl">
                <span>{` لم تحصل على الرمز ؟ `}</span>

                <a
                    className="font-bold cursor-pointer"
                    onClick={() => {
                        if (canResend) {
                            handleResendOTP();
                        }
                    }}
                    style={{
                        color: canResend ? "#c009a8" : "gray",
                        cursor: canResend ? "pointer" : "not-allowed",
                    }}
                >
                    {`إعادة إرسال`}
                    {timer > 0 && ` (${formatTime(timer)}) `}
                </a>
            </div>
        </>
    );
}

export default ResendOTP;
