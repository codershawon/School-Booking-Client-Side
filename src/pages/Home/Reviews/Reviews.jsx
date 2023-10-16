import React from "react";
import Container from "../../../components/Container";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import SectionTitle from "../../../hooks/SectionTitle";

const Reviews = () => {
  return (
    <Container>
      <div className="pt-20">
      <SectionTitle heading={"Parent and Student Reviews"}></SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full xl:w-[1200px] gap-10 mx-auto mt-6 mb-5">
          <div className="card w-full md:w-full  bg-gray-200 mx-auto ">
            <div className="card-body items-center text-center">
              <img
                className="h-24 w-24 rounded-full hover:scale-110 transition-transform duration-300"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                alt=""
              />
              <p>
                <Rating
                  className="mx-auto"
                  style={{ maxWidth: 120 }}
                  value={5}
                  readOnly
                />
              </p>
              <div className="card-actions justify-end">
                <p className="w-full md:w-[300px] lg:w-[480px] mx-40  text-[#757575] font-semibold ml-36 lg:ml-40">
                  <span className="font-bold text-5xl text-[#36d7b7]">“</span>As a proud father of a student studying at Williams College, I couldn't be more impressed with the institution's commitment to academic excellence and nurturing a supportive community. The faculty's dedication to student success and the diverse range of extracurricular opportunities have enriched my child's college experience. I am confident that Williams College is providing my child with an exceptional education and a foundation for a promising future.
                  <br></br>
                  <span className="ml-96 mt-10">
                    {" "}
                    -John D
                    <span className="font-bold text-5xl text-[#36d7b7]">“</span>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="card w-full md:w-full  bg-gray-200 mx-auto  ">
            <div className="card-body items-center text-center">
              <img
                className="h-24 w-24 rounded-full hover:scale-110 transition-transform duration-300"
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                alt=""
              />
              <p>
                <Rating
                  className="mx-auto"
                  style={{ maxWidth: 120 }}
                  value={4.9}
                  readOnly
                />
              </p>
              <div className="card-actions justify-end">
                <p className="w-full md:w-[300px] lg:w-[480px] mx-40   text-[#757575] font-semibold ml-36 lg:ml-40">
                  <span className="font-bold text-5xl text-[#36d7b7]">“</span>As a delighted father of a student enrolled at Amherst College, I am thoroughly impressed with the institution's rigorous academic programs and the personalized attention given to each student. The vibrant campus community fosters a conducive learning environment, and my child has flourished both intellectually and personally. Amherst College has truly exceeded our expectations, and I am grateful for the exceptional education it offers to my child.<br></br>
                  <span className="ml-96 mt-10">
                    {" "}
                    -Mark R
                    <span className="font-bold text-5xl text-[#36d7b7]">“</span>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="card w-full md:w-full bg-gray-200 mx-auto ">
            <div className="card-body items-center text-center">
              <img
                className="h-24 w-24 rounded-full hover:scale-110 transition-transform duration-300"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                alt=""
              />
              <p>
                <Rating
                  className="mx-auto"
                  style={{ maxWidth: 120 }}
                  value={4.8}
                  readOnly
                />
              </p>
              <div className="card-actions justify-end">
                <p className="w-full md:w-[300px] lg:w-[480px] mx-40   text-[#757575] font-semibold ml-36 lg:ml-40">
                  <span className="font-bold text-5xl text-[#36d7b7]">“</span>As a proud father of a student studying at Swarthmore College, I am amazed by the depth of intellectual engagement and the strong sense of community on campus. The dedicated faculty and diverse student body create a stimulating learning environment, nurturing critical thinking and personal growth. Swarthmore College has provided my child with a transformative educational experience, and I couldn't be more satisfied with the choice.<br></br>
                  <span className="ml-96 mt-10">
                    {" "}
                    -David L
                    <span className="font-bold text-5xl text-[#36d7b7]">“</span>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="card  w-full md:w-full bg-gray-200 mx-auto ">
            <div className="card-body items-center text-center">
              <img
                className="h-24 w-24 rounded-full hover:scale-110 transition-transform duration-300"
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
                alt=""
              />
              <p>
                <Rating
                  className="mx-auto"
                  style={{ maxWidth: 120 }}
                  value={4.9}
                  readOnly
                />
              </p>
              <div className="card-actions justify-end">
                <p className="w-full md:w-[300px] lg:w-[480px] mx-40  text-[#757575] font-semibold ml-36 lg:ml-40">
                  <span className="font-bold text-5xl text-[#36d7b7]">“</span>
                  As a student at Pomona College, I am truly grateful for the exceptional academic opportunities and supportive learning environment. The passionate professors and small class sizes allow for meaningful interactions and foster a love for learning. The campus community is vibrant and inclusive, offering numerous extracurricular activities and opportunities for personal growth. Pomona College has exceeded my expectations, and I am proud to be a part of this enriching educational journey<br></br>
                  <span className="ml-96 mt-10">
                    {" "}
                    -Sarah K
                    <span className="font-bold text-5xl text-[#36d7b7]">“</span>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="card w-full md:w-full bg-gray-200 mx-auto ">
            <div className="card-body items-center text-center">
              <img
                className="h-24 w-24 rounded-full hover:scale-110 transition-transform duration-300"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt=""
              />
              <p>
                <Rating
                  className="mx-auto"
                  style={{ maxWidth: 120 }}
                  value={4.7}
                  readOnly
                />
              </p>
              <div className="card-actions justify-end">
                <p className="w-full md:w-[300px] lg:w-[480px] mx-40  text-[#757575] font-semibold ml-36 lg:ml-40">
                  <span className="font-bold text-5xl text-[#36d7b7]">“</span>As an aspiring student, I am thrilled to be studying at Haverford College. The academic rigor and intellectual stimulation are unparalleled, and the distinguished faculty inspire and challenge me to excel. The diverse and vibrant campus community fosters a sense of belonging, and the multitude of resources and opportunities available have enriched my college experience. Harvard College has exceeded my expectations, and I feel privileged to be part of this prestigious institution, preparing me for a promising future.<br></br>
                  <span className="ml-96 mt-10">
                    {" "}
                    -Emily S
                    <span className="font-bold text-5xl text-[#36d7b7]">“</span>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="card  w-full md:w-full bg-gray-200 mx-auto ">
            <div className="card-body items-center text-center">
              <img
                className="h-24 w-24 rounded-full hover:scale-110 transition-transform duration-300"
                src="https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                alt=""
              />
              <p>
                <Rating
                  className="mx-auto"
                  style={{ maxWidth: 120 }}
                  value={4.7}
                  readOnly
                />
              </p>
              <div className="card-actions justify-end">
                <p className="w-full md:w-[300px] lg:w-[480px] mx-40  text-[#757575] font-semibold ml-36 lg:ml-40">
                  <span className="font-bold text-5xl text-[#36d7b7]">“</span>As a student at Colby College, I am incredibly grateful for the enriching and supportive environment it provides. The faculty's dedication to teaching and mentorship has empowered me to explore my academic interests and achieve personal growth. The tight-knit community fosters meaningful connections and a sense of belonging. Additionally, the vast array of extracurricular activities and opportunities have allowed me to develop well-rounded skills and experiences. Colby College has truly been a transformative experience, and I am proud to call it my academic home.<br></br>
                  <span className="ml-96 mt-10">
                    {" "}
                    -Olivia M
                    <span className="font-bold text-5xl text-[#36d7b7]">“</span>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Reviews;
