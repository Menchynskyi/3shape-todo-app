import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { ThemeProvider } from 'styled-components';
// import { createGlobalStyle } from 'styled-components';

// const GlobalStyle = createGlobalStyle``; 
/*
GlobalStyle, for some reasons, doesn't work on production, 
so it was replaced to Container in AppStyled.
*/

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
        <App />
        {/* <GlobalStyle /> */}
    </ThemeProvider>,
    document.getElementById('root')
);
