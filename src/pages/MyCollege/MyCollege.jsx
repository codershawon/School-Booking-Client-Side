import React, { useEffect, useState } from "react";
import Container from "../../components/Container";
import { useLoaderData } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import { FaStar } from "react-icons/fa";
import "@smastrom/react-rating/style.css";
import "./MyCollege.css";
import Swal from "sweetalert2";
import useColleges from "../../hooks/useColleges";
import SectionTitle from "../../hooks/SectionTitle";

const MyCollege = () => {
  const collegeDetails=useLoaderData()
  const{collegeImage, collegeName, collegeRating, numberOfResearches, researchHistory, eventFacilities, admissionProcess, researchWorks}=collegeDetails
  const [colleges, loading, refetch] = useColleges();
  console.log("colleges:", colleges);
  console.log("loading:", loading);
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [reviewText, setReviewText] = useState("");

  const handleRatingChange = (ratingValue) => {
    setRating(ratingValue);
  };
  const handleReviewSubmit = () => {
    const data = {
      rating,
      reviewText,
    };
    fetch(`https://school-booking-facilities-server.vercel.app/myCollege/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Failed to submit review and rating.");
        }
      })
      .then((data) => {
        console.log(data);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Review submitted successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.error(error);
        // Show an error message to the user
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to submit review and rating.",
        });
      });
  };

  return (
    <Container>
      <div className="pt-40 mb-10 w-full md:w-[768px] lg:w-[1024px] mx-auto">
        <div>
        <SectionTitle heading={"College Details"}></SectionTitle>
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
              <img
                className="w-full md:w-[1024px] h-[480px]"
                src={collegeImage}
                alt="Album"
              />
            </figure>
            <div className="card-body">
              <h2 className=" mt-2 font-bold uppercase">
                <span className="border-s-4 border-[#36d7b7] rounded">
                  <span className="ml-2 font-bold uppercase">
                    College Name:{" "}
                  </span>
                </span>
                <span className="text-[#757575] font-semibold">
                  {collegeName}
                </span>
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
                  <span className="ml-2 font-bold uppercase">
                    Event Facilities:{" "}
                  </span>
                </span>
                <span className="text-[#757575] font-semibold">
                  {eventFacilities}
                </span>
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
                  <span className="ml-2 font-bold uppercase">
                    Research Works:{" "}
                  </span>
                </span>
                <span className="text-[#757575] font-semibold">
                  {researchWorks}
                </span>
              </h2>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h1 className="font-bold text-lg">Your overall rating</h1>
          <div className="flex">
            {[...Array(5)].map((star, i) => {
              const ratingValue = i + 1;
              return (
                <label>
                  <input
                    type="radio"
                    name="rating"
                    value={ratingValue}
                    onClick={() => handleRatingChange(ratingValue)}
                  />
                  <FaStar
                    className="star"
                    color={
                      ratingValue <= (hover || rating) ? "#ffc107" : "#ffffff"
                    }
                    size={30}
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(null)}
                  />
                </label>
              );
            })}
          </div>
          <h1 className="font-bold text-lg mt-5">Your review</h1>
          <textarea
            className="bg-gray-200 border-2 w-full h-full border-gray-400 rounded-lg"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          ></textarea>
          <button
            className="btn btn-primary mt-5 w-full bg-[#36d7b7] text-black"
            onClick={handleReviewSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </Container>
  );
};

export default MyCollege;
