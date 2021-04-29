import React, {createContext, useState, useEffect, useContext} from "react";

export const THEME_LIGHT = 'theme/light';
export const THEME_DARK = 'theme/dark';

export const ThemeContext = createContext(THEME_LIGHT);
ThemeContext.displayName = 'ColorModeContext';

const CLASSNAMES = {[THEME_LIGHT]: 'LightMode', [THEME_DARK]: 'DarkMode'};

 const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState(THEME_LIGHT);

  useEffect(() => {
    const darkOS = window.matchMedia("(prefers-color-scheme: dark)").matches;
    console.log('dark OS', darkOS);
    setTheme(darkOS ? THEME_DARK: THEME_LIGHT);
  }, []);

  const setTheme = (name) => {
    let oldClass = name === THEME_LIGHT ? CLASSNAMES[THEME_DARK] : CLASSNAMES[THEME_LIGHT];

    document.body.classList.remove(oldClass)
    document.body.classList.add(CLASSNAMES[name]) 

    setThemeName(name);
  };
  return (
    <ThemeContext.Provider value={{ theme: themeName, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;