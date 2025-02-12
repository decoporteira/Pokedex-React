import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/themeContext'; 

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
    }
    body {
        background-color: ${(props) => props.theme.backgroundBody};
        color: ${(props) => props.theme.color};
        
        /* background-color: #fdeaea; */
    }
    a {
        font-weight: 500;
        color: #ff6464;
        text-decoration: inherit;
        transition-duration: 3.s; 
    }
    a:hover {
        color: #81131e;
        transition-duration: .3s; 
    }
    .btn {
    border-color: #dc3545;
    margin: 10px;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition-duration: .3s; 
    &:hover {
      background-color: #81131e;
      cursor: pointer;
      transition-duration: .3s;  
    }
}
    `
const GlobalStylesWrapper = () => {
    const { theme } = useContext(ThemeContext); 

    return <ThemeProvider theme={theme}><GlobalStyle /></ThemeProvider>;
}

export default GlobalStylesWrapper;
    