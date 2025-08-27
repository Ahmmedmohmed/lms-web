import styled, { css } from "styled-components";

const Row = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    ${(props) =>
        props.type === "horizontal" &&
        css`
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            gap: 2rem;
        `}
`;

export default Row;
