import React from 'react';
import { useForm } from 'react-hook-form';
import axios from '../Utils/axiosWIthAuth';
import { navigate } from '@reach/router';

const Login = () => {
  const { handleSubmit, register, errors, reset } = useForm();
  const onSubmit = async values => {
    const res = await axios().post('/login', values);
    localStorage.setItem('token', res.data.token);
    reset();
    navigate('/users');
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        Login
        <label htmlFor='username'>Username</label>
        <input name='username' type='text' ref={register} id='username' />
        <label htmlFor='password'>Username</label>
        <input name='password' type='text' ref={register} id='password' />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;
