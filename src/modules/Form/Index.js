import React from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button/Index';

const Form = () => {
  return (
    <div className='bg-white w-[400px] md:w-[500px] lg:w-[600px] h-auto shadow-2xl rounded-3xl flex flex-col justify-center items-center p-8'>
      <div className='text-4xl font-extrabold text-gray-800 mb-4'>Welcome</div>
      <div className='text-lg font-light text-gray-600 mb-10'>Sign up now to get started</div>
      <Input label="Full Name" name="name" placeholder="Enter your full name" />
      <Input label="Email address" name="email" placeholder="Enter your email" />
      <Input label="Password" name="password" type="password" placeholder="Enter your Password" />
     <Button label="Sign-Up" />
     <div>Already have an account? <span className='text-primary cursor-pointer font-bold'>Sign in</span></div>
    </div>
  );
}

export default Form;
