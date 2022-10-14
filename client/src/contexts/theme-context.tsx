import React, {useContext, createContext, useState} from 'react';

interface AppContextProviderProps {
    children: React.ReactNode
}

interface AppContextInterface {
    activeTheme?: string,
    setActiveTheme?: React.Dispatch<React.SetStateAction<string>>,
    activeSetting?: boolean,
    setActiveSetting?: React.Dispatch<React.SetStateAction<boolean>>,
    currentMode?: string,
    setCurrentMode?: React.Dispatch<React.SetStateAction<string>>,
    activeMenu?: boolean,
    setActiveMenu?: React.Dispatch<React.SetStateAction<boolean>>,
    activeTab?: string,
    setActiveTab?: React.Dispatch<React.SetStateAction<string>>
}

const ThemeContext = createContext<AppContextInterface>({} as AppContextInterface);

export const ThemeProvider = ({ children }: AppContextProviderProps) => {
    // People ususall handle stuff  here
    const [activeSetting, setActiveSetting] = useState<boolean>(false);
    const [activeTheme, setActiveTheme] = useState<string>("#EE6983");
    const [currentMode, setCurrentMode] = useState<string>("Light");
    const [activeMenu, setActiveMenu] = useState<boolean>(false);
    const [activeTab, setActiveTab] = useState<string>("form")

    // And comprise the possible use output here
    const data : AppContextInterface = {
        activeSetting,
        setActiveSetting,
        activeTheme,
        setActiveTheme,
        currentMode,
        setCurrentMode,
        activeMenu, 
        setActiveMenu,
        activeTab,
        setActiveTab
    };

    return <ThemeContext.Provider value={data}>
        {children}
    </ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext); 
    