import React, { useState, useEffect } from 'react';
import UserCard from './UserCard';
import axios from '../Utils/axiosWIthAuth';

const Userlist = () => {
  const [users, setUsers] = useState(undefined);

  useEffect(() => {
    const fetch = async () => {
      const users = await axios().get('/users');
      console.log(users);
      setUsers(users.data);
    };
    fetch();
  }, []);

  return (
    <div>
      <h2>Userlist</h2>
      {users ? users.map(user => <UserCard key={user.id} user={user} />) : null}
    </div>
  );
};

export default Userlist;
