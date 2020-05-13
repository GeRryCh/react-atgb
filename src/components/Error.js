import React from 'react';

const Error = ({ error }) => {
  return (
    <h2 className='error-color i'>
      Oops. An error has occured 🤷🏻‍♀️<br />{error.message}
    </h2>)
}

export default Error;
