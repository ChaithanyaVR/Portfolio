import React,{createContext,useContext} from 'react'
import useThemeSwitcher from '@/components/hooks/useThemeSwitcher'

const ThemeContext = createContext();

export const ThemeProvider = ({children})=>{
    const [mode,setMode] = useThemeSwitcher();
    return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);