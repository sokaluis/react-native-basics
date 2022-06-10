import { AuthState } from '../context/AuthContext';

export interface IAuthAction {
  type: ActionType;
  payload?: string;
}

type ActionType = 'SIGN_IN' | 'ADD_ICON' | 'LOG_OUT';

export const authReducer = (state: AuthState, action: IAuthAction): AuthState => {
  switch (action.type) {
    case 'SIGN_IN':
      return {
        ...state,
        isLoggedIn: true,
        username: 'no-username-yet'
      };

    case 'ADD_ICON':
      return {
        ...state,
        favoriteIcon: action.payload
      };

    default:
      return state;
  }
};
