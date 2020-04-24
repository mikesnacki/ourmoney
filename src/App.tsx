import React, { Suspense } from 'react';
import './App.scss';
import Header from "./Components/Header"
import ThemeSwitch from "./Components/ThemeSwitch"
import {ThemeProvider} from "./Context/ThemeContext"
import history from "./Utils/history"
import { Router, Route, Switch } from "react-router-dom";
import Loading from "./Components/Loading"
// import {Auth0Provider} from "./Hooks/useAuth"
// import config from "./auth_config.json";
import { ApolloProvider, ApolloClient, HttpLink, InMemoryCache } from "@apollo/client"

const Home = React.lazy(()=>import("./Components/Home"))
const Budget = React.lazy(()=>import("./Components/Budget"))

// const onRedirectCallback = (appState: any) => {
//   history.push(
//     appState && appState.targetUrl
//       ? appState.targetUrl
//       : window.location.pathname
//   );
// };

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "http://192.168.99.100:4466/"
  })
})


function App() {
  return (
    // <Auth0Provider
    //   domain={config.domain}
    //   client_id={config.clientId}
    //   redirect_uri={window.location.origin}
    //   onRedirectCallback={()=>onRedirectCallback}>
      <ApolloProvider client={client}>
        <ThemeProvider>
          <Router history={history}>
          <Suspense fallback={<Loading/>}>
            <Header/>
            <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/budget" component={Budget}/>
            </Switch>
          </Suspense>
          </Router>
          <ThemeSwitch/>
        </ThemeProvider>
      </ApolloProvider>
    // </Auth0Provider>
  );
}

export default App;
