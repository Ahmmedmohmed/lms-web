import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavLink = styled(NavLink)`
    &:link,
    &:visited {
        display: flex;
        align-items: center;
        gap: 1.2rem;

        /* color: #d1d5db; */
        color: var(--main-color);
        font-size: 1.2rem;
        font-weight: 500;

        padding: 1rem 1rem;
        padding-right: 0.4rem;

        border: 0.2rem solid var(--secondery-color);
        border-color: transparent;

        transition: var(--main-transition);
    }

    /* This works because react-router places the active class on the active NavLink */
    &:hover,
    &:active,
    &.active:link,
    &.active:visited {
        /* color: var(--color-grey-800); */
        color: var(--secondery-color);
        /* background-color: #f9fafb; */
        border-radius: 5px;

        /* background-color: #fff; */
        border: 0.2rem solid var(--secondery-color);
        border-radius: 7px;
        box-shadow: 0.5rem 0.5rem 0 rgba(22, 160, 133, 0.2);

        transition: var(--main-transition);
    }

    &.com {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        transition: var(--main-transition);

        div {
            display: flex;
            align-items: center;
            gap: 1.2rem;
            transition: var(--main-transition);
        }
    }

    & svg {
        width: 2rem;
        height: 2rem;
        color: var(--main-color);
        transition: var(--main-transition);
    }

    &:hover svg,
    &:active svg,
    &.active:link svg,
    &.active:visited svg {
        color: var(--secondery-color);
        transition: var(--main-transition);
    }
`;

export default StyledNavLink;
