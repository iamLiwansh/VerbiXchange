import React from 'react'
import Avatar from '../../assets/avatar.svg'

const Dashboard
 = () => {
  return (
    <div className='w-screen flex'>
        <div className='w-[25%] h-screen bg-secondary'>
            <div className='flex justify-center items-center my-8'>
            <img src={Avatar} alt='user' height={50} width={50}></img>
            <div className='ml-4'>
            <h1 className='text-2xl'>Liwansh Saini</h1>
            <h1 className="text-lg font-light">my account</h1>
            </div>
            </div>
            <hr/>
        </div>
        <div className='w-[50%] h-screen'></div>
        <div className='w-[25%] h-screen'></div>
    </div>
  )
}

export default Dashboard
