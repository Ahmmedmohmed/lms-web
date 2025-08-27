/* eslint-disable no-unused-vars */
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
    HiArrowPath,
    HiBriefcase,
    HiChartBar,
    HiChatBubbleLeftEllipsis,
    HiChevronDown,
    HiChevronUp,
    HiCommandLine,
    HiCube,
    HiInbox,
    HiMiniBookOpen,
    HiOutlineHome,
    HiOutlineUser,
} from "react-icons/hi2";
import { FaAmbulance, FaNotesMedical, FaUserMd } from "react-icons/fa";

// utils
import { App_Url, App_User } from "../../utils/constants";

// context
import { useAppMenuUser } from "../../contexts/AppMenuContextUser";

const StyledNav = styled.nav`
    user-select: none;

    ul {
        ul {
            padding-left: 1.6rem;
            margin-top: 10px;
        }
    }
`;

const NavList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
`;

// const Link = styled.a`
const StyledNavLink = styled(NavLink)`
    &:link,
    &:visited {
        display: flex;
        align-items: center;
        gap: 1rem;

        /* color: #d1d5db; */
        color: var(--main-color);
        font-size: 1.2rem;
        font-weight: 500;

        padding: 1rem 1rem;
        padding-left: 0.4rem;

        border: 0.2rem solid var(--secondery-color);
        border-color: transparent;

        transition: var(--main-transition);
    }

    /* This works because react-router places the active class on the active NavLink */
    &:hover,
    &:active,
    &.active:link,
    &.active:visited {
        /* color: var(--color-grey-800); */
        color: var(--secondery-color);
        /* background-color: #f9fafb; */
        border-radius: 5px;

        /* background-color: #fff; */
        border: 0.2rem solid var(--secondery-color);
        border-radius: 7px;
        box-shadow: 0.5rem 0.5rem 0 rgba(22, 160, 133, 0.2);

        transition: var(--main-transition);
    }

    &.com {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        transition: var(--main-transition);

        div {
            display: flex;
            align-items: center;
            gap: 1.2rem;
            transition: var(--main-transition);
        }
    }

    & svg {
        width: 2rem;
        height: 2rem;
        color: var(--main-color);
        transition: var(--main-transition);
    }

    &:hover svg,
    &:active svg,
    &.active:link svg,
    &.active:visited svg {
        color: var(--secondery-color);
        transition: var(--main-transition);
    }
`;

const StyledNavList = styled.div`
    cursor: pointer;
    &:link,
    &:visited {
        display: flex;
        align-items: center;
        gap: 1.2rem;

        color: #d1d5db;
        font-size: 1.6rem;
        font-weight: 500;
        padding: 1rem 1rem;
        padding-right: 0.4rem;

        border: 0.2rem solid #16a085;
        border-color: transparent;

        transition: var(--main-transition);
    }

    /* This works because react-router places the active class on the active NavLink */
    /* color: var(--color-grey-800); */
    /* &:hover,
    &:active,
    &.active:link,
    &.active:visited {
        color: var(--green);
        background-color: var(--color-grey-50);
        border-radius: var(--border-radius-sm);

        background-color: var(--back-box);
        border: var(--border);
        border-radius: var(--border-radius-md);
        box-shadow: var(--box-shadow);
    } */

    &.com {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        div {
            display: flex;
            align-items: center;
            gap: 1.2rem;
            padding-left: 0.6rem;
        }
    }

    & svg {
        width: 2rem;
        height: 2rem;
        color: #6b7280;
        transition: var(--main-transition);
    }

    div {
        svg:last-child {
            margin-left: auto;
        }
    }

    /* &:hover svg,
    &:active svg,
    &.active:link svg,
    &.active:visited svg {
        color: var(--color-brand-600);
    } */
`;

