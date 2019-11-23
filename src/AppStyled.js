import styled from 'styled-components';

export const AppContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-content: center;
    width: 600px;
    margin-top: 5rem;
`;

export const StyledButton = styled.button`
    width: calc(30% + 3.5rem + 2px);
    height: 50px;
    margin: 3rem 0 3rem auto;
    font-size: ${props => props.theme.fontSize};
    font-family: ${props => props.theme.fontFamily};
    color: ${props => props.theme.white};
    background: ${props => props.theme.primary};
    border: 0;
    border-radius: 3px;

    &:hover {
        cursor: pointer;
    };

    &:focus {
        outline: none;
    };

    &:active {
        transform: scale(0.98);
    };
`;