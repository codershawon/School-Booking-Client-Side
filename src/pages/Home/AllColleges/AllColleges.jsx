import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import CollegesData from "./CollegesData";
import Container from "../../../components/Container";
import SectionTitle from "../../../hooks/SectionTitle";

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
        handleSearch(data, searchQuery);
      });
  }, [searchQuery]);

  useEffect(() => {
    if (showAllColleges) {
      setFilteredColleges(allColleges);
    } else {
      handleSearch(allColleges, searchQuery);
    }
  }, [showAllColleges]);

  const handleSearch = (data, query) => {
    if (query.trim() !== "") {
      const filteredColleges = data.filter((college) =>
        college.collegeName.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredColleges(filteredColleges.slice(0, 3));
    } else {
      setFilteredColleges(data.slice(0, 4));
    }
  };

  const handleToggleColleges = () => {
    setShowAllColleges(!showAllColleges);
  };

  return (
    <Container>
      <div className="mx-auto pt-40">
        <SectionTitle heading={"All Colleges"}></SectionTitle>
        <div className="w-[350px] mx-auto mt-5 text-center">
          <input
            type="text"
            placeholder="Search by college name"
            className="input input-bordered w-full max-w-xs"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <span className="relative right-10">
            <button type="submit" onClick={() => handleSearch(allColleges, searchQuery)}>
              <FaSearch className="text-[#36d7b7]" size={18} />
            </button>
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full xl:w-[1200px] gap-10 mx-auto mt-6">
          {filteredColleges.map((college) => (
            <div key={college._id} className="p-0 m-0">
              <CollegesData college={college}></CollegesData>
            </div>
          ))}
        </div>
        <button
          className="btn btn-ghost bg-[#36d7b7] mx-auto mt-4 block"
          onClick={handleToggleColleges}
        >
          {showAllColleges ? "Show Less Colleges" : "Show All Colleges"}
        </button>
      </div>
    </Container>
  );
};

export default AllColleges;

