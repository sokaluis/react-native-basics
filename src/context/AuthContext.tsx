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

  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn,
        changeFavoriteIcon
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
