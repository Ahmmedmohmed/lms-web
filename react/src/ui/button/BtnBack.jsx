import { useNavigate } from "react-router-dom";

// ui
import BtnLinkFull from "./BtnLinkFull";

function BtnBack() {
    const navigate = useNavigate();

    return (
        <>
            <button
                className="btn has-before"
                type="back"
                onClick={(e) => {
                    e.preventDefault();
                    navigate(-1);
                }}
            >
                &larr; {`رجوع`}
            </button>
        </>
    );
}

export default BtnBack;
