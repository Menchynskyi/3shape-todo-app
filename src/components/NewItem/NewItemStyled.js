import styled from 'styled-components';
import { Field } from 'formik';

export const NewItemContainer = styled.div`
    border: 2px solid ${props => props.theme.primary};
    border-radius: 5px;
    margin-bottom: 1.5rem;

    & hr {
        width: 100%;
        border-top: 2px solid ${props => props.theme.primary};
        margin: 0;
    }

    & button{
        font-size: 16px;
        width: 15%;
        height: 34px;
        margin-bottom: 1rem;
        
        &:first-of-type {
            margin-left: auto;
            background: ${props => props.theme.white};
            color: ${props => props.theme.primary};
            border: 1px solid ${props => props.theme.primary};
        };

        &:last-of-type {
            margin-right: 2rem;
            margin-left: 2rem;
            background: ${props => props.theme.primary};
            color: ${props => props.theme.white};
            border: none;
            border-radius: 3px;
        };
    };
`;

export const AddForm = styled.form`
    display: flex;
    flex-flow: row wrap;
    align-items: flex-end;
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
    font-size: ${props => props.theme.fontSize};
    font-family: ${props => props.theme.fontFamily};
    resize: none;
    width: 50%;
`;