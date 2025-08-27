import styled from "styled-components";

const FormTextarea = styled.textarea`
    min-height: 20rem;

    width: 100%;
    padding: 10px 15px;

    background-color: #f9fafc;
    outline: none;
    caret-color: var(--secondery-color);
    color: var(--main-color);
    user-select: none;
    font-size: 1.4rem;

    box-shadow: 0.5rem 0.5rem 0 rgba(22, 160, 133, 0.2);
    border: 0.2rem solid var(--secondery-color);
    border-radius: 5px;
    transition: var(--main-transition);

    resize: none;

    &:focus,
    &:active,
    &:hover,
    &:visited,
    &:internal-autofill-selected {
        background-color: #1f2937;
    }
`;

export default FormTextarea;
