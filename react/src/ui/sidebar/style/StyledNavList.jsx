import styled from "styled-components";

const StyledNavList = styled.div`
    cursor: pointer;
    &:link,
    &:visited {
        display: flex;
        align-items: center;
        gap: 1.2rem;

        color: var(--main-color);
        font-size: 1.6rem;
        font-weight: 500;
        padding: 1rem 1rem;
        padding-right: 0.4rem;

        border: 0.2rem solid var(--secondery-color);
        border-color: transparent;

        transition: var(--main-transition);
    }

    /* This works because react-router places the active class on the active NavLink */
    /* color: var(--color-grey-800); */
    /* &:hover,
    &:active,
    &.active:link,
    &.active:visited {
        color: var(--green);
        background-color: var(--color-grey-50);
        border-radius: var(--border-radius-sm);

        background-color: var(--back-box);
        border: var(--border);
        border-radius: var(--border-radius-md);
        box-shadow: var(--box-shadow);
    } */

    &.com {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 1rem 1rem;
        padding-right: 0.4rem;

        div {
            display: flex;
            align-items: center;
            gap: 1.2rem;

            span {
                color: var(--main-color);
                font-size: 1.2rem;
                font-weight: 500;
            }
        }
    }

    & svg {
        width: 2rem;
        height: 2rem;
        color: var(--main-color);
        transition: var(--main-transition);
    }

    div {
        svg:last-child {
            margin-right: auto;
        }
    }

    /* &:hover svg,
    &:active svg,
    &.active:link svg,
    &.active:visited svg {
        color: var(--color-brand-600);
    } */
`;

export default StyledNavList;
