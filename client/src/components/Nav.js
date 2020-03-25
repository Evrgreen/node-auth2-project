import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';

const Nav = () => {
  const [loggedIn, SetLoggedIn] = useState(localStorage.getItem('token'));
  console.log(loggedIn);
  const logout = () => {
    console.log('Logging Out');
    localStorage.removeItem('token');
    SetLoggedIn(false);
    navigate('/');
  };
  return (
    <div>
      {loggedIn ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={logout}>Login</button>
      )}
    </div>
  );
};

export default Nav;