const NavListChild = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
`;

function MenuNavUser() {
    const { setNavMenu, navMenuChild, setNavMenuChild } = useAppMenuUser();

    return (
        <>
            <StyledNav>
                <NavList>
                    <li>
                        <StyledNavLink
                            to={`/${App_User}/home`}
                            onClick={() => {
                                setNavMenu(false);
                            }}
                        >
                            <HiOutlineHome />
                            <span>{`الرئيسية`}</span>
                        </StyledNavLink>
                    </li>

                    <li>
                        <StyledNavLink
                            to={`/${App_User}/account`}
                            onClick={() => {
                                setNavMenu(false);
                            }}
                        >
                            <HiOutlineUser />
                            <span>{`الحساب`}</span>
                        </StyledNavLink>
                    </li>

                    {/* <li>
                        <StyledNavLink
                            to={`/${App_User}/book`}
                            onClick={() => {
                                setNavMenu(false);
                            }}
                        >
                            <FaNotesMedical />
                            <span>book</span>
                        </StyledNavLink>
                    </li> */}

                    <li>
                        <StyledNavLink
                            to={`/${App_User}/review`}
                            onClick={() => {
                                setNavMenu(false);
                            }}
                        >
                            <HiChatBubbleLeftEllipsis />
                            <span>{`تقييم`}</span>
                        </StyledNavLink>
                    </li>

                    <li>
                        <StyledNavLink
                            to={`/${App_User}/contact`}
                            onClick={() => {
                                setNavMenu(false);
                            }}
                        >
                            <HiInbox />
                            <span>{`تواصل`}</span>
                        </StyledNavLink>
                    </li>

                    {/* <li>
                        <StyledNavLink
                            to={`${App_Url}/services`}
                            onClick={() => {
                                setNavMenu(false);
                            }}
                        >
                            <FaAmbulance />
                            <span>services</span>
                        </StyledNavLink>
                    </li>

                    <li>
                        <StyledNavLink
                            to={`${App_Url}/blogs`}
                            onClick={() => {
                                setNavMenu(false);
                            }}
                        >
                            <HiMiniBookOpen />
                            <span>Blogs</span>
                        </StyledNavLink>
                    </li>

                    <li>
                        <StyledNavList className="com">
                            <div
                                onClick={() => {
                                    setNavMenuChild(!navMenuChild);
                                }}
                            >
                                <HiCube />
                                <span>components</span>
                                {navMenuChild ? (
                                    <HiChevronUp />
                                ) : (
                                    <HiChevronDown />
                                )}
                            </div>

                            {navMenuChild ? (
                                <NavListChild>
                                    <li>
                                        <StyledNavLink
                                            to={`${App_Url}/landing`}
                                            onClick={() => {
                                                setNavMenu(false);
                                            }}
                                        >
                                            <HiArrowPath />
                                            <span>Landing</span>
                                        </StyledNavLink>
                                    </li>

                                    <li>
                                        <StyledNavLink
                                            to={`${App_Url}/iconsnumber`}
                                            onClick={() => {
                                                setNavMenu(false);
                                            }}
                                        >
                                            <HiChartBar />
                                            <span>iconsNumber</span>
                                        </StyledNavLink>
                                    </li>

                                    <li>
                                        <StyledNavLink
                                            to={`${App_Url}/aboutus`}
                                            onClick={() => {
                                                setNavMenu(false);
                                            }}
                                        >
                                            <HiBriefcase />
                                            <span>aboutus</span>
                                        </StyledNavLink>
                                    </li>

                                    <li>
                                        <StyledNavLink
                                            to={`${App_Url}/doctors`}
                                            onClick={() => {
                                                setNavMenu(false);
                                            }}
                                        >
                                            <FaUserMd />
                                            <span>doctors</span>
                                        </StyledNavLink>
                                    </li>

                                    <li>
                                        <StyledNavLink
                                            to={`${App_Url}/reviews`}
                                            onClick={() => {
                                                setNavMenu(false);
                                            }}
                                        >
                                            <HiChatBubbleLeftEllipsis />
                                            <span>reviews</span>
                                        </StyledNavLink>
                                    </li>
                                </NavListChild>
                            ) : (
                                ""
                            )}
                        </StyledNavList>
                    </li> */}
                </NavList>
            </StyledNav>
        </>
    );
}

export default MenuNavUser;
