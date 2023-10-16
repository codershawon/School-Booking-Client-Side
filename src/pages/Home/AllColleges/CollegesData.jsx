import React from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
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
    <div className="card w-full xl:h-[750px] mx-auto bg-gray-300 shadow-xl group hover:bg-gradient-to-b hover:from-gray-200 hover:gray-900 transition-colors duration-1000">
      <figure className="px-10 pt-10">
        <img
          src={collegeImage}
          alt="college"
          className="rounded-xl w-full h-full xl:h-[400px]"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <span className="border-s-4 border-[#36d7b7] rounded">
            <span className="ml-2 text-base  font-bold uppercase">
              College Name:{" "}
            </span>
          </span>
          <span className="text-[#757575] text-base  font-semibold">
            {collegeName}
          </span>
        </h2>
        <h2>
          <span className="border-s-4 border-[#36d7b7] rounded mb-3">
            <span className="ml-2 font-bold uppercase text-base ">
              Admission Dates:{" "}
            </span>
          </span>
          <span className="text-[#757575] font-semibold text-base ">
            {admissionDates}
          </span>
        </h2>
        <h2>
          <span className="border-s-4 border-[#36d7b7] rounded mb-3">
            <span className="ml-2 font-bold uppercase text-base ">
              Events:{" "}
            </span>
          </span>
          <span className="text-[#757575] font-semibold text-base ">
            {events}
          </span>
        </h2>
        <h2>
          <span className="border-s-4 border-[#36d7b7] rounded mb-3">
            <span className="ml-2 font-bold uppercase text-base">
              Research History:{" "}
            </span>
          </span>
          <span className="text-[#757575] font-semibold text-base ">
            {researchHistory}
          </span>
        </h2>
        <h2>
          <span className="border-s-4 border-[#36d7b7] rounded mb-3">
            <span className="ml-2 font-bold uppercase text-base ">
              Sports:{" "}
            </span>
          </span>
          <span className="text-[#757575] font-semibold text-base ">
            {sports}
          </span>
        </h2>
        <div className="card-actions justify-end ">
          <Link to={`/allBookings/${_id}`}>
            <button className="btn btn-primary">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CollegesData;
