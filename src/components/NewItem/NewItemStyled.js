import styled from 'styled-components';
import { Field } from 'formik';

export const ItemContainer = styled.div`
    border: 2px solid ${props => props.theme.primary};
    border-radius: 5px;
    margin-bottom: 1.5rem;

    & hr {
        width: 100%;
        border-top: 2px solid ${props => props.theme.primary};
        margin: 0;
    };

    & button{
        font-family: ${props => props.theme.fontFamily};
        position: relative;

        &:hover {
            cursor: pointer;
        };

        &:focus {
            outline: none;
        };

        &:active {
            transform: scale(0.98);
        };

        &[disabled] {
            cursor: not-allowed;
            background-color: ${props => props.theme.disabled};
            color: ${props => props.theme.grey};

             &:hover:after {
                position: absolute;
                top: -55px; 
                left: -5px;
                width: 100%;
                padding: 5px;
                content: attr(label);
                border: 1px solid ${props => props.theme.primary};
                border-radius: 3px;
                color: ${props => props.theme.primary};
                font-weight: bold;
             };
        };
    };
`;

export const AddForm = styled.form`
    display: flex;
    flex-flow: row wrap;
    align-items: flex-end;
    justify-content: space-between;
`;

export const StyledFieldName = styled(Field)`
    border: none;
    border-radius: 5px;
    outline: none;
    width: 100%;
    font-family: ${props => props.theme.fontFamily};
    font-size: ${props => props.theme.fontSize};
    padding: 15px 20px;
`;

export const StyledFieldDescription = styled(Field)`
    border: none;
    border-radius: 5px;
    outline: none;    
    padding: 20px;
    font-family: ${props => props.theme.fontFamily};
    font-size: ${props => props.theme.fontSize};
    resize: none;
    width: 50%;
`;

export const CancelButton = styled.button`
    width: 15%;
    height: 34px;
    margin-left: auto;
    background: ${props => props.theme.white};
    color: ${props => props.theme.primary};
    border: 1px solid ${props => props.theme.primary};
    margin-bottom: 1rem;
    font-size: ${props => props.theme.fontSize};
`;

export const SaveButton = styled.button`
    width: 15%;
    height: 34px;
    margin-right: 1.5rem;
    margin-left: 2rem;
    margin-bottom: 1rem;
    background: ${props => props.theme.primary};
    color: ${props => props.theme.white};
    font-size: ${props => props.theme.fontSize};
    border: none;
    border-radius: 3px;
`;