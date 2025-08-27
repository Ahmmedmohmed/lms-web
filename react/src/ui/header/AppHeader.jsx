/* eslint-disable no-unused-vars */
import styled from "styled-components";

// context
import { useAppMenuUser } from "../../contexts/AppMenuContextUser";

// ui
import AppMenuSidebar from "./AppMenuSidebar";
import AppHeaderMenu from "./AppHeaderMenu";
import Logo from "./Logo";

// import AppUserAvatar from "./AppUserAvatar";
// import AppHeaderMenu from "./AppHeaderMenu";
// import AppMenuSidebar from "../appsidebar/AppMenuSidebar";
// import UserAvatar from "../features/authentication/UserAvatar";
// import HeaderMenu from "./AppHeaderMenu";

const StyledHeader = styled.header`
    /* background-color: var(--color-grey-0); */
    /* background-color: #f3f4f6; */
    padding: 1rem 1rem;
    /* border-bottom: 1px solid var(--color-grey-100); */
    border-bottom: 1px solid #f3f4f6;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2.4rem;

    position: relative;
    padding-right: 6rem;
    /* min-height: 60px; */

    .logo {
        @media (min-width: 767px) {
            display: none;
        }
    }
`;

const AppHeader = () => {
    const { navMenu, setNavMenu } = useAppMenuUser();

    return (
        <>
            <StyledHeader>
                <AppMenuSidebar />
                {navMenu ? <Logo menu={navMenu} /> : <Logo />}
                {/* <AppUserAvatar /> */}
                <AppHeaderMenu />
            </StyledHeader>
        </>
    );
};

export default AppHeader;
