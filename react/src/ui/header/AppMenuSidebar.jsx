import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";

// context
import { useAppMenuUser } from "../../contexts/AppMenuContextUser";

const StyledMenuFaBars = styled(FaBars)`
    font-size: 3rem;
    border-radius: 0.5rem;
    background: #eee;
    padding: 0.4rem 0.4rem;
    color: var(--main-color);
    cursor: pointer;
    display: none;
    z-index: 10;
    position: absolute;
    /* right: -5rem; */

    right: 2rem;
    /* top: 1rem; */

    transition: var(--main-transition);
    -webkit-transition: var(--main-transition);
    -moz-transition: var(--main-transition);
    -ms-transition: var(--main-transition);
    -o-transition: var(--main-transition);

    @media (max-width: 767px) {
        // display: initial;
        display: flex;
        transition: var(--main-transition);

        &.bars {
            animation-name: bars;
            animation-duration: 0.5s;
            right: 2rem;
        }

        @keyframes bars {
            from {
                /* background-color: red; */
                right: 28rem;
            }

            to {
                right: 2rem;
                /* background-color: yellow; */
            }
        }
    }
`;

const StyledMenuFaTimes = styled(FaTimes)`
    font-size: 3rem;
    border-radius: 0.5rem;
    background: #eee;
    padding: 0.4rem 0.4rem;
    color: var(--main-color);
    cursor: pointer;
    display: none;
    z-index: 5;
    position: absolute;
    /* right: -5rem; */

    right: 2rem;
    /* top: 1rem; */

    transition: var(--main-transition);
    -webkit-transition: var(--main-transition);
    -moz-transition: var(--main-transition);
    -ms-transition: var(--main-transition);
    -o-transition: var(--main-transition);

    @media (max-width: 767px) {
        // display: initial;
        display: flex;
        transition: var(--main-transition);

        &.times {
            animation-name: time;
            animation-duration: 0.5s;
            right: 28rem;
            transition: var(--main-transition);

            &:hover {
                border-radius: 50%;
                transition: var(--main-transition);
            }
        }

        @keyframes time {
            from {
                /* background-color: red; */
                right: 2rem;
            }

            to {
                /* background-color: yellow; */
                right: 28rem;
            }
        }
    }
`;

function AppMenuSidebar() {
    // useEffect(() => {
    //     window.addEventListener("scroll", () => {
    //         setNavbar(false);
    //     });
    // }, [setNavbar]);

    const { navMenu, setNavMenu } = useAppMenuUser();

    return (
        <>
            {navMenu ? (
                <StyledMenuFaTimes
                    className="times"
                    // id="menu-btn"
                    onClick={() => {
                        setNavMenu(!navMenu);
                    }}
                />
            ) : (
                <StyledMenuFaBars
                    // id="menu-btn"
                    className="bars"
                    onClick={() => {
                        setNavMenu(!navMenu);
                    }}
                />
            )}
        </>
    );
}

export default AppMenuSidebar;
