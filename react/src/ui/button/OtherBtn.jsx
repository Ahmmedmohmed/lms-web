import styled from "styled-components";

const OtherBtn = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    margin-top: 50px;

    border-top: 1px solid var(--main-color);
    padding-top: 4rem;
    position: relative;

    user-select: none;

    @media (max-width: 767px) {
        flex-direction: column;
    }

    &::before {
        content: "أو";
        position: absolute;
        left: 50%;
        top: -20px;
        /* font-size: 20px; */
        font-size: 1.6rem;
        /* width: fit-content; */
        /* color: #fff; */
        padding: 1rem;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--secondery-color);
        transform: translateX(-50%);
        transition: var(--main-transition);
    }

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
        border: 1px solid transparent;
        border-top-right-radius: 30px;
        border-bottom-left-radius: 30px;
        transition: var(--main-transition);

        @media (max-width: 767px) {
            width: 100%;
            transition: var(--main-transition);
        }

        &:hover {
            border-radius: 0;
            background-color: transparent;
            color: var(--main-color);
            border: 1px solid var(--secondery-color);
            transition: var(--main-transition);
        }
    }
`;

export default OtherBtn;
