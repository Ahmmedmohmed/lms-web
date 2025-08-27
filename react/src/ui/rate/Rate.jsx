import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";

// style
import "./Rate.scss";

function Rate() {
    return (
        <>
            <div className="rate">
                {/* <i className="filled fas fa-star"></i>  */}
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarRegular} />
            </div>
        </>
    );
}

export default Rate;
