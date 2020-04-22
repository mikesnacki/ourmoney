import React, { Suspense } from 'react';
import './App.scss';
import Header from "./Components/Header"
import ThemeSwitch from "./Components/ThemeSwitch"
import {ThemeProvider} from "./Context/ThemeContext"
import history from "./history"
import { Router, Route, Switch } from "react-router-dom";
import Loading from "./Components/Loading"

const Home = React.lazy(()=>import("./Components/Home"))


function App() {

  return (
    <ThemeProvider>
      <Router history={history}>
      <Suspense fallback={<Loading/>}>
        <Header/>
        <Switch>
        <Route path="/" exact component={Home}/>
        </Switch>
      </Suspense>
      </Router>
      <ThemeSwitch/>
    </ThemeProvider>
  );
}

export default App;
