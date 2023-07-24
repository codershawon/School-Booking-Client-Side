import React, { useState } from "react";

const Researches = ({ item: { id, image, subject, title, author, description,link } }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <div className="card card-compact w-[500px] md:w-96 lg:w-[500px] bg-gray-300 shadow-xl mx-auto">
        <figure>
          <img className="h-[350px] w-full" src={image} alt="artificial" />
        </figure>
        <div className="card-body text-left">
          <h2 className="card-title">{title}</h2>
          <p className="text-gray-700 font-semibold">
            <span className="ml-2 font-bold uppercase">Author:</span> {author}
          </p>
          <p className="text-gray-700 font-semibold">
            <span className="ml-2 font-bold uppercase">Subject:</span> {subject}
          </p>
          <div className="font-semibold">
            {expanded ? (
              <div className="base overflow-y-auto max-h-40">{description}</div>
            ) : (
              <div className="base line-clamp-3">{description}</div>
            )}
            {!expanded && (
              <span
                className="text-xl font-bold cursor-pointer"
                onClick={toggleExpand}
              >
                Read more
              </span>
            )}
          </div>
          {expanded && (
            <div className="flex flex-col gap-6">
              <span
                className="text-xl font-bold cursor-pointer"
                onClick={toggleExpand}
              >
                Read less
              </span>
            </div>
          )}
          <div className="card-actions justify-end">
           <a href={link} target="_blank"> <button className="btn btn-primary">Download</button></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Researches;
