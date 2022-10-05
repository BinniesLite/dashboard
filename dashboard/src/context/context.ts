import React, {useContext, createContext} from 'react';

interface ThemeContextInterface {

}

const ThemeContext = createContext<ThemeContextInterface | null>(null);

const ThemeProvider = ({children}) => {
    return <ThemeContext.Provider>
    
    </ThemeContext.Provider>
}