import React, { useEffect, useState } from "react";
import video from "..//component/video.mp4";
import "./style.css";
const App = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [char, setChar] = useState(0);
  const [delay, setDelay] = useState(200);
  useEffect(() => {
    const words = ["Hello", "World", "Typewriter Effect"];
    let time = setTimeout(() => {
      if (isTyping) {
        if (char < words[currentIndex].length) {
          setDisplayedText(displayedText + words[currentIndex].charAt(char));
          setChar(char + 1);
        } else {
          setIsTyping(false);
          setDelay(2000);
        }
      } else {
        if (char > 0) {
          setDisplayedText(displayedText.substring(0, char - 1));
          setChar(char - 1);
          setDelay(200);
        } else {
          setIsTyping(true);
          setCurrentIndex(
            currentIndex >= words.length - 1 ? 0 : currentIndex + 1
          );
          setDelay(1000);
        }
      }
    }, delay);
    return () => clearTimeout(time);
  }, [displayedText, currentIndex, isTyping, char, delay]);
  return (
    <header>
      <video src={video} autoPlay muted loop></video>
      <div className="text">
        <h1>
          Java Script is : <span>{displayedText}</span>
        </h1>
      </div>
    </header>
  );
};

export default App;
