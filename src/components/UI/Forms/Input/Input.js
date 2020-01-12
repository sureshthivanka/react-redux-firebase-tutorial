import React from 'react'
import styled from 'styled-components';

const InputWrapper = styled.div`
    width: 100%;
    display: flex;
    position: relative;
    margin-bottom: 3.5rem;
    flex-direction: column;

    &:not(:last-child) {
        margin-bottom: 4.5rem;
    }
`;

const StyledInput = styled.input`
    padding: 1rem 2rem;
    width: 100%;
    background-color: var(--color-mainLight);
    color: var(--color-white);
    font-weight: 500;
    font-size: 1.2rem;
    border-radius: 2rem;
    border: none;

    &::placeholder {
        color: var(--color-white);
    }
`;

const Error = styled.div`
    color: var(--color-errorRed);
    visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
    opacity: translateY(${({ show }) => (show ? '20px' : '10px')});
    transform: ${({ show }) => (show ? '1' : '0')};
    transition: all 0.1s;
    padding: 0rem, 2rem;
    font-weight: 500;
    font-size: 1.2rem;
    padding: 0rem 2rem;
`;
const Input = ({ field, form: { touched, errors }, ...props }) => {
    return (
        <InputWrapper>
            <StyledInput {...field} {...props} />
            <Error show={errors[field.name] && touched[field.name]}>
                {errors[field.name]}
            </Error>
        </InputWrapper>
    )
};

export default Input
