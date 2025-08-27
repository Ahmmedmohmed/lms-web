import styled from "styled-components";

const FormInput = styled.input`
    user-select: none !important;

    width: 100%;
    background-color: #f9fafc;
    border: none;
    border: 1px solid #dedada;
    padding: 10px 15px;
    outline: none;
    caret-color: var(--secondery-color);
    color: var(--main-color);
    user-select: none;
    font-size: 1.4rem;

    box-shadow: 0.5rem 0.5rem 0 rgba(22, 160, 133, 0.2);
    border: 0.2rem solid var(--secondery-color);
    border-radius: 5px;
    transition: var(--main-transition);

    &[type="text"] {
        text-align: right;
    }

    &[type="email"] {
        text-align: left;
        direction: ltr;

        &::placeholder {
            text-align: right;
        }
    }

    &[type="password"] {
        text-align: left;
        direction: ltr;

        &::placeholder {
            text-align: right;
        }
    }

    &::placeholder {
        /* font-size: 1px; */
        font-size: 1rem;
        color: #787878;
        transition: var(--main-transition);
        /* text-align: right; */
        /* right: 30px;
        position: relative; */
    }

    max-width: 100%;

    @media (min-width: 767px) {
        width: 120% !important;
    }
`;

export default FormInput;
