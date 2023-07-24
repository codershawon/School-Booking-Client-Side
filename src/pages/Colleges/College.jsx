import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const College = ({ item }) => {
  const {
    _id,
    collegeImage,
    collegeName,
    collegeRating,
    numberOfResearches,
    admissionDates,
  } = item;
  return (
    <div className="card w-[500px] md:w-[380px] lg:w-[500px] bg-gray-300 shadow-xl mx-auto">
      <figure className="px-10 pt-10">
        <img
          src={collegeImage}
          alt="college"
          className="rounded-xl h-[350px]"
        />
      </figure>
      <div className="card-body text-left w-[500px] md:w-[450px] lg:w-[500px]">
        <h2 className="card-title">
          <span className="border-s-4 border-[#36d7b7] rounded">
            <span className="ml-2 font-bold uppercase">College Name: </span>
          </span>
          <span className="text-[#757575] font-semibold">{collegeName}</span>
        </h2>
        <div className="flex items-center">
          <h2>
            <span className="border-s-4 border-[#36d7b7] rounded mb-3">
              <span className="ml-2 mt-2 font-bold uppercase">
                College Rating:{" "}
              </span>
            </span>
          </h2>
          <span className="ml-2">
            <Rating
              className="mx-auto"
              style={{ maxWidth: 120 }}
              value={collegeRating}
              readOnly
            />
          </span>
        </div>
        <h2>
          <span className="border-s-4 border-[#36d7b7] rounded mb-3">
            <span className="ml-2 font-bold uppercase">
              Number Of Researches:{" "}
            </span>
          </span>
          <span className="text-[#757575] font-semibold">
            {numberOfResearches}
          </span>
        </h2>
        <h2>
          <span className="border-s-4 border-[#36d7b7] rounded mb-3">
            <span className="ml-2 font-bold uppercase">Admission Dates: </span>
          </span>
          <span className="text-[#757575] font-semibold">{admissionDates}</span>
        </h2>
        <div className="card-actions justify-end md:justify-start lg:justify-end ">
          <Link to={`/colleges/${_id}`}>
            <button className="btn btn-primary">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default College;
