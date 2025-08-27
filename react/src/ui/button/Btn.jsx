import styled from "styled-components";

const Btn = styled.button`
    /* padding: 15px 30px; */
    padding: 1rem 2rem;

    /* font-size: 12px; */
    font-size: 0.8rem;
    font-weight: 600;
    font-family: "Cairo", sans-serif;

    cursor: pointer;
    outline: none;
    border: transparent;

    color: white;
    transition: var(--main-transition);
    background-color: var(--secondery-color);

    &:hover {
        background-color: #d612bc;
        transition: var(--main-transition);
    }
`;

export default Btn;
