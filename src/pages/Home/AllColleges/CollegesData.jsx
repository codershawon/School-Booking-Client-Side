import React from "react";
import { Link } from "react-router-dom";
import Container from "../../../components/Container";

const CollegesData = ({ college }) => {
  const {
    _id,
    collegeImage,
    collegeName,
    admissionDates,
    events,
    researchHistory,
    sports,
  } = college;

  return (
    <Container>
      <div className="card lg:card-side w-[500px] mx-auto lg:w-[1000px] bg-gray-300 shadow-xl mt-6 group hover:bg-gradient-to-b hover:from-gray-200 hover:gray-900 transition-colors duration-1000">
        <figure>
          <img
            className="w-full h-[400px] lg:w-[350px] lg:h-[300px] object-cover group-hover:scale-110 duration-300 cursor-pointer"
            src={collegeImage}
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            <span className="border-s-4 border-[#36d7b7] rounded">
              <span className="ml-2 font-bold uppercase">College Name: </span>
            </span>
            <span className="text-[#757575] font-semibold">{collegeName}</span>
          </h2>
          <h2>
            <span className="border-s-4 border-[#36d7b7] rounded mb-3">
              <span className="ml-2 font-bold uppercase">
                Admission Dates:{" "}
              </span>
            </span>
            <span className="text-[#757575] font-semibold">
              {admissionDates}
            </span>
          </h2>
          <h2>
            <span className="border-s-4 border-[#36d7b7] rounded mb-3">
              <span className="ml-2 font-bold uppercase">Events: </span>
            </span>
            <span className="text-[#757575] font-semibold">{events}</span>
          </h2>
          <h2>
            <span className="border-s-4 border-[#36d7b7] rounded mb-3">
              <span className="ml-2 font-bold uppercase">
                Research History:{" "}
              </span>
            </span>
            <span className="text-[#757575] font-semibold">
              {researchHistory}
            </span>
          </h2>
          <h2>
            <span className="border-s-4 border-[#36d7b7] rounded mb-3">
              <span className="ml-2 font-bold uppercase">Sports: </span>
            </span>
            <span className="text-[#757575] font-semibold">{sports}</span>
          </h2>
          <div className="card-actions justify-end">
            <Link to={`/allBookings/${_id}`}>
              <button className="btn btn-primary">Details</button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CollegesData;
