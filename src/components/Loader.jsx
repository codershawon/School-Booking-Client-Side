import React from 'react';
import { RingLoader } from 'react-spinners';

const Loader = () => {
    return (
        <div  className='
        h-[70vh]
        flex 
        flex-col 
        justify-center 
        items-center 
      '>
            <RingLoader size={100} color="#36d7b7" />
        </div>
    );
};

export default Loader;