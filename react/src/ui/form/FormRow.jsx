/* eslint-disable react/prop-types */
import styled from "styled-components";

// component
import FormLabel from "./FormLabel";

const StyledInputBox = styled.div`
    width: 100%;
    flex: 1;
    margin-bottom: 20px;
`;

const Error = styled.span`
    color: red;
    font-size: 12px;
    display: block;
    margin-top: 10px;
`;

function FormRow({ label, error, children }) {
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

                {children}

                {error && <Error>{error}</Error>}
            </StyledInputBox>
        </>
    );
}

export default FormRow;
