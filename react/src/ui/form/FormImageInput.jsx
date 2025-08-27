import styled from "styled-components";

// const FormImageInput = styled.input.attrs({ type: "image" })`
const FormImageInput = styled.input.attrs({ type: "file" })`
    font-size: 1.4rem;
    border-radius: 5px;
    text-transform: none;

    &::file-selector-button {
        font: inherit;
        font-weight: 500;
        padding: 0.8rem 1.2rem;
        margin-left: 1.2rem;
        border-radius: 5px;
        border: none;
        /* color: #6366f1; */
        /* background-color: #16a085ed; */
        cursor: pointer;

        transition: var(--main-transition);

        &:hover {
            background-color: #16a085;
            transition: var(--main-transition);
        }
    }
`;

export default FormImageInput;
