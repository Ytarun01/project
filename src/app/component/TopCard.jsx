"use client";
import React from "react";
import { FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdEdit, MdShare } from "react-icons/md";
import Image from "next/image";

const TopCard = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <div className="text-gray-600">
          <button className="text-gray-600 hover:text-gray-800">
            <span className="sr-only">Back</span> &#8592; Profile
          </button>
        </div>
        <div className="text-blue-600">
          <a href="#" className="hover:underline">
            Public View
          </a>
        </div>
      </div>

      <div className="flex items-center mb-6">
        <Image
          src="/images/1.png"
          alt="Dr. K. Gautam"
          className="w-24 h-24 rounded-lg"
          width={96}
          height={96}
        />
        <div className="ml-4 mb-0">
          <h2 className="text-gray-600 text-xl font-semibold">Dr. K. Gautam</h2>
          <p className="text-gray-600">
            Medical Physics Professor at IIT Hyderabad
          </p>
          <p className="text-gray-500">Hyderabad, India</p>
          <div className="flex items-center mt-2 space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <FaYoutube size={24} />
            </a>
            <a href="#" className="text-blue-600 hover:underline">
              Google Scholar
            </a>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2 mt-0">Overview</h3>
        <p className="text-gray-700">
          Dr. K. Gautam is a distinguished medical physics professor at IIT
          Hyderabad. With expertise in advanced imaging techniques and radiation
          therapy, my research focuses on enhancing cancer treatment efficacy
          while minimizing side effects. I am dedicated to educating the next
          generation of physicists and healthcare professionals, fostering
          innovation in medical technology for improved patient care.
        </p>
        <button className="text-blue-600 hover:underline mt-2">
          Show more
        </button>
      </div>

      <div className="flex justify-end mt-4 space-x-2">
        <button className="p-2 rounded-full hover:bg-gray-200">
          <MdShare size={24} />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-200">
          <MdEdit size={24} />
        </button>
      </div>
    </div>
  );
};
export default TopCard;
