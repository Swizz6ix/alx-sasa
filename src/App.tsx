import React from 'react';
import './App.css';
import Header from './components/Header';
import MemeCard from './components/MemeCard';
import CountDownSection from './components/CountDownSection';
import HeaderAlt from './components/HeaderAlt';
import LandingPage from './components/LandingPage';
import useLocalStorage from 'use-local-storage';
import { useDataLayerValue } from './Hooks/useDatalayer';
import SignOut from './components/SignOut';


const App: React.FC = () => {
  const [{ user }, dispatch ] = useDataLayerValue();
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (window.matchMedia('(prefers-color-scheme: light)').matches) {
  } else{
    console.log("needed")
  }
  const [ theme, setTheme ] = useLocalStorage<string>('theme', defaultDark ? 'dark' : 'light');


  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }
  return (
    <div className="app" data-theme={theme}>
      {!user ?
      ( <LandingPage /> ) : (
      <>
        <Header data-theme={theme} />
        <HeaderAlt />
        <SignOut />
        <CountDownSection data-theme={theme} />
        <MemeCard />
      </>
      )}
        <button onClick={switchTheme}>Switch {theme === 'light' ? 'dark' : 'light'} mode </button>
    </div>
  );
}

export default App;
