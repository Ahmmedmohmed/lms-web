import styled from "styled-components";

const ButtonIcon = styled.button`
    background: none;
    border: none;
    padding: 0.2rem;
    border: 0.2rem solid var(--secondery-color);
    border-color: transparent;
    /* background-color: var(--back-box); */
    color: #444;
    cursor: pointer;
    border-radius: 5px;
    transition: var(--main-transition);

    &:hover {
        /* background-color: var(--color-grey-100); */
        /* background-color: #fff; */
        box-shadow: 0.5rem 0.5rem 0 rgba(22, 160, 133, 0.2);
        border-color: var(--secondery-color);
    }

    & svg {
        /* width: 2.2rem;
        height: 2.2rem; */
        font-size: 2.4rem;
        color: var(--secondery-color);
    }
`;

export default ButtonIcon;
