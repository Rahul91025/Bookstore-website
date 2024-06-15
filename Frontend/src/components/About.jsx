// src/components/AboutUs.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faUserFriends, faAward, faHeadset } from '@fortawesome/free-solid-svg-icons';

function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="w-11/12 max-w-7xl text-white">
        {/* About Us Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4 text-yellow-500 flex items-center">
            <FontAwesomeIcon icon={faBookOpen} className="mr-2" />
            About Us
          </h2>
          <p className="mb-6 text-gray-300">
            Welcome to BookStore! We are passionate about books and committed to providing a wide range of titles to readers of all ages and interests. Whether you're looking for the latest bestseller, a timeless classic, or a hidden gem, we have something for everyone. Our knowledgeable staff is here to help you find the perfect book and make your shopping experience enjoyable.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="group bg-gray-800 p-6 rounded-lg text-center transition transform hover:bg-black hover:scale-105 duration-300 ease-in-out">
            <div className="text-6xl mb-4">
              <FontAwesomeIcon icon={faBookOpen} className="text-yellow-500" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-yellow-500">Wide Selection</h3>
            <p className="text-gray-300">
              From fiction to non-fiction, we offer a diverse range of genres to satisfy every reader's curiosity.
            </p>
          </div>
          <div className="group bg-gray-800 p-6 rounded-lg text-center transition transform hover:bg-black hover:scale-105 duration-300 ease-in-out">
            <div className="text-6xl mb-4">
              <FontAwesomeIcon icon={faUserFriends} className="text-yellow-500" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-yellow-500">Community Events</h3>
            <p className="text-gray-300">
              Join us for book signings, author talks, and other events that bring book lovers together.
            </p>
          </div>
          <div className="group bg-gray-800 p-6 rounded-lg text-center transition transform hover:bg-black hover:scale-105 duration-300 ease-in-out">
            <div className="text-6xl mb-4">
              <FontAwesomeIcon icon={faAward} className="text-yellow-500" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-yellow-500">Quality Assurance</h3>
            <p className="text-gray-300">
              We guarantee the quality of our books and offer a satisfaction guarantee on all purchases.
            </p>
          </div>
          <div className="group bg-gray-800 p-6 rounded-lg text-center transition transform hover:bg-black hover:scale-105 duration-300 ease-in-out">
            <div className="text-6xl mb-4">
              <FontAwesomeIcon icon={faHeadset} className="text-yellow-500" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-yellow-500">Customer Support</h3>
            <p className="text-gray-300">
              Our friendly customer support team is here to assist you with any questions or concerns.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
