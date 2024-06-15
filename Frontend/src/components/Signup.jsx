import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]">
      <div className="bg-[#1c1c1c] p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-4 text-center text-white">
          Sign Up
        </h2>
        <p className="text-center mb-6 text-gray-400">
          Join our community for exclusive deals and the latest book releases!
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <input
              type="text"
              {...register("username", { required: "Username is required" })}
              placeholder="Username"
              className="w-full px-4 py-2 bg-[#2c2c2c] border border-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            {errors.username && (
              <span className="text-red-500 text-sm">
                {errors.username.message}
              </span>
            )}
          </div>
          <div className="mb-4">
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              placeholder="Email"
              className="w-full px-4 py-2 bg-[#2c2c2c] border border-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="mb-6 relative">
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              placeholder="Password"
              className="w-full px-4 py-2 bg-[#2c2c2c] border border-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}
            <div className="text-right mt-1">
              <Link to="/forgot-password" className="text-blue-500 hover:underline text-sm">
                Forgot Password?
              </Link>
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-[#fc4a1a] to-[#f7b733] text-white font-bold rounded-md hover:bg-gradient-to-r hover:from-[#fc4a1a] hover:to-[#f7b733] transition duration-200"
          >
            Sign Up
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-gray-400">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Log In
            </Link>
          </p>
        </div>
        <div className="my-6 flex items-center justify-center">
          <span className="border-t flex-grow border-gray-600"></span>
          <span className="mx-4 text-gray-400">or</span>
          <span className="border-t flex-grow border-gray-600"></span>
        </div>
        <button className="w-full py-2 bg-[#1c1c1c] border border-gray-600 flex items-center justify-center space-x-2 rounded-md hover:bg-gray-700 transition duration-200">
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google"
            className="w-5 h-5"
          />
          <span className="text-white">Sign up with Google</span>
        </button>
        <p className="text-xs text-center text-gray-400 mt-4">
          By signing up to create an account I accept <br /> Company's{" "}
          <Link to="/terms-of-use" className="text-blue-500 hover:underline">
            Terms of Use
          </Link>{" "}
          and{" "}
          <Link to="/privacy-policy" className="text-blue-500 hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

export default Signup;
