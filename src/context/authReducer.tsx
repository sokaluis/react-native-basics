import { AuthState, authInitialState } from './AuthContext';

type IconPayload = {
  name: string;
};

export type UsernamePayload = {
  name: string;
  id: number;
};

type AuthAction =
  | { type: 'signIn' }
  | { type: 'changeFavIcon'; payload: IconPayload }
  | { type: 'logout' }
  | { type: 'changeUsername'; payload: UsernamePayload };

// gererar estado
export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'signIn':
      return {
        ...state,
        isLoggedIn: true,
        username: 'no-username-yet',
      };
    case 'logout': {
      return authInitialState;
    }
    case 'changeFavIcon':
      return {
        ...state,
        favoriteIcon: action.payload.name,
      };
    case 'changeUsername':
      return {
        ...state,
        username: action.payload.name,
      };

    default:
      return state;
  }
};
