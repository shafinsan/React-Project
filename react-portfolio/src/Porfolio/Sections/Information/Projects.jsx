import React from "react";

function Projects() {
  const projects = [
    {
      title: "Personal Portfolio Website",
      technologies: "React JS, Bootstrap",
      duration: "2020-2021",
    },
    {
      title: "E-Commerce Website",
      technologies: "React, Node.js, MongoDB",
      duration: "2021-2022",
    },
    {
      title: "Blog Management System",
      technologies: "Django, PostgreSQL",
      duration: "2022-2023",
    },
  ];

  return (
    <div className="flex flex-col sm:flex-row items-start justify-center sm:space-x-6 p-4 sm:p-6 lg:p-8">
      {/* Divider */}
      <div className="h-full w-1 bg-gray-300 mx-4 sm:mx-6 my-4 sm:my-0"></div>

      {/* Projects Section */}
      <div className="w-full space-y-6 sm:space-y-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 p-4 rounded-lg shadow-md bg-white"
          >
            {/* Dot */}
            <div className="h-4 w-4 bg-orange-500 rounded-full mt-1 sm:mt-2"></div>
            {/* Project Details */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-orange-500">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500">
                Technologies Used: {project.technologies}
              </p>
            </div>
            {/* Duration */}
            <div className="ml-auto bg-orange-500 text-white text-xs sm:text-sm px-4 py-1 rounded-full mt-2 sm:mt-0">
              {project.duration}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
