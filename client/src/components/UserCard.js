import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div className='card'>
      <h2 className='name'>Name: {user.username}</h2>
      <h4 className='department'>Department: {user.department}</h4>
    </div>
  );
};

export default UserCard;
