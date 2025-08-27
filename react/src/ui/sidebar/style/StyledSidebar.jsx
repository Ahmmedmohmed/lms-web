import styled from "styled-components";

const StyledSidebar = styled.aside`
    height: 100%;
    background-color: #fff;
    padding: 0.6rem 1.4rem;
    border-left: 1px solid #f3f4f6;

    display: flex;
    flex-direction: column;
    grid-row: 1/-1;
    gap: 3.2rem;

    position: relative;
    transition: var(--main-transition);

    scroll-behavior: smooth;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 0;
        transition: var(--main-transition);
    }

    @media (max-width: 767px) {
        right: calc(-0% - 26rem);
        /* min-height: 100vh; */
        /* height: 100vh; */
        position: absolute;
        z-index: 10;
        width: 26rem;
        /* transform: translateX(-30%); */
        /* width: 0px; */

        &.open {
            position: absolute;
            z-index: 10;
            right: calc(0% + 0rem);
            /* min-height: 100vh; */
            transition: var(--main-transition);
        }
    }
`;

export default StyledSidebar;
