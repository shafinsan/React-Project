import React from "react";

function WorkHistory() {
  const workHistoryData = [
    {
      title: "Software Engineer",
      company: "Tech Innovators Ltd.",
      duration: "2020 - Present",
      description:
        "Developed scalable web applications and collaborated with cross-functional teams to deliver innovative software solutions.",
    },
    {
      title: "Frontend Developer",
      company: "Creative Coders Inc.",
      duration: "2018 - 2020",
      description:
        "Designed and implemented user-friendly web interfaces using React and modern JavaScript frameworks.",
    },
    {
      title: "Intern Developer",
      company: "Startup Solutions",
      duration: "2017 - 2018",
      description:
        "Gained hands-on experience in software development and contributed to several internal tools for process automation.",
    },
  ];

  return (
    <div className="flex flex-col sm:flex-row items-start justify-center sm:space-x-6 p-4 sm:p-6 lg:p-8">
      {/* Divider */}
      <div className="h-full w-1 bg-gray-300 mx-4 sm:mx-6 my-4 sm:my-0"></div>

      {/* Work History Section */}
      <div className="w-full space-y-8">
        {workHistoryData.map((work, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 p-4 rounded-lg shadow-md bg-white"
          >
            {/* Dot */}
            <div className="h-4 w-4 bg-orange-500 rounded-full mt-1"></div>
            {/* Content */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-orange-500">
                {work.title}
              </h3>
              <h4 className="text-gray-600">{work.company}</h4>
              <p className="text-xs sm:text-sm text-gray-500">{work.duration}</p>
              <p className="text-sm sm:text-base text-gray-700">{work.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkHistory;
