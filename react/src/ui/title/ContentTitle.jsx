import styled from "styled-components";

const ContentTitle = styled.h2`
    position: relative;
    color: var(--main-color);
    font-size: 22px;
    margin-bottom: 20px;
    transition: var(--main-transition);

    &::before {
        content: "";
        position: absolute;
        bottom: -8px;
        background-color: var(--secondery-color);
        width: 30px;
        height: 3px;
        transition: var(--main-transition);
    }
`;
export default ContentTitle;
