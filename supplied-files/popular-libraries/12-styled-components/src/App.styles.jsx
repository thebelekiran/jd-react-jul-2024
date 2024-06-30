import styled from 'styled-components';

// creates an HTML form element with a CSS class with these styles applied
export const Form = styled.form`
    padding: 2em;
    border: 1px solid #444;
    border-radius: 1em;
    background-color: goldenrod;
`;

export const FormGroup = styled.div`
    display: flex;
    flex-direction: row;
    margin: 1em 0;

    @media (max-width: 640px) {
        flex-direction: column;
    }
`;

export const Label = styled.label`
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 20%;
`;

export const Input = styled.input`
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
    padding: 0.25em;
`;

export const Button = styled.button`
    padding: 0.75em;
    border: none;
    border-radius: 0.25em;
    background-color: ${props => props.variant === "primary" ? "navy" : "#999"};
    color: white;
    cursor: pointer;

    &:hover {
        opacity: 0.7;
    }
`;