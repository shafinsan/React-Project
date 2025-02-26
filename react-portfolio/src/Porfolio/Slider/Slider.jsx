import React, { useEffect, useState } from "react";
import ima from "../../Image/mkibria.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Slider/slider.css";

const cardDetails = [
  {
    id: 1,
    title: "React Projects",
    description: "Showcase of React projects with smooth UI and animations.",
    image: ima, // Imported image for this card
    githubLink: "https://github.com/yourgithub/react-projects",
    hostLink: "https://yourhost.com/react-projects",
  },
  {
    id: 2,
    title: "MERN E-Commerce",
    description: "Showcase of React projects with smooth UI and animations.",
    image: "https://source.unsplash.com/featured/?ecommerce,technology",
    githubLink: "https://github.com/yourgithub/mern-ecommerce",
    hostLink: "https://yourhost.com/mern-ecommerce",
  },
  {
    id: 3,
    title: "Library Management",
    description: "Showcase of React projects with smooth UI and animations.",
    image: "https://source.unsplash.com/featured/?library,management",
    githubLink: "https://github.com/yourgithub/library-management",
    hostLink: "https://yourhost.com/library-management",
  },
  {
    id: 4,
    title: "Food Dashboard",
    description: "Showcase of React projects with smooth UI and animations.",
    image: "https://source.unsplash.com/featured/?food,analysis",
    githubLink: "https://github.com/yourgithub/food-dashboard",
    hostLink: "https://yourhost.com/food-dashboard",
  },
  {
    id: 5,
    title: "Algorithm Visualizer",
    description: "Showcase of React projects with smooth UI and animations.",
    image: "https://source.unsplash.com/featured/?algorithm,visualization",
    githubLink: "https://github.com/yourgithub/algorithm-visualizer",
    hostLink: "https://yourhost.com/algorithm-visualizer",
  },
];

const CardSlider = () => {
  const [show, setShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setShow(1);
      } else if (width < 1024) {
        setShow(2);
      } else {
        setShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: show,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    focusOnSelect: true,
  };

  return (
    <div className="text-black">
      <Slider {...sliderSettings}>
        {cardDetails.map((card) => (
          <div
            key={card.id}
            className="border-2 shadow-lg flex flex-col justify-center items-center space-y-2 mt-2 p-2"
          >
            <div className="w-32 h-32 mt-1 flex justify-center items-center m-auto">
              <img
                src={ima}
                alt={card.title}
                className="rounded-full border-2"
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="p-1 font-mono my-1 cursor-none">{card.title}</div>
              <div className="text-sm text-center mb-2">{card.description}</div>
              <div className="flex justify-around items-center space-x-3">
                <a
                  href={card.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="px-3 p-1 rounded-lg bg-black text-white active:scale-95">
                    GitHub
                  </button>
                </a>
                <a
                  href={card.hostLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="px-3 p-1 rounded-lg bg-red-600 text-white active:scale-95">
                    Host
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;
