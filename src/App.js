import React from 'react';
import './style.css';
import UserProvider from './reducer/UserReducer';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import 'bootstrap/dist/css/bootstrap.min.css';

//create a user crud operations using use reducer and use context

export default function App() {
  return (
    <div
      className="border p-5"
      style={{
        width: '50rem',
        textAlign: 'center',
        margin: 'auto',
        marginTop: '10px',
      }}
    >
      <h1 className="text-danger">CRUD OPERATION WITH REDUCER</h1>
      <UserProvider>
        <UserForm />
        <UserList />
      </UserProvider>
    </div>
  );
}
