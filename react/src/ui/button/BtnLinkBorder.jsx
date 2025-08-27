import styled from "styled-components";

const BtnLinkBorder = styled.button`
    /* padding: 15px 30px; */
    padding: 1rem 2rem;

    /* font-size: 12px; */
    font-size: 0.8rem;
    font-weight: 600;
    font-family: "Cairo", sans-serif;

    cursor: pointer;

    border-radius: 30px;
    border: 1px solid var(--secondery-color);
    color: var(--secondery-color);
    transition: var(--main-transition);

    &:hover {
        border-color: #af0b99;
        color: #af0b99;
        transition: var(--main-transition);
    }
`;

export default BtnLinkBorder;
