import React from 'react';
import { ThemeContext, THEME_DARK, THEME_LIGHT } from './../../providers/ThemeProvider';

const DarkModeToggle = () => {  
  return (
    <ThemeContext.Consumer>
        {({theme, setTheme}) => (
        <button onClick={() => setTheme(theme === THEME_DARK ? THEME_LIGHT : THEME_DARK)}>
            {theme === THEME_DARK ? "Switch to light mode" : "switch to dark mode"}
        </button>)}
    </ThemeContext.Consumer>
  );
}

export default DarkModeToggle;

