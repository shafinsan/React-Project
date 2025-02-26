import React from "react";

function Interests() {
  const interestsData = [
    {
      title: "Teaching",
      description:
        "Apart from being a tech enthusiast and a code writer, I also love to teach people what I know simply because I believe in sharing.",
    },
    {
      title: "Music",
      description:
        "Listening to soothing music is something I can never compromise with. Skimming through Spotify's pop songs charts is at times the best stress reliever that I can get my hands on.",
    },
    {
      title: "Competitive Gaming",
      description:
        "I like to challenge my reflexes a lot while competing in football games, pushing the rank, and having interactive gaming sessions excites me the most.",
    },
  ];

  return (
    <div className="flex flex-col sm:flex-row items-start justify-center sm:space-x-6 p-4 sm:p-6 lg:p-8">
      {/* Divider */}
      <div className="h-full w-1 bg-gray-300 mx-4 sm:mx-6 my-4 sm:my-0"></div>

      {/* Interests Section */}
      <div className="w-full space-y-8">
        {interestsData.map((interest, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 p-4 rounded-lg shadow-md bg-white"
          >
            {/* Dot */}
            <div className="h-4 w-4 bg-orange-500 rounded-full mt-1"></div>
            {/* Content */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-orange-500">
                {interest.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-700">{interest.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Interests;
