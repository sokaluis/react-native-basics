import { AuthState } from '../context/AuthContext';

export interface IAuthAction {
  type: ActionType;
  payload?: () => void;
}

type ActionType = 'signIn';

export const authReducer = (state: AuthState, action: IAuthAction): AuthState => {
  switch (action.type) {
    case 'signIn':
      return {
        ...state,
        isLoggedIn: true,
        username: 'no-username-yet'
      };

    default:
      return state;
  }
};
