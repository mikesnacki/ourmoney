import React from 'react';
import './App.scss';
import Header from "./Components/Header"
import ThemeSwitch from "./Components/ThemeSwitch"
import {ThemeProvider} from "./Context/ThemeContext"


function App() {

  return (
    <ThemeProvider>
      <>
        <Header/>
        <ThemeSwitch/>
      </>
    </ThemeProvider>
  );
}

export default App;
