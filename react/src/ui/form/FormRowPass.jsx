/* eslint-disable react/prop-types */
import styled from "styled-components";

// component
import FormLabel from "./FormLabel";

const StyledInputBox = styled.div`
    width: 100%;
    flex: 1;
    margin-bottom: 20px;

    input {
        text-align: left;
    }
`;

const Error = styled.span`
    color: red;
    font-size: 12px;
    display: block;
    margin-top: 10px;
    /* display: none; */
`;

const Div = styled.div`
    /* position: relative; */
    width: 100%;
    display: flex;
    align-items: stretch;
    /* justify-content: center; */
    /* gap: 10px; */

    input {
        &[type="text"] {
            direction: ltr;
            text-align: left;
        }

        &::placeholder {
            text-align: right;
        }
    }

    input:has(+ svg) {
        border-left-color: transparent;
    }

    svg {
        /* position: absolute; */
        /* right: 13px; */
        /* top: 50%; */
        /* transform: transslateY(-50%); */
        display: flex;
        align-items: center;
        justify-content: center;

        cursor: pointer;
        height: 100%;
        width: 100%;
        max-width: 50px;
        min-width: 30px;
        /* width: fit-content; */
        font-size: 1.4rem;
        padding: 10px 10px;

        box-shadow: 0rem 0.5rem 0 rgba(22, 160, 133, 0.2);
        border: 0.2rem solid var(--secondery-color);
        border-radius: 5px;
        /* border: 1px solid #dedada; */
        border-right-color: transparent;

        background-color: #f9fafc;
        transition: var(--main-transition);

        &:hover {
            color: var(--secondery-color);
            transition: var(--main-transition);
        }
    }
`;

function FormRowPass({ label, error, children }) {
    return (
        <>
            <StyledInputBox data-aos="fade-down">
                {label && (
                    <FormLabel
                        htmlFor={children?.props?.id || children[0]?.props?.id}
                    >
                        {label}
                    </FormLabel>
                )}

                <Div>{children}</Div>

                {error && <Error>{error}</Error>}
            </StyledInputBox>
        </>
    );
}

export default FormRowPass;
