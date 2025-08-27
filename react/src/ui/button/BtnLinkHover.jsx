import styled from "styled-components";

const BtnLinkHover = styled.button`
    padding: 8px 22px;
    font-size: 14px;
    font-weight: 500;
    font-family: "Cairo", sans-serif;
    
    border-radius: 30px;
    border: 1px solid transparent;
    
    cursor: pointer;
    
    color: white;
    background-color: var(--secondery-color);
    transition: var(--main-transition);
    
    &:hover {
        border: 1px solid var(--secondery-color);
        color: var(--secondery-color);
        background-color: transparent;
        transition: var(--main-transition);
    }
`;

export default BtnLinkHover;
