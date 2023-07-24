import React from "react";
import { useLoaderData } from "react-router-dom";

const CollegeDetails = () => {
  const collegeDetails = useLoaderData();
  const{collegeImage, collegeName, admissionProcess, eventDetails, researchWorks, sportsCategory}=collegeDetails
  return (
    <div className="pt-40 mb-10">
        <div className="card w-[480px] lg:w-[500px] bg-gray-300 shadow-xl mx-auto">
      <figure className="px-10 pt-10">
        <img
          src={collegeImage}
          alt="collegeImage"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body text-left">
      <h2 className="card-title">
            <span className="border-s-4 border-[#36d7b7] rounded">
              <span className="ml-2 font-bold uppercase">College Name: </span>
            </span>
            <span className="text-[#757575] font-semibold">{collegeName}</span>
          </h2>
          <h2>
            <span className="border-s-4 border-[#36d7b7] rounded mb-3">
              <span className="ml-2 font-bold uppercase">
                Admission Process:{" "}
              </span>
            </span>
            <span className="text-[#757575] font-semibold">
              {admissionProcess}
            </span>
          </h2>
          <h2>
            <span className="border-s-4 border-[#36d7b7] rounded mb-3">
              <span className="ml-2 font-bold uppercase">Event Details: </span>
            </span>
            <span className="text-[#757575] font-semibold">{eventDetails}</span>
          </h2>
          <h2>
            <span className="border-s-4 border-[#36d7b7] rounded mb-3">
              <span className="ml-2 font-bold uppercase">
                Research Works:{" "}
              </span>
            </span>
            <span className="text-[#757575] font-semibold">
              {researchWorks}
            </span>
          </h2>
          <h2>
            <span className="border-s-4 border-[#36d7b7] rounded mb-3">
              <span className="ml-2 font-bold uppercase">Sports Category: </span>
            </span>
            <span className="text-[#757575] font-semibold">{sportsCategory}</span>
          </h2>
      </div>
    </div>
    </div>
  );
};

export default CollegeDetails;
