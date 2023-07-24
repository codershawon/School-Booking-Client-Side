import React, { useEffect, useState } from 'react';
import College from './College';
import Container from '../../components/Container';

const Colleges = () => {
    const [colleges,setColleges]=useState([])
    useEffect(() => {
        fetch("https://school-booking-facilities-server.vercel.app/allBookings")
          .then((res) => res.json())
          .then((data) => {
            setColleges(data);
          });
      }, []);
      console.log(colleges)
    return (
      <Container>
          <div className='mb-10'>
            <h1 className='text-center text-5xl font-bold pt-36 mb-6'>Explore Colleges</h1>
             <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 xl:gap-10 w-[640px] md:w-[768px] lg:w-[1024px] mx-auto">
          {colleges.map((item) => (
            <College item={item} key={item._id}  />
          ))}
        </div>
        </div>
      </Container>
    );
};

export default Colleges;