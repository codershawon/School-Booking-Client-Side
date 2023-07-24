import React from "react";
import { useLoaderData } from "react-router-dom";
import Container from "../../components/Container";

const AboutCollege = () => {
  const aboutCollege = useLoaderData();
  const{collegeName, admissionProcess, eventDetails, researchHistory, sportsCategory,eventFacilities,sportsFacilities}=aboutCollege
  return (
    <Container>
      <div className="pt-40 mb-10">
      <div className="card w-[480px] lg:w-[500px] bg-gray-300 shadow-xl mx-auto">
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
                Research History:{" "}
              </span>
            </span>
            <span className="text-[#757575] font-semibold">
              {researchHistory}
            </span>
          </h2>
          <h2>
            <span className="border-s-4 border-[#36d7b7] rounded mb-3">
              <span className="ml-2 font-bold uppercase">Sports Category: </span>
            </span>
            <span className="text-[#757575] font-semibold">{sportsCategory}</span>
          </h2>
          <h2>
            <span className="border-s-4 border-[#36d7b7] rounded mb-3">
              <span className="ml-2 font-bold uppercase">Event Facilities: </span>
            </span>
            <span className="text-[#757575] font-semibold">{eventFacilities}</span>
          </h2>
          <h2>
            <span className="border-s-4 border-[#36d7b7] rounded mb-3">
              <span className="ml-2 font-bold uppercase">Sports Facilities: </span>
            </span>
            <span className="text-[#757575] font-semibold">{sportsFacilities}</span>
          </h2>
      </div>
      </div>
      </div>
    </Container>
  );
};

export default AboutCollege;
