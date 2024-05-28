import { createContext, useContext, useState, useEffect, useCallback } from "react";

export const ThemeContext = createContext();

export const DarkProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const saveMode = JSON.parse(localStorage.getItem('darkMode'))

    return saveMode || false;
  })

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
  }, [darkMode])

 const handleDarkMode = useCallback(() => {
  setDarkMode(prevDark => !prevDark)
  }, [darkMode])

return (
    <ThemeContext.Provider value={{ darkMode, handleDarkMode}}>
      {children}
    </ThemeContext.Provider>
)
}
export const useTheme = () => useContext(ThemeContext);