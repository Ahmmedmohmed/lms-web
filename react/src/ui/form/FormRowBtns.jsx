import styled from "styled-components";

const FormRowBtns = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 30px;
    user-select: none;

    @media (max-width: 991px) {
        justify-content: center;
        margin-bottom: 20px;
    }
`;

export default FormRowBtns;
