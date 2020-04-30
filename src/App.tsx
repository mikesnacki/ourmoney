import React, { Suspense } from 'react';
import './App.scss';
import { Router, Route, Switch } from "react-router-dom";
import { ApolloProvider, ApolloClient, HttpLink, InMemoryCache } from "@apollo/client"

import ThemeSwitch from "./Components/ThemeSwitch"
import {ThemeProvider} from "./Context/ThemeContext"
import history from "./Utils/history"
import {Auth0Provider} from "./Hooks/useAuth"
import config from "./auth_config.json";

import Header from "./Components/Header"
import Loading from "./Components/Loading"
import PrivateRoute from "./Components/PrivateRoute"
const Home = React.lazy(()=>import("./Components/Home"))
const Budget = React.lazy(()=>import("./Components/Budget"))
const Profile = React.lazy(()=>import("./Components/Profile"))

const onRedirectCallback = (appState: any) => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

const client = new ApolloClient({
  cache: new InMemoryCache({
    dataIdFromObject: o => o.id ? `${o.__typename}-${o.id}` : `${o.__typename}-${o.cursor}`,
  }),
  link: new HttpLink({
    uri: "http://192.168.99.100:4466/"
  })
})


function App() {
  return (
    <Auth0Provider
      domain={config.domain}
      client_id={config.clientId}
      redirect_uri={window.location.origin}
      onRedirectCallback={()=>onRedirectCallback}>
      <ApolloProvider client={client}>
        <ThemeProvider>
          <Router history={history}>
          <Suspense fallback={<Loading/>}>
            <Header/>
            <Switch>
            <Route path="/" exact component={Home}/>
            <PrivateRoute path="/budget" component={Budget}/>
            <Route path="/profile" component={Profile}/>
            </Switch>
          </Suspense>
          </Router>
          <ThemeSwitch/>
        </ThemeProvider>
      </ApolloProvider>
    </Auth0Provider>
  );
}

export default App;
