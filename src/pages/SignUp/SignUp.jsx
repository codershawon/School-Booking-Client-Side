import React, { useContext, useRef, useState } from "react";
import Container from "../../components/Container";
import { FcGoogle } from 'react-icons/fc'
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../Providers/AuthProviders";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import signUpLottie from "./SignUp.json"
import Lottie from "lottie-react";
const SignUp = () => {
  const { createUser, updateUserProfile,signInWithGoogle} = useAuth();

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const password = useRef({});
  password.current = watch("password", "");
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        updateUserProfile(data.name, data.photoURL).then(()=>{
          const saveUser={name:data.name,email:data.email}
          fetch("https://school-booking-facilities-server.vercel.app/user",{
              method:"POST",
              headers:{
                "Content-Type":"application/json"
              },
              body:JSON.stringify(saveUser)
          })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User profile updated successfully",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/login");
            }
          });
      })
      .catch((error) => console.log(error));
    })
  };
  
  // Handle google signin
  const handleGoogleSignIn = () => {
    signInWithGoogle().then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);

      const saveUser = { name: loggedUser.displayName, email: loggedUser.email };
      fetch("https://school-booking-facilities-server.vercel.app/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(saveUser),
      })
        .then((res) => res.json())
        .then(() => {
          Swal.fire({
            icon: "success",
            title: "Sign-in Successful",
            text: "You have successfully signed in with Google!",
          }).then(() => {
            navigate(from, { replace: true });
          });
        })
        .catch((error) => {
          console.error("Error saving user:", error);
          Swal.fire({
            icon: "error",
            title: "Sign-in Failed",
            text: "Failed to sign in with Google. Please try again.",
          });
        });
    });
  };

  return (
    <Container>
      <div className="min-h-screen">
        {/* <Helmet>
          <title>School Booking || SignUP</title>
        </Helmet> */}
        <div className="flex flex-col lg:flex-row md:px-8 items-center justify-center gap-6 mt-20 pr:0 xl:pr-52">
        <Lottie className="w-full lg:h-[600px] mx-auto" animationData={signUpLottie} />
          <div
            style={{
              border: "2px solid gray",
              borderRadius: "10px",
              padding: "20px",
            }}
            className="w-full md:w-[500px] mx-auto"
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1
                className="text-center text-3xl font-bold mb-4 "
              >
                SignUP
              </h1>
              <p className="text-center font-semibold text-gray-600">Welcome to School Booking</p>
              <div className="font-bold mt-5">
              <h5>Name</h5>
              <input
                className="w-full lg:w-[450px] h-[50px] bg-[#F3F3F3] rounded-lg pl-3"
                type="text"
                name="name"
                id=""
                placeholder="Enter your name"
                {...register("name", { required: true })}
              />
              <div>
                {errors.name && (
                  <span className="text-red-800">Name is required</span>
                )}
              </div>
            </div>
            <div className="font-bold mt-5">
              <h5>Email</h5>
              <input
                className="w-full lg:w-[450px] h-[50px] bg-[#F3F3F3] rounded-lg pl-3"
                type="email"
                name="email"
                id=""
                placeholder="Enter your email"
                {...register("email", { required: true })}
              />
              <div>
                {errors.email && (
                  <span className="text-red-800">Email is required</span>
                )}
              </div>
            </div>
            <div className="font-bold mt-5">
              <h5>Password</h5>
              <input
                className="w-full lg:w-[450px] h-[50px] bg-[#F3F3F3] rounded-lg pl-3"
                type="password"
                name="password"
                id=""
                placeholder="Enter your password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /^(?=.*[A-Z])(?=.*[!@#$&*]).{6,20}$/,
                })}
              />

              <div>
                {" "}
                {errors.password?.type === "required" && (
                  <span className="text-red-800">Password is required</span>
                )}
              </div>
              {errors.password?.type === "minLength" && (
                <span className="text-red-800">
                  Password must be 6 characters
                </span>
              )}
              {errors.password?.type === "maxLength" && (
                <span className="text-red-800">
                  Password must be less than 20 characters
                </span>
              )}
              {errors.password?.type === "pattern" && (
                <span className="text-red-800">
                  Password must have one Capital Letter & one special case
                  letter
                </span>
              )}
            </div>
            <div className="font-bold mt-5">
              <h5>Confirm Password</h5>
              <input
                className="w-full lg:w-[450px] h-[50px] bg-[#F3F3F3] rounded-lg pl-3"
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                {...register("confirmPassword", {
                  required: true,
                  validate: (value) =>
                    value === password.current || "Passwords do not match",
                })}
              />

              <div>
                {" "}
                {errors.confirmPassword && (
                  <span className="text-red-800">{errors.confirmPassword.message}</span>
                )}
              </div>
            </div>
              <button
                className="btn btn-primary mt-5 w-full lg:w-[450px] bg-[#36d7b7] text-black"
              >
                Continue
              </button>
            </form>
            <div className='flex items-center pt-4 space-x-1'>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          <p className='px-3 text-sm dark:text-gray-400'>
            Signup with social accounts
          </p>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
        </div>
        <div
          onClick={handleGoogleSignIn}
          className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'
        >
          <FcGoogle size={32} />

          <p className="font-semibold text-gray-600">Continue with Google</p>
        </div>
        <p className='px-6 text-sm text-center font-semibold text-gray-600'>
          Already have an account?{' '}
          <Link
            to='/login'
            className='hover:underline hover:text-[#36d7b7] text-gray-600'
          >
            Login
          </Link>
          .
        </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SignUp;
