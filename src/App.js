import './App.css';

import React from 'react';
import WeatherStage from './components/WeatherStage';
import ThemeProvider, { THEME_DARK } from './providers/ThemeProvider';
import DarkModeToggle from './components/DarkModeToggle';

function App() {  

  return (
    <ThemeProvider value={THEME_DARK}>
    <div className="App">
      <DarkModeToggle />
      <div className="WeatherStageWrapper">
        <WeatherStage />
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
