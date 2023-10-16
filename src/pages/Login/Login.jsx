import React, { useRef, useState } from "react";
import Container from "../../components/Container";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { Toaster, toast } from "react-hot-toast";
import loginLottie from "./Login.json"
import Lottie from "lottie-react";
const Login = () => {
    const { signInUser,signInWithGoogle,resetPassword,setLoading } = useAuth();
    const [control, setControl] = useState(false);
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const emailRef=useRef()
    const handleLogin = (e) => {
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      signInUser(email, password)
        .then((result) => {
          const user = result.user;
          console.log(user);
          if (user) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Sign In in school booking website successful!",
              showConfirmButton: false,
              timer: 1500,
            });
            form.reset();
            navigate(from, { replace: true });
          }
        })
        .catch((error) => console.log(error));
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
  //Handle Reset
const handleReset = () => {
    const email = emailRef.current.value;
  
    resetPassword(email)
      .then(() => {
        toast.success("Please check your email for reset link");
      })
      .catch(err => {
        setLoading(false);
        console.log(err.message);
        toast.error(err.message);
      });
  
    return console.log(email);
  };
  return(
    <Container>
    {" "}
    <div>
      {/* <Helmet> */}
      <title>School Booking || SignIn</title>
      {/* </Helmet> */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-5 pr:0 xl:pr-52 mt-20 ">
      <Lottie className="w-full lg:h-[600px] mx-auto" animationData={loginLottie} />
      <div
          style={{
            border: "2px solid gray",
            borderRadius: "10px",
            padding: "20px",
          }}
          className="w-full md:w-[500px] mx-auto"
        >
          <form onSubmit={handleLogin}>
            <div className="mb-8 text-center w-full md:w-[450px] ">
              <h1 className="my-3 text-4xl font-bold">Log In</h1>
              <p className="text-sm text-gray-400">
                Sign in to access your account
              </p>
            </div>
            <div className="font-bold mt-5">
            <h5 htmlFor='email'>
                Email
              </h5>
              <input
                ref={emailRef}
                className="w-full md:w-[450px] h-[50px] bg-[#F3F3F3] rounded-lg pl-3"
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                data-temp-mail-org='0'
              />
            </div>
            <div className="font-bold mt-5">
              <h5>Password</h5>
              {control ? (
                <>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full md:w-[450px]  h-[50px] bg-[#F3F3F3] rounded-lg pl-3"
                    type="text"
                    name="password"
                    id=""
                    placeholder="Enter your password"
                  />
                  <span
                    onClick={() => setControl(!control)}
                    className="relative left-[420px] bottom-8"
                  >
                    <FaEye />
                  </span>
                </>
              ) : (
                <>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full md:w-[450px] h-[50px] bg-[#F3F3F3] rounded-lg pl-3"
                    type="password"
                    name="password"
                    id=""
                    placeholder="Enter your password"
                  />
                  <span
                    onClick={() => setControl(!control)}
                    className="relative left-[420px] bottom-8"
                  >
                    <FaEyeSlash />
                  </span>
                </>
              )}
            </div>
            <button
                className="btn btn-primary mt-5 w-full md:w-[450px] bg-[#36d7b7] text-black"
              >
                Continue
              </button>
          </form>
          <div className='space-y-1'>
          <button onClick={handleReset} className='text-sm hover:underline hover:text-[#36d7b7] text-gray-400'>
            Forgot password?
          </button>
        </div>
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
        Don't have an account yet? 
          <Link
            to='/register'
            className='hover:underline hover:text-[#36d7b7] text-gray-600'
          >
             SignUp
          </Link>
          .
        </p>
        </div>
      </div>
    </div>
<Toaster/>
  </Container>
  )
};

export default Login;