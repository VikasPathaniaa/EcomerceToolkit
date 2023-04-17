import React from 'react';

const LinksDetails = ({heading , firstLink , secondLink , thirdLink , fourthLink , }) => {
  return (
        <div>
          <h2 className='font-semibold py-4 '>{heading}</h2>
          <p className='my-2'>{firstLink} </p>
          <p className='my-2'>{secondLink} </p>
          <p className='my-2'>{thirdLink} </p>
          <p className='my-2'>{fourthLink} </p>
        </div>
  );
}

export default LinksDetails;
