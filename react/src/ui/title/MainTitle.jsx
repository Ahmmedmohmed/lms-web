import styled from "styled-components";

const MainTitle = styled.h2`
    position: relative;
    color: var(--main-color);
    font-size: 29px;
    width: fit-content;
    margin: 0 auto;

    @media (max-width: 767px) {
        font-size: 20px;
    }

    &:before,
    &::after {
        content: "";
        position: absolute;
        right: 0;
        background-color: var(--secondery-color);
        height: 4px;
    }

    &:before {
        bottom: -10px;
        width: 100%;
    }

    &::after {
        bottom: -20px;
        width: 50%;
    }
`;
export default MainTitle;
