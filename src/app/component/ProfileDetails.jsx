"use client";
import React from "react";

import { useState } from "react";
import { MdEdit, MdAdd } from "react-icons/md";

const ProfileDetails = () => {
  const [completed, setCompleted] = useState(25);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-700">
          Let's start with the basics
        </h2>
        <button
          className="text-gray-600 hover:text-gray-800"
          onClick={() => setCompleted(100)}
        >
          <span className="sr-only">Close</span> &#10005;
        </button>
      </div>
      <p className="text-gray-600 mb-4">Get more by setting up your profile.</p>

      <div className="relative w-full h-2 bg-gray-200 rounded mb-6">
        <div
          className="absolute top-0 left-0 h-full bg-blue-600 rounded"
          style={{ width: `${completed}%` }}
        ></div>
        <div
          className="absolute top-0 left-0 h-full text-white text-xs flex items-center justify-center"
          style={{ width: `${completed}%` }}
        >
          {completed}% Completed
        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-center mb-2">
          <input type="checkbox" className="form-checkbox" />
          <label className="ml-2 text-gray-700">
            Add your Educational Details
          </label>
        </div>
        <div className="flex items-center">
          <input type="checkbox" className="form-checkbox" />
          <label className="ml-2 text-gray-700">
            Learn/network with mentors.
          </label>
        </div>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-2 text-gray-600">Background</h3>
        <div className="mb-4">
          <p className="text-gray-600">Disciplines</p>
          <div className="flex flex-wrap mt-2 space-x-2">
            <span className="bg-white text-gray-800 px-3 py-1 rounded-lg shadow">
              Magnetic resonance imaging
            </span>
            <span className="bg-white text-gray-800 px-3 py-1 rounded-lg shadow">
              Therapeutic medical physics
            </span>
            <span className="bg-white text-gray-800 px-3 py-1 rounded-lg shadow">
              2+
            </span>
          </div>
        </div>
        <div>
          <p className="text-gray-600">Fluent in</p>
          <div className="flex flex-wrap mt-2 space-x-2">
            <span className="bg-white text-gray-800 px-3 py-1 rounded-lg shadow">
              English
            </span>
            <span className="bg-white text-gray-800 px-3 py-1 rounded-lg shadow">
              Hindi
            </span>
            <span className="bg-white text-gray-800 px-3 py-1 rounded-lg shadow">
              Tamil
            </span>
          </div>
        </div>
        <div className="flex justify-end mt-4 space-x-2">
          <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
            <MdAdd size={24} />
          </button>
          <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
            <MdEdit size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
