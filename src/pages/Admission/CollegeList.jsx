import React from "react";
import { Link } from "react-router-dom";

const CollegeList = ({item}) => {
    const{_id,collegeName}=item
  return (
    <div>
      <li>
        <Link  to={`/admission/${_id}`}>
          <button>{collegeName}</button>
        </Link>
      </li>
    </div>
  );
};

export default CollegeList;
