import React from "react";

function ProgrammingSkills() {
  const skills = [
    { name: "React Native", proficiency: 80 },
    { name: "Node JS", proficiency: 70 },
    { name: "Core Java", proficiency: 85 },
    { name: "CSS", proficiency: 90 },
    { name: "Express JS", proficiency: 75 },
    { name: "Mongo DB", proficiency: 60 },
    { name: "HTML", proficiency: 95 },
  ];

  const project = {
    title: "Personal Portfolio Website",
    technologies: "React JS, Bootstrap",
    duration: "2020-2021",
  };

  return (
    <div className="flex flex-col sm:flex-row items-start justify-center sm:space-x-8 p-4 sm:p-6 lg:p-8">
      {/* Divider */}
      <div className="h-full w-1 bg-gray-300 mx-4 sm:mx-6 my-4 sm:my-0"></div>

      {/* Skills and Projects Section */}
      <div className="w-full space-y-6 sm:space-y-8">
        {/* Skills Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-2 p-4 rounded-lg shadow-md bg-white">
              {/* Skill Name */}
              <div className="flex items-center space-x-2">
                <div className="h-4 w-4 bg-orange-500 rounded-full"></div>
                <span className="text-sm sm:text-base text-orange-500 font-semibold">{skill.name}</span>
              </div>
              {/* Progress Bar */}
              <div className="w-full bg-gray-200 h-2 rounded">
                <div
                  className="bg-orange-500 h-2 rounded"
                  style={{ width: `${skill.proficiency}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Projects Section */}
        <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-x-4 sm:space-y-0 p-1">
          <div className="h-4 w-4 bg-orange-500 rounded-full mt-1"></div>
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-orange-500">{project.title}</h3>
            <p className="text-xs sm:text-sm text-gray-500">Technologies Used: {project.technologies}</p>
          </div>
          <div className="ml-auto bg-orange-500 text-white text-xs sm:text-sm px-4 py-1 rounded-full">
            {project.duration}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgrammingSkills;
