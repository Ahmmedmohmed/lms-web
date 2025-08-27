import { useNavigate } from "react-router-dom";

// style
// import "./ResendReset.scss";

function ResendReset() {
    const navigate = useNavigate();

    return (
        <>
            <div className="resendreset flex items-center gap-4 my-6 text-2xl">
                <span>{` لم تحصل على الرمز ؟ `}</span>

                <a
                    className="font-bold cursor-pointer text-black"
                    onClick={() => {
                        navigate(`/resetpassword`);
                    }}
                >
                    {`إعادة إرسال`}
                </a>
            </div>
        </>
    );
}

export default ResendReset;
