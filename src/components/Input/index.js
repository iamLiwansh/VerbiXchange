import React from 'react';

const Input = ({
  label = '',
  name = '',
  type = 'text',
  className = '',
  isRequired = true,
  placeholder = '',
  value = '',
  onChange = () => {},
}) => {
  return (
    <div className="w-full mb-6">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-800 mb-2"
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-4 focus:ring-blue-400 focus:border-transparent block w-full p-3 transition duration-300 ease-in-out transform hover:scale-105 focus:scale-105 ${className}`}
        placeholder={placeholder}
        required={isRequired}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
