import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
        display: flex;
        justify-content: center;
        margin: 0;
        color: ${props => props.theme.black};
        font-size: ${props => props.theme.fontSize};
        font-family: ${props => props.theme.fontFamily};
    }
`;

const theme = {
    primary: '#D1004B',
    secondary: '#E28417',
    disabled: '#be1352',
    grey: '#F5F5F5',
    white: '#FFFFFF',
    black: '#000000',
    fontSize: '16px',
    fontFamily: 'Roboto'
};

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
    </ThemeProvider>,
    document.getElementById('root')
);
