import styled from "styled-components";

const BtnCancel = styled.button`
    padding: 15px 30px;
    border-radius: 30px;
    font-size: 12px;
    font-weight: 600;
    font-family: "Cairo", sans-serif;
    transition: var(--main-transition);
    border: 1px solid var(--secondery-color);
    color: var(--secondery-color);

    &:hover {
        border-color: #af0b99;
        color: #af0b99;
    }
`;

export default BtnCancel;
