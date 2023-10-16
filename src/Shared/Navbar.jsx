import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const {user,logout}=useAuth()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [collegeInfo,setCollegeInfo]=useState([])
  useEffect(() => {
    fetch(`https://school-booking-facilities-server.vercel.app/allBookings`)
      .then((res) => res.json())
      .then((data) => {
        setCollegeInfo(data);
      });
  }, []);
 
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-2 border-b-[1px]">
        <Container>
            <div className="navbar text-[#c4cfde] w-full mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn lg:hidden sm:mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 font-bold text-gray-500 shadow bg-base-100 rounded-box w-52 flex gap-3"
              >
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/colleges">Colleges</Link>
                </li>
                <li>
                <Link to="/admission">Admission</Link>
                </li>
                <li>
                {user && <Link to="/">My College</Link>}
                </li>
              </ul>
            </div>
            <Link to="/">
            <img className="ml-4" width="100" height="100" src="https://i.ibb.co/SczM1zW/Screenshot-2023-10-16-121650-removebg-preview.png" alt="" />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 flex gap-3 font-bold text-gray-500">
              <li>
              <Link to="/">Home</Link>
              </li>
              <li>
              <Link to="/colleges">Colleges</Link>
              </li>
              <li>
              <Link to="/admission">Admission</Link>
              </li>
              <li>
            {user &&   <Link to="/">My College</Link>}
              </li>
            </ul>
          </div>
          <div className="navbar-end">
          <div className="flex flex-row items-center gap-3">
          <div className="hidden md:block px-8">
        {user && (
          <button
            className="disabled:cursor-not-allowed cursor-pointer hover:bg-neutral-100 py-3 px-4 text-gray-500 text-sm font-semibold rounded-full transition"
            disabled={!user}
          >
            {user.displayName}
          </button>
        )}
      </div>
       {/* Dropdown btn */}
       <div
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
      >
        <AiOutlineMenu />
        <div className="hidden md:block">
          <img
            src={
              user && user.photoURL
                ? user.photoURL
                : "https://i.ibb.co/FwG9TmK/placeholder.jpg"
            }
            width="30"
            height="30"
            className="rounded-full"
            alt=""
          />
        </div>
      </div>
    </div>
    {isDropdownOpen && (
        <div className="absolute rounded-xl shadow-md w-[120px] bg-white overflow-hidden right-0 top-12 mt-8 mr-10 md:mr-18 lg:mr-20 text-sm">
<div className="flex flex-col cursor-pointer">
            {user ? (
              <>
                <div
                  onClick={() => {
                    logout();
                  }}
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer text-gray-500"
                >
                  Logout
                </div>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold text-gray-500"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold text-gray-500"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
          </div>
      )}

          </div>
        </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
