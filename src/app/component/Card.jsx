"use client";
import React from "react";

const Card = ({ title, subtitle, dateRange, content, readTime, category }) => {
  return (
    <div className="border rounded-lg p-4 mb-4 bg-white shadow">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold text-black">{category}</h3>
        <span className="text-sm text-gray-500">{dateRange}</span>
      </div>
      <h3 className="text-lg font-semibold text-black">{title}</h3>
      <h4 className="text-md text-gray-600 mb-2">{subtitle}</h4>
      <p className="text-sm text-gray-700 mb-2">{content}</p>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-400">{readTime}</span>
      </div>
    </div>
  );
};

export default Card;
