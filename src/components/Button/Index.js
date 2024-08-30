import React from 'react'

const Button = ({
    label= 'Button',
    type ="button",
    className = '',
    disabled = false,
}) => {
  return (
    <button type={type} className={`mt-8 w-full bg-blue-500 text-white font-bold py-3 px-4 rounded-xl shadow-lg hover:bg-blue-600 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-50 transition-all duration-300 transform hover:scale-105 ${className}`} disabled = {disabled}>
    {label}
  </button>
  )
}

export default Button