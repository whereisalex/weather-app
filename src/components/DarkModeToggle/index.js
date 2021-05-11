import React from 'react';
import { ThemeContext, THEME_DARK, THEME_LIGHT } from './../../providers/ThemeProvider';
import './styles.css';


const DarkModeToggle = () => {     
  return (
    <ThemeContext.Consumer>
        {({theme, setTheme}) => (
            <div className="ToggleWrapper">
                <label className="Toggle">
                    <input className="Checkbox" type="checkbox" checked={theme === THEME_DARK} onChange={() => setTheme(theme === THEME_DARK ? THEME_LIGHT : THEME_DARK)}/>
                    <span className="Slider"></span>
                    <span className="Sun"></span>
                    <span className="Moon"></span>
                </label>
          </div>
        )}
    </ThemeContext.Consumer>
  );
}

export default DarkModeToggle;

