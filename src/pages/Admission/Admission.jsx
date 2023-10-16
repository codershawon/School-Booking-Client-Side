import React, { useEffect, useState } from "react";
import Container from "../../components/Container";
import { RiArrowDropDownLine } from "react-icons/ri";
import CollegeList from "./CollegeList";
import SectionTitle from "../../hooks/SectionTitle";
const Admission = () => {
  const [admissionInfo, setAdmissionInfo]=useState([])
  useEffect(() => {
    fetch("https://school-booking-facilities-server.vercel.app/allBookings")
      .then((res) => res.json())
      .then((data) => {
        setAdmissionInfo(data);
      });
  }, []);
  console.log(admissionInfo)
  return (
    <Container>
      <div className="pt-40 mb-[480px] w-[500px] mx-auto">
      <SectionTitle heading={"College Admission Form"}></SectionTitle>
        <div className="w-[370px]  mx-auto">
            <input
              id="category"
              className="bg-gray-300 w-[350px] h-[50px] rounded-lg pl-3"
              type="text"
              name="category"
              placeholder="Williams College"
              required
            />
        <div className="dropdown dropdown-hover relative right-5">
          <RiArrowDropDownLine />
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-slate-100 rounded-box w-52"
          >
          {admissionInfo.map((item) => (
            <CollegeList item={item} key={item._id}  />
          ))}
          </ul>
        </div>
      </div>
      </div>
    </Container>
  );
};

export default Admission;

