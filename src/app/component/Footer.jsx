"use client";
import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTimesCircle,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
          <div className="flex items-center mb-2">
            <div className="text-2xl font-bold text-blue-600">T</div>
            <div className="text-2xl font-bold text-blue-600">ayog</div>
          </div>
          <p className="mb-2 text-gray-700">Connect with Us</p>
          <div className="flex space-x-4">
            <FaInstagram className="text-black text-2xl cursor-pointer" />
            <FaLinkedin className="text-black text-2xl cursor-pointer" />
            <FaYoutube className="text-black text-2xl cursor-pointer" />
            <FaTimesCircle className="text-black text-2xl cursor-pointer" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row text-center md:text-left space-y-4 md:space-y-0 md:space-x-12">
          <div>
            <h5 className="text-blue-600 font-bold mb-2">Learn More</h5>
            <ul className="text-gray-700">
              <li className="mb-1 cursor-pointer">Thoughts</li>
              <li className="mb-1 cursor-pointer">Job Search</li>
              <li className="mb-1 cursor-pointer">Events</li>
              <li className="mb-1 cursor-pointer">Postings</li>
            </ul>
          </div>
          <div>
            <h5 className="text-blue-600 font-bold mb-2">About</h5>
            <ul className="text-gray-700">
              <li className="mb-1 cursor-pointer">About Us</li>
              <li className="mb-1 cursor-pointer">Contacts</li>
              <li className="mb-1 cursor-pointer">Careers</li>
              <li className="mb-1 cursor-pointer">FAQs</li>
            </ul>
          </div>
          <div>
            <h5 className="text-blue-600 font-bold mb-2">Need Help?</h5>
            <ul className="text-gray-700">
              <li className="mb-1 cursor-pointer">Privacy Statement</li>
              <li className="mb-1 cursor-pointer">Cookie Policy</li>
              <li className="mb-1 cursor-pointer">Terms of Services</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center mt-4 text-gray-500">
        All rights reserved ©Tayog
      </div>
    </footer>
  );
};

export default Footer;
