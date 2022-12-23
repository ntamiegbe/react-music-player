import React from 'react';

const Error = () => (
  <div className='flex items-center justify-center w-full'>
    <h1 className='font-bold text-2xl text-white mt-2'>{title || "Loading..."}</h1>
  </div>
);

export default Error;
