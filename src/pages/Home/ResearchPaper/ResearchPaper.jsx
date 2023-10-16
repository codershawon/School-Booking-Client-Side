import React from "react";
import { researchesData } from "../../../components/researchesData";
import Researches from "./Researches";
import Container from "../../../components/Container";
import SectionTitle from "../../../hooks/SectionTitle";

const ResearchPaper = () => {
  return (
    <Container>
      <div className="pt-8">
      <SectionTitle heading={"Education Discoveries"}></SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-[1200px] gap-10 mx-auto mt-6">
          {researchesData.map((item) => (
            <Researches item={item} key={item.id} />
          ))}
        </div>
      </div>
   </Container>
  );
};

export default ResearchPaper;
