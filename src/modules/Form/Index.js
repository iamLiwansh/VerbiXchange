import React, { useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button/Index';

const Form = ({ isSignInPage = true }) => {
  const [data, setData] = useState({
    ...(!isSignInPage && {
      fullName: '',
    }),
    email: '',
    password: '',
  });

  return (
    <div className="bg-gradient-to-r from-white to-gray-100 w-[400px] md:w-[500px] lg:w-[600px] h-auto shadow-2xl rounded-3xl flex flex-col justify-center items-center p-8">
      <div className="text-4xl font-extrabold text-gray-800 mb-6">
        Welcome {isSignInPage && 'back'}
      </div>
      <div className="text-lg font-light text-gray-600 mb-8">
        {isSignInPage ? 'Sign in to explore' : 'Sign up now to get started'}
      </div>
      <form
        className="flex flex-col items-center w-full"
        onSubmit={() => console.log('Submitted')}
      >
        {!isSignInPage && (
          <Input
            label="Full Name"
            name="name"
            placeholder="Enter your full name"
            value={data.fullName}
            onChange={(e) =>
              setData({ ...data, fullName: e.target.value })
            }
          />
        )}
        <Input
          label="Email address"
          name="email"
          placeholder="Enter your email"
          type="email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <Input
          label="Password"
          name="password"
          type="password"
          placeholder="Enter your Password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <Button type="submit" label={!isSignInPage ? 'Sign Up' : 'Sign in'} />
      </form>
      <div className="mt-4 text-gray-700">
        {!isSignInPage ? 'Already have an account?' : "Don't have an account?"}{' '}
        <span className="text-blue-500 cursor-pointer font-bold hover:text-blue-700 transition duration-300">
          {!isSignInPage ? 'Sign in' : 'Sign up'}
        </span>
      </div>
    </div>
  );
};

export default Form;
