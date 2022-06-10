import React, { createContext, useReducer } from 'react';
import { authReducer } from '../reducers/authReducer';

export interface AuthState {
  isLoggedIn: boolean;
  username?: string;
  favoriteIcon?: string;
}

export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
  changeFavoriteIcon: (icon: string) => void;
  logout: () => void;
  changeUsername: (name: string) => void;
}

export const authInitialState: AuthState = {
  isLoggedIn: false,
  username: undefined,
  favoriteIcon: undefined
};

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const signIn = () => {
    dispatch({
      type: 'SIGN_IN'
    });
  };

  const changeFavoriteIcon = (icon: string) => {
    dispatch({
      type: 'ADD_ICON',
      payload: icon
    });
  };

  const logout = () => {
    dispatch({
      type: 'LOG_OUT'
    });
  };

  const changeUsername = (name: string) => {
    dispatch({
      type: 'ADD_USERNAME',
      payload: name
    });
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn,
        changeFavoriteIcon,
        logout,
        changeUsername
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
