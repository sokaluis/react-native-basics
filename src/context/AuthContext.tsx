import React, { createContext, useReducer } from 'react';
import { authReducer, UsernamePayload } from './authReducer';

// Definir como luce la información del contexto
export interface AuthState {
  isLoggedIn: boolean;
  username?: string;
  favoriteIcon?: string;
}
// Estado Inicial
export const authInitialState: AuthState = {
  isLoggedIn: false,
  username: undefined,
  favoriteIcon: undefined,
};

// Usaremos para hacer que React sepa como se expone los datos
export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
  handleFavIcon: (name: string) => void;
  logOut: () => void;
  changeUsername: (user: UsernamePayload) => void;
}

// Crear el context
export const AuthContext = createContext({} as AuthContextProps);

// Componente proveedor
export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const signIn = () => {
    dispatch({ type: 'signIn' });
  };

  const handleFavIcon = (name: string) => {
    dispatch({
      type: 'changeFavIcon',
      payload: {
        name,
      },
    });
  };

  const logOut = () => {
    dispatch({ type: 'logout' });
  };

  const changeUsername = ({ name, id }: UsernamePayload) => {
    dispatch({
      type: 'changeUsername',
      payload: {
        name,
        id,
      },
    });
  };
  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn,
        handleFavIcon,
        logOut,
        changeUsername,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
