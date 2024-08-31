import React from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button/Index';

const Form = ({
  isSignInPage  = false,
}) => {
  return (
    <div className='bg-white w-[400px] md:w-[500px] lg:w-[600px] h-auto shadow-2xl rounded-3xl flex flex-col justify-center items-center p-8'>
      <div className='text-4xl font-extrabold text-gray-800 mb-4'>Welcome {isSignInPage && 'back'}</div>
      <div className='text-lg font-light text-gray-600 mb-10'>{isSignInPage ? 'Sign-in to explore' : 'Sign up now to get started'}</div>
      { !isSignInPage && <Input label="Full Name" name="name" placeholder="Enter your full name" />}
      <Input label="Email address" name="email" placeholder="Enter your email" />
      <Input label="Password" name="password" type="password" placeholder="Enter your Password" />
     <Button label={ !isSignInPage ? "Sign-Up" : "Sign-in"} />
     <div>{ !isSignInPage ? 'Already have an account?' : 'Dont have an Account?'} <span className='text-primary cursor-pointer font-bold'> { !isSignInPage ? 'Sign in' : 'Sign up'}</span></div>
    </div>
  );
}

export default Form;
