import styled from 'styled-components';
import { StyledFieldName } from '../NewItem/NewItemStyled';

export const StyledEditName = styled(StyledFieldName)`
    width: 50%;
`;

export const DeleteButton = styled.button`
    margin: auto 1.5rem;
    padding: 5px 20px;
    background: #E28417;
    color: ${props => props.theme.white};
    font-size: 10px;
    line-height: 12px;
    border: none;
    border-radius: 3px;
`;