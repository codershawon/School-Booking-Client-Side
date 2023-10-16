import React, { useEffect, useState } from 'react';
import College from './College';
import Container from '../../components/Container';
import SectionTitle from '../../hooks/SectionTitle';

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
          <div className='pt-40'>
          <SectionTitle heading={"Explore Colleges"}></SectionTitle>

             <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 xl:gap-10 w-full md:w-[768px] lg:w-[1024px] mx-auto">
          {colleges.map((item) => (
            <College item={item} key={item._id}  />
          ))}
        </div>
        </div>
      </Container>
    );
};

export default Colleges;