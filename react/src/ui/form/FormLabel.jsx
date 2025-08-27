import styled from "styled-components";

const FormLabel = styled.label`
    font-size: 16px;
    display: block;
    margin-bottom: 10px;
    transition: var(--main-transition);
    user-select: none;
    cursor: pointer;

    &:hover {
        color: var(--main-color);
        transition: var(--main-transition);
    }
`;

export default FormLabel;
