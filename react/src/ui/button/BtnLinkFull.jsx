import styled from "styled-components";

const BtnLinkFull = styled.button`
    /* padding: 15px 30px; */
    padding: 1rem 2rem;

    /* font-size: 12px; */
    font-size: 0.8rem;
    font-weight: 600;
    font-family: "Cairo", sans-serif;

    border-radius: 30px;
    border: 1px solid transparent;

    cursor: pointer;

    color: white;
    background-color: var(--secondery-color);
    transition: var(--main-transition);

    &:hover {
        background-color: #d612bc;
        transition: var(--main-transition);
    }
`;

export default BtnLinkFull;
