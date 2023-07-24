import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import Container from "../../../components/Container";
import CollegesData from "./CollegesData";

const AllColleges = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [allColleges, setAllColleges] = useState([]);
  const [filteredColleges, setFilteredColleges] = useState([]);
  const [showAllColleges, setShowAllColleges] = useState(false);

  useEffect(() => {
    fetch("https://school-booking-facilities-server.vercel.app/allBookings")
      .then((res) => res.json())
      .then((data) => {
        setAllColleges(data);
        // Apply search filter initially based on the persisted search query
        handleSearch(data, searchQuery);
      });
  }, [searchQuery]);

  useEffect(() => {
    if (showAllColleges) {
      // If showAllColleges is true, display all colleges
      setFilteredColleges(allColleges);
    } else {
      // Otherwise, apply the search filter
      handleSearch(allColleges, searchQuery);
    }
  }, [showAllColleges]);

  const handleSearch = (data, query) => {
    if (query.trim() !== "") {
      const filteredColleges = data.filter((college) =>
        college.collegeName.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredColleges(filteredColleges.slice(0, 3)); // Limiting to 3 items
    } else {
      // Show all colleges if the search query is empty
      setFilteredColleges(data.slice(0, 3)); // Limiting to 3 items
    }
  };

  const handleShowAllColleges = () => {
    setShowAllColleges(true);
  };

  return (
    <div>
      <Container>
        <h1 className="text-3xl font-bold text-center pt-36 uppercase">All Colleges</h1>
        <div className="w-[350px] mx-auto mt-5">
          <input
            type="text"
            placeholder="Search by college name"
            className="input input-bordered w-full max-w-xs"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <span className="relative right-10">
            <button
              type="submit"
              onClick={() => handleSearch(allColleges, searchQuery)}
            >
              <FaSearch className="text-[#36d7b7]" size={18} />
            </button>
          </span>
        </div>
        {filteredColleges.map((college) => (
          <CollegesData key={college._id} college={college}></CollegesData>
        ))}

        {!showAllColleges && (
          <button
            className="btn btn-ghost bg-[#36d7b7] mx-auto mt-4 block"
            onClick={handleShowAllColleges}
          >
            {" "}
            Show All Colleges
          </button>
        )}
      </Container>
    </div>
  );
};

export default AllColleges;
