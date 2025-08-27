import styled from "styled-components";

const BtnRow = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 30px;

    @media (max-width: 991px) {
        justify-content: center;
        margin-bottom: 20px;
    }
`;

export default BtnRow;
