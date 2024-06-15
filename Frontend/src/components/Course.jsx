import React from "react";
import Cards from "./Cards";
import list from "../../public/list.json";
import { Link } from "react-router-dom";

function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 py-4 ">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-yellow-300">Here! :)</span>
          </h1>
          <p className="mt-12">
            Explore free courses in Java, Python, web dev, data science,
            JavaScript, digital marketing, design, finance, project management,
            ML, cloud, cybersecurity, AI, DevOps, blockchain, game dev,
            robotics, AR, IoT. Learn at your pace, get certificates. Join us
            today! 🚀
          </p>
          <Link
            to="/" // Replace with the appropriate route for your application
            className="mt-6 bg-yellow-300 text-black px-4 py-2 rounded-md hover:bg-yellow-500 duration-300 cursor-pointer inline-block"
          >
            Back
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
