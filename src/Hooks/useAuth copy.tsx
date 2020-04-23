import React, { FC, useState, useEffect, useContext, createContext } from "react";
import createAuth0Client from "@auth0/auth0-spa-js";

interface Auth0ProviderProps {
  client_id: any;
  redirect_uri: any;
  domain: any,
  children: JSX.Element;
  auth0Options?: any
  onRedirectCallback: Function;
}

export interface Auth0ContextType {
  isAuthenticated:boolean;
  user?: any;
  loading: boolean;
  popupOpen: boolean;
  loginWithPopup: Function;
  handleRedirectCallback: Function;
  getIdTokenClaims: Function;
  loginWithRedirect: Function,
  getTokenSilently: Function,
  getTokenWithPopup: Function,
  logout: Function;
}

const defaultAuth0Context: Auth0ContextType = {
  isAuthenticated: false,
  loading: false,
  popupOpen: false,
  loginWithPopup: () => {},
  handleRedirectCallback: () => {},
  getIdTokenClaims: () => {},
  loginWithRedirect: () => {},
  getTokenSilently: () => {},
  getTokenWithPopup: () => {},
  logout: () => {},
}

const DEFAULT_REDIRECT_CALLBACK = () =>
  window.history.replaceState({}, document.title, window.location.pathname);


export const Auth0Context = createContext(defaultAuth0Context);

export const useAuth0 = () => useContext(Auth0Context);

export const Auth0Provider: FC<Auth0ProviderProps> = ({children,
  onRedirectCallback = DEFAULT_REDIRECT_CALLBACK,
  auth0Options}:Auth0ProviderProps)=>{ 

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState();
  const [auth0Client, setAuth0] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  const [popupOpen, setPopupOpen] = useState<boolean>(false);

  useEffect(() => {
    const initAuth0 = async () => {
      const auth0FromHook = await createAuth0Client(auth0Options);
      setAuth0(auth0FromHook);

      if (window.location.search.includes("code=") &&
        window.location.search.includes("state=")) {
        const { appState } = await auth0FromHook.handleRedirectCallback();
        (onRedirectCallback as any)(appState);
      }

      const isAuthenticated = await auth0FromHook.isAuthenticated();

      setIsAuthenticated(isAuthenticated);

      if (isAuthenticated) {
        const user = await auth0FromHook.getUser();
        setUser(user);
      }

      setLoading(false);
    };
    initAuth0();
    // eslint-disable-next-line
  }, []);

  const loginWithPopup = async (params = {}) => {
    setPopupOpen(true);
    try {
      await auth0Client.loginWithPopup(params);
    } catch (error) {
      console.error(error);
    } finally {
      setPopupOpen(false);
    }
    const user = await auth0Client.getUser();
    setUser(user);
    setIsAuthenticated(true);
  };

  const handleRedirectCallback = async () => {
    setLoading(true);
    await auth0Client.handleRedirectCallback();
    const user = await auth0Client.getUser();
    setLoading(false);
    setIsAuthenticated(true);
    setUser(user);
  };
  return (
    <Auth0Context.Provider
      value={{
        isAuthenticated,
        user,
        loading,
        popupOpen,
        loginWithPopup,
        handleRedirectCallback,
        getIdTokenClaims: (...p: any) => auth0Client.getIdTokenClaims(...p),
        loginWithRedirect: (...p: any) => auth0Client.loginWithRedirect(...p),
        getTokenSilently: (...p: any) => auth0Client.getTokenSilently(...p),
        getTokenWithPopup: (...p: any) => auth0Client.getTokenWithPopup(...p),
        logout: (...p: any) => auth0Client.logout(...p)
      }}
    >
      {children}
    </Auth0Context.Provider>
  );
};