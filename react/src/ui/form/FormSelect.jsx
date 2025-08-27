import styled from "styled-components";

const FormSelect = styled.select`
    width: 100%;
    font-size: 1.2rem;
    padding: 0.8rem 1.2rem;
    /* color: #f9fafb; */

    /* border: 1px solid
        ${(props) =>
        props.type === "white"
            ? "var(--color-grey-100)"
            : "var(--color-grey-300)"}; */
    /* background-color: var(--color-grey-0); */

    /* background-color: #18212f; */
    font-weight: 500;
    /* box-shadow: var(--shadow-sm); */
    box-shadow: 0.5rem 0.5rem 0 rgba(22, 160, 133, 0.2);
    border: 0.2rem solid var(--secondery-color);
    border-radius: 5px;

    outline: none;
    &:focus {
        outline: none;
    }

    &:active,
    &:hover,
    &::slotted {
        border: 0.2rem solid var(--secondery-color);
    }
`;
export default FormSelect;
