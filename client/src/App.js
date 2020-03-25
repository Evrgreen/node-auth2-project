import React from 'react';
import Login from './components/Login';
import Register from './components/Register';
import UserList from './components/Userlist';
import Nav from './components/Nav';
import { Router } from '@reach/router';
function App() {
  return (
    <div>
      <h1>Welcome</h1>;
      <Nav />
      <Router>
        <Login path='/' />
        <Register path='/register' />
        <UserList path='/users' />
      </Router>
    </div>
  );
}

export default App;
