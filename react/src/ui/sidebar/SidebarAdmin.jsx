/* eslint-disable no-unused-vars */
import styled from "styled-components";

// context
import { useAppMenuUser } from "../../contexts/AppMenuContextUser";

// ui
import Logo from "../header/Logo";
import MenuNavAdmin from "./MenuNavAdmin";

// styled
import StyledSidebar from "./style/StyledSidebar";
import StyledSidebarFooter from "./style/StyledSidebarFooter";

function SidebarAdmin() {
    const { navMenu } = useAppMenuUser();

    return (
        <>
            <StyledSidebar className={`${navMenu && "open"}`}>
                {/* <AppMenuSidebar /> */}

                <Logo />
                <MenuNavAdmin />

                <StyledSidebarFooter>
                    {`تم إنشاء الموقع بواسطة`}
                    <span>{` محمد العمري `}</span>
                </StyledSidebarFooter>

                {/* <Uploader /> */}
            </StyledSidebar>
        </>
    );
}

export default SidebarAdmin;
