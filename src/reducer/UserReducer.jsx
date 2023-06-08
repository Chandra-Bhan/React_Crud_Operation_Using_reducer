import React, { useReducer, createContext } from 'react';
import UserList from '../components/UserList';

export const UserContext = createContext();

const initialState = {
  users: [],
};

export const userReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case 'UPDATE_USER':
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
      };
    case 'DELETE_USER':
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    default:
      return state;
  }
};

export default function UserProvider({ children }) {
  const [state, dispatch] = useReducer(userReducer, initialState);
  return (
    <div>
      <UserContext.Provider value={{ state, dispatch }}>
        {children}
      </UserContext.Provider>
    </div>
  );
}
