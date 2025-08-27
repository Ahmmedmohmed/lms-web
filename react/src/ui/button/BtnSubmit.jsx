import styled from "styled-components";

const BtnSubmit = styled.button`
    padding: 15px 30px;

    font-size: 14px;
    font-weight: 600;
    font-family: "Cairo", sans-serif;

    cursor: pointer;
    border: none;
    border-radius: 30px;
    border: 1px solid transparent;

    color: white;
    transition: var(--main-transition);
    background-color: var(--secondery-color);

    &:hover {
        background-color: #d612bc;
        transition: var(--main-transition);
    }
`;

export default BtnSubmit;
