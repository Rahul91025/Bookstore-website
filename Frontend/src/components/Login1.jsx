import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]">
      <div className="bg-[#1c1c1c] p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-4 text-center text-white">
          Log In
        </h2>
        <p className="text-center mb-6 text-gray-400">
          Welcome back! Please login to your account.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full px-4 py-2 bg-[#2c2c2c] border border-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <div className="mb-6 relative">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-4 py-2 bg-[#2c2c2c] border border-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <div className="text-right mt-1">
              <a href="#" className="text-blue-500 hover:underline text-sm">
                Forgot Password?
              </a>
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-[#fc4a1a] to-[#f7b733] text-white font-bold rounded-md hover:bg-gradient-to-r hover:from-[#fc4a1a] hover:to-[#f7b733] transition duration-200"
          >
            Log In
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-gray-400">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Sign Up
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
          <span className="text-white">Log in with Google</span>
        </button>
        <p className="text-xs text-center text-gray-400 mt-4">
          By logging in, you agree to our <br /> Company's{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Terms of Use
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default Login;
