import React from 'react';
import Container from '../../components/Container';
import { Link, useLoaderData, useNavigate} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import SectionTitle from '../../hooks/SectionTitle';

const CollegeInfo = () => {
    const{user}=useAuth()
    const college=useLoaderData()
    console.log(college)
    const navigate=useNavigate()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
      const onSubmit=(data)=>{
        const { name,subject, email, number, address, date, image} = data;
        const myCollege={
          name,
          subject, 
          email, 
          number, 
          address, 
          date, 
          image
        }
        console.log(myCollege)
        
        fetch("https://school-booking-facilities-server.vercel.app/myCollege", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(myCollege),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "New College Details added Successful",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate(`/myCollege/${college._id}`);
            }
          })
          .catch((error) => console.log(error));
      };
      
    return (
       <Container>
        <div className='pt-40 pb-6'>
        <SectionTitle heading={"Candidate Admission Form"}></SectionTitle>
       
        <form onSubmit={handleSubmit(onSubmit)}>
      <div className="bg-gray-300 max-w-screen w-full lg:w-[600px] p-7 lg:p-16 rounded-lg mx-auto lg:mx-auto">
        <div className="font-bold">
          <h5>Candidate Name</h5>
          <input
            className="w-full lg:w-[450px] h-[50px] bg-[#F3F3F3] rounded-lg pl-3"
            type="text"
            name="name"
            id=""
            placeholder="Enter your name"
            defaultValue={user?.displayName}
            {...register("name", { required: true })}
          />
          <div>
            {errors.name && (
              <span className="text-red-800">Name is required</span>
            )}
          </div>
        </div>
       
        <div className="font-bold mt-5">
          <h5>Subject</h5>
          <input
            className=" w-full lg:w-[450px] h-[50px] bg-[#F3F3F3] rounded-lg pl-3"
            type="text"
            name="subject"
            id=""
            placeholder="Enter Subject Name"
            {...register("subject", { required: true })}
          />
          <div>
            {errors.subject && (
              <span className="text-red-800">Subject Name is required</span>
            )}
          </div>
        </div>
        <div className="font-bold mt-5">
          <h5>Candidate Email</h5>
          <input
            className="w-full lg:w-[450px] h-[50px] bg-[#F3F3F3] rounded-lg pl-3"
            type="email"
            name="email"
            id=""
            placeholder="Enter Candidate Email"
            defaultValue={user?.email}
            {...register("email", {
              required: true,
            })}
          />

          <div>
            {" "}
            {errors.email?.type === "required" && (
              <span className="text-red-800">Email is required</span>
            )}
          </div>
        </div>
        <div className="font-bold mt-5">
          <h5>Candidate Phone Number</h5>
          <input
            className="w-full lg:w-[450px] h-[50px] bg-[#F3F3F3] rounded-lg pl-3"
            type="number"
            name="number"
            id=""
            placeholder="Enter Candidate Phone Number"
            {...register("number", {
              required: true,
            })}
          />

          <div>
            {" "}
            {errors.number?.type === "required" && (
              <span className="text-red-800">Phone Number is required</span>
            )}
          </div>
        </div>
        <div className="font-bold mt-5">
          <h5>Address</h5>
          <input
            className="w-full lg:w-[450px] h-[50px] bg-[#F3F3F3] rounded-lg pl-3"
            type="text"
            name="address"
            id=""
            placeholder="Enter Address"
            {...register("address", {
              required: true,
            })}
          />
          <div>
            {" "}
            {errors.address?.type === "required" && (
              <span className="text-red-800">Address is required</span>
            )}
          </div>
        </div>
        <div className="font-bold mt-5">
          <h5>Date Of Birth</h5>
          <input
            className=" w-full lg:w-[450px] h-[50px] bg-[#F3F3F3] rounded-lg pl-3"
            type="date"
            name="date"
            id=""
            placeholder="Enter Date Of Birth"
            {...register("date", {
              required: true,
            })}
          />

          <div>
            {" "}
            {errors.date?.type === "required" && (
              <span className="text-red-800">Date of birth is required</span>
            )}
          </div>
        </div>
        <div className="font-bold mt-5 ">
          <h5>Image</h5>
          <input
            type="text"
            name="image"
            placeholder="Enter Image URL"
            className="w-full lg:w-[450px] h-[50px] bg-[#F3F3F3] rounded-lg pl-3"
            {...register("image", { required: true })}
          />
        </div>
      <input
          className="btn mt-5  w-full lg:w-[450px] text-white border-none"
          style={{ backgroundColor: "#36d7b7" }}
          type="submit"
          value="Submit"
        />
        </div>
      </form>
        </div>
       </Container>
    );
};

export default CollegeInfo;