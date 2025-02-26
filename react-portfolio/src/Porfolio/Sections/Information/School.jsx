import React from "react";

function School() {
  const timelineData = [
    {
      title: "University of Legon Accra, Ghana",
      subtitle: "BACHELOR OF SCIENCE INFORMATION TECHNOLOGY",
      year: "2014-2018",
    },
    {
      title: "National Youth Service Corps",
      subtitle: "Ministry Of Science And Technology, Uyo Akwa Ibom State",
      year: "2019-2020",
    },
    {
      title: "High School",
      subtitle: "Command Secondary School Mbiri",
      year: "2007-2012",
    },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg -translate-x-0 md:-translate-x-4">
      <ul className="space-y-6">
        {timelineData.map((item, index) => (
          <li
            key={index}
            className="flex flex-col sm:flex-row justify-between items-center border-b pb-4"
          >
            {/* Icon and Content */}
            <div className="flex flex-col sm:flex-row items-start space-x-4">
              {/* Icon */}
              {/* Example: <IoSchool className="text-gray-500" /> */}
              <div className="h-4 w-4 bg-orange-500 rounded-full mt-1 sm:mt-0"></div>

              {/* Title and Subtitle */}
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  {item.subtitle}
                </p>
              </div>
            </div>

            {/* Year */}
            <div className="bg-orange-500 text-white text-xs sm:text-sm px-4 py-1 rounded-full mt-2 sm:mt-0">
              {item.year}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default School;
