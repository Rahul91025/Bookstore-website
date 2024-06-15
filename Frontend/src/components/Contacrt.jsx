// src/components/ContactForm.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faPinterest, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

function ContactForm() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-700 shadow-lg rounded-lg flex w-3/4 max-w-5xl">
        {/* Contact Form */}
        <div className="w-2/3 p-8 bg-gray-600 text-white rounded-l-lg">
          <h2 className="text-3xl font-bold mb-4 text-yellow-500">Contact Us</h2>
          <p className="mb-6 text-gray-300">
            Got questions or need assistance? We're here to help! Fill out the form below or reach out to us via phone, email, or our social media channels. We look forward to hearing from you!
          </p>
          <form>
            <div className="mb-4">
              <label className="block text-yellow-500 font-semibold">Name</label>
              <input type="text" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-200 ease-in-out bg-gray-700 text-white border-gray-500" placeholder="Name" />
            </div>
            <div className="mb-4">
              <label className="block text-yellow-500 font-semibold">Email</label>
              <input type="email" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-200 ease-in-out bg-gray-700 text-white border-gray-500" placeholder="Email" />
            </div>
            <div className="mb-4">
              <label className="block text-yellow-500 font-semibold">Message</label>
              <textarea className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-200 ease-in-out bg-gray-700 text-white border-gray-500" rows="5" placeholder="Message"></textarea>
            </div>
            <button type="submit" className="bg-yellow-500 text-gray-800 py-2 px-4 rounded-md hover:bg-black hover:text-yellow-500 transition duration-300 ease-in-out">
              SEND
            </button>
          </form>
        </div>

        {/* Info Section */}
        <div className="w-1/3 bg-gray-800 text-gray-300 p-8 flex flex-col justify-between rounded-r-lg">
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-6 text-yellow-500">Info</h3>
            <p className="flex items-center">
              <FontAwesomeIcon icon={faPhoneAlt} className="mr-2 text-yellow-500" /> 7903344316
            </p>
            <p className="flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-yellow-500" /> rahulgupta109037@gmail.com
            </p>
            <p className="flex items-center">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-yellow-500" /> 2118 Thornridge Cir. Syracuse, Connecticut 35624
            </p>
          </div>
          <div className="mt-8">
            <div className="flex space-x-4 text-lg text-yellow-500">
              <FontAwesomeIcon icon={faTwitter} className="cursor-pointer hover:text-gray-400 transition duration-300" />
              <FontAwesomeIcon icon={faPinterest} className="cursor-pointer hover:text-gray-400 transition duration-300" />
              <FontAwesomeIcon icon={faFacebook} className="cursor-pointer hover:text-gray-400 transition duration-300" />
              <FontAwesomeIcon icon={faInstagram} className="cursor-pointer hover:text-gray-400 transition duration-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
