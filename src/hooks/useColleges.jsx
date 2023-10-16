import React from 'react';
import { useQuery } from 'react-query';

const useColleges = () => {
  const{data:colleges=[], isLoading:loading,refetch}=useQuery({
    queryKey:["colleges"],
    queryFn:async()=>{
      const res= await fetch(`https://school-booking-facilities-server.vercel.app/mycollege`)
      return res.json()
    }
  })
  return[colleges,loading,refetch]
};

export default useColleges;