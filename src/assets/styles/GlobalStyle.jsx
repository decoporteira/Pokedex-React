import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/themeContext'; // ✅ Corrige a importação do contexto

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
    }
    body {
        background-color: ${(props) => props.theme.backgroundBody}; /* ✅ Usa props do ThemeProvider */
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
    `
const GlobalStylesWrapper = () => {
    const { theme } = useContext(ThemeContext); // ✅ Agora dentro de um componente funcional

    return <ThemeProvider theme={theme}><GlobalStyle /></ThemeProvider>;
}

export default GlobalStylesWrapper;
    