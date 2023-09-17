import React from 'react';
import './App.css';
import Header from './components/Header';
import MemeCard from './components/MemeCard';
import CountDownSection from './components/CountDownSection';
import HeaderAlt from './components/HeaderAlt';
import LandingPage from './components/LandingPage';
import useLocalStorage from 'use-local-storage';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import { styled } from "@mui/material/styles";
import Switch, { SwitchProps } from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

const App: React.FC = () => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (window.matchMedia('(prefers-color-scheme: light)').matches) {
    console.log("supported")
  } else{
    console.log("needed")
  }
  console.log("d", defaultDark)
  const [ theme, setTheme ] = useLocalStorage<string>('theme', defaultDark ? 'light' : 'light');

  console.log(theme);



  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }
  return (
    <div className="app" data-theme={theme}>
      <LandingPage />
        {/* <Header data-theme={theme} /> */}
        {/* <HeaderAlt /> */}
        {/* <CountDownSection data-theme={theme} /> */}
        {/* <MemeCard /> */}
        <button onClick={switchTheme}>Switch {theme === 'light' ? 'dark' : 'light'} mode </button>
    </div>
  );
}

export default App;
