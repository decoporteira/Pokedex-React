import { createContext, useState } from 'react';

export const themes = {
    light: {
        color: '#ff6464',
        backgroundCard: '#f5f5f5',
        backgroundBody: '#fdeaea'
    },
    dark: {
        color: '#eeeeee',
        backgroundCard: '#21252b',
        backgroundBody: '#24272b'
    }
}
export const ThemeContext = createContext({});

export const ThemeProvider = (props) => {
    const [theme, setTheme ]  = useState(themes.light)
    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}