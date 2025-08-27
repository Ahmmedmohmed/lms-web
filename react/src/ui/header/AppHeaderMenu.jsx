/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { HiOutlineUser } from "react-icons/hi2";

// store
// import useUserData from "../../store/userDataStore";

// utils
import { App_User } from "../../utils/constants";

// ui components
import AppLogout from "../logout/AppLogout";

// ui
import ButtonIcon from "../button/ButtonIcon";

// themes
import DarkModeToggle from "../themes/DarkModeToggle";

const StyledHeaderMenu = styled.ul`
    display: flex;
    gap: 0.4rem;
    margin-right: auto;

    svg {
        font-size: 2.4rem;
    }
`;

function AppHeaderMenu() {
    const navigate = useNavigate();
    // let { userData } = useUserData();

    return (
        <>
            <StyledHeaderMenu>
                <li>
                    <ButtonIcon
                        onClick={() => {
                            navigate(`/${App_User}/account`);
                        }}
                    >
                        <HiOutlineUser />
                    </ButtonIcon>
                </li>

                <li>
                    <DarkModeToggle />
                </li>

                <li>
                    <AppLogout />
                </li>
            </StyledHeaderMenu>
        </>
    );
}

export default AppHeaderMenu;
