import { createContext, useContext } from 'react';


export const theme = {
    primary: {
        background: '#000',
        color: '#efefef'
    },
    secondary: {
        background: '#efefef',
        color: '#000'
    }
}

export const ThemeContex = createContext(theme.secondary)