import React from 'react';
import { useForm } from 'react-hook-form';
import axios from '../Utils/axiosWIthAuth';
import { navigate } from '@reach/router';

const Register = () => {
  const { handleSubmit, register, errors, reset } = useForm();
  const onSubmit = async values => {
    const res = await axios().post('/register', values);
    reset();
    navigate('/login');
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        Login
        <label htmlFor='username'>Username</label>
        <input name='username' type='text' ref={register} id='username' />
        <label htmlFor='password'>Username</label>
        <input name='password' type='text' ref={register} id='password' />
        <label htmlFor='department'>Department</label>
        <input name='department' type='text' ref={register} id='department' />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Register;
