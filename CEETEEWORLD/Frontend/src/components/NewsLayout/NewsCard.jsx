import React from "react";

const NewsCard = ({ title, description, imageUrl, link, date, category }) => {
  return (
    <div className="relative max-w-md bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group">
      {/* Image Section with Cut Line */}
      <div className="relative overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-52 object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        {/* Slant Cut Line */}
        <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-r from-blue-500 to-blue-700 clip-path-slant"></div>
        <div className="absolute top-3 left-3 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
          {category}
        </div>
      </div>

      {/* Content Section */}
      <div className="relative p-5 transform group-hover:translate-y-1 transition-transform duration-300">
        {/* Vertical Line */}
        <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-200">
          {title}
        </h3>

        {/* Date */}
        <p className="text-xs text-gray-500 mt-1">{date}</p>

        {/* Description */}
        <p className="text-gray-600 text-sm mt-3">
          {description.length > 150
            ? `${description.substring(0, 150)}...`
            : description}
        </p>

        {/* Read More Button */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-6 py-2 bg-blue-500 text-white text-sm font-medium rounded-full hover:bg-blue-600 transition-colors duration-200"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
