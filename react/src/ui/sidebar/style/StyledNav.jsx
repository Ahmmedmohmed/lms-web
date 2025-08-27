import styled from "styled-components";

const StyledNav = styled.nav`
    user-select: none;

    ul {
        ul {
            padding-inline-start: 1.6rem;
            margin-top: 10px;
        }
    }
`;

export default StyledNav;
