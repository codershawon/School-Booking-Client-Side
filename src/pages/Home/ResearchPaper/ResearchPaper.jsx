import React from "react";
import { researchesData } from "../../../components/researchesData";
import Researches from "./Researches";
import Container from "../../../components/Container";

const ResearchPaper = () => {
  return (
    <Container>
      <div>
        <h1 className="text-center text-5xl font-bold mt-7 mb-6 ">
          Education Discoveries
        </h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 xl:gap-10 w-[640px] md:w-[768px] lg:w-[1024px] mx-auto">
          {researchesData.map((item) => (
            <Researches item={item} key={item.id} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ResearchPaper;
