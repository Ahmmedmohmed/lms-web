/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";

// style
import "./Logo.scss";

function Logo({ menu }) {
    const navigate = useNavigate();

    return (
        <>
            <div
                className={`logo ${menu}`}
                onClick={() => {
                    navigate(`/`);
                }}
            >
                <div className="icon-logo">
                    <FontAwesomeIcon icon={faGraduationCap} />
                </div>

                <Link to={`/`}>
                    <span>{`أكا`}</span>
                    {`ديمية`}
                    <span>{` مُع`}</span>
                    {`لم`}
                </Link>
            </div>
        </>
    );
}

export default Logo;
