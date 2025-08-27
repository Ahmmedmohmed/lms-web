/* eslint-disable no-unused-vars */
import { useState } from "react";
import {
    HiAcademicCap,
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
    HiMiniUserGroup,
    HiOutlineHome,
    HiOutlineUser,
} from "react-icons/hi2";
import {
    FaAmbulance,
    FaNotesMedical,
    FaUserEdit,
    FaUserGraduate,
    FaUserMd,
    FaUserShield,
    FaUserTie,
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsersGear } from "@fortawesome/free-solid-svg-icons";

// utils
import { App_Admin } from "../../utils/constants";

// context
import { useAppMenuUser } from "../../contexts/AppMenuContextUser";

// styled
import StyledNav from "./style/StyledNav";
import StyledUlList from "./style/StyledUlList";
import StyledNavLink from "./style/StyledNavLink";
import StyledNavList from "./style/StyledNavList";
import StyledNavListChild from "./style/StyledNavListChild";

function MenuNavAdmin() {
    const { setNavMenu, navMenuChild, setNavMenuChild } = useAppMenuUser();

    // const [openIndex, setOpenIndex] = useState(null);

    // const listcomponents = [
    //     {
    //         title: "المستخدمين",
    //     },
    //     {
    //         title: "المستخدمين",
    //     },
    //     {
    //         title: "المستخدمين",
    //     },
    // ];

    // const handleListComponentsClick = (index) => {
    //     if (openIndex === index) {
    //         setOpenIndex(null);
    //     } else {
    //         setOpenIndex(index);
    //     }
    // };

    return (
        <>
            <StyledNav>
                <StyledUlList>
                    <li>
                        <StyledNavLink
                            to={`/${App_Admin}/home`}
                            onClick={() => {
                                setNavMenu(false);
                            }}
                        >
                            <HiOutlineHome />
                            <span>{`الرئيسية`}</span>
                        </StyledNavLink>
                    </li>

                    {/* <li>
                        <StyledNavLink
                            to={`/${App_Admin}/account`}
                            onClick={() => {
                                setNavMenu(false);
                            }}
                        >
                            <HiOutlineUser />
                            <span>{`الحسابات`}</span>
                        </StyledNavLink>
                    </li> */}

                    <li>
                        <StyledNavLink
                            to={`/${App_Admin}/review`}
                            onClick={() => {
                                setNavMenu(false);
                            }}
                        >
                            <HiChatBubbleLeftEllipsis />
                            <span>{`التقييمات`}</span>
                        </StyledNavLink>
                    </li>

                    <li>
                        <StyledNavLink
                            to={`/${App_Admin}/contact`}
                            onClick={() => {
                                setNavMenu(false);
                            }}
                        >
                            <HiInbox />
                            <span>{`التواصل`}</span>
                        </StyledNavLink>
                    </li>

                    <li>
                        <StyledNavList className="com">
                            <div
                                onClick={() => {
                                    setNavMenuChild(!navMenuChild);
                                }}
                            >
                                <HiOutlineUser />
                                <span>المستخدمين</span>

                                {navMenuChild ? (
                                    <HiChevronUp />
                                ) : (
                                    <HiChevronDown />
                                )}
                            </div>

                            {navMenuChild && (
                                <StyledNavListChild>
                                    <li>
                                        <StyledNavLink
                                            to={`/${App_Admin}/admins`}
                                            onClick={() => {
                                                setNavMenu(false);
                                            }}
                                        >
                                            <FaUserShield />

                                            <span>{`المسؤولين`}</span>
                                        </StyledNavLink>
                                    </li>

                                    <li>
                                        <StyledNavLink
                                            to={`/${App_Admin}/teachers`}
                                            onClick={() => {
                                                setNavMenu(false);
                                            }}
                                        >
                                            <FaUserTie />

                                            <span>{`المدرسين`}</span>
                                        </StyledNavLink>
                                    </li>

                                    <li>
                                        <StyledNavLink
                                            to={`/${App_Admin}/staffs`}
                                            onClick={() => {
                                                setNavMenu(false);
                                            }}
                                        >
                                            <FaUserEdit />

                                            <span>{`المساعدين`}</span>
                                        </StyledNavLink>
                                    </li>

                                    <li>
                                        <StyledNavLink
                                            to={`/${App_Admin}/students`}
                                            onClick={() => {
                                                setNavMenu(false);
                                            }}
                                        >
                                            <FaUserGraduate />

                                            <span>{`الطلاب`}</span>
                                        </StyledNavLink>
                                    </li>
                                </StyledNavListChild>
                            )}
                        </StyledNavList>
                    </li>
                </StyledUlList>
            </StyledNav>
        </>
    );
}

export default MenuNavAdmin;
