import { useState } from "react";
import "./style.css";

export default function Add() {
  const [emoji, setEmoji] = useState("");
  const [feeling, setFeeling] = useState("");
  const [isActive, setisActive] = useState(false);
  const [flag, setFlag] = useState(false);

  function handleSubmit() {
    if (flag) {
      setisActive(true);
    } else {
      setisActive(false);
    }
  }

  function emojiSelector(value1, value2, e) {
    setFlag(true);
    e.stopPropagation();
    setEmoji(value1);
    setFeeling(value2);
  }

  function outOfthebox() {
    setFlag(false);
    removeActive();
  }

  function removeActive() {
    const emojis = document.querySelectorAll(".emoji");
    emojis.forEach((emoji) => {
      emoji.classList.remove("active");
    });
  }

  return (
    <>
      <div className="mainContainer" onClick={() => outOfthebox()}>
        {!isActive ? (
          <div className="container">
            <div
              className="emoji_container"
              onClick={(e) => emojiSelector("😀", "good", e)}
            >
              <div className={emoji === "😀" ? "emoji active" : "emoji"}>
                😀
              </div>
              <div className="feeling">Good</div>
            </div>

            <div
              className="emoji_container"
              onClick={(e) => emojiSelector("🤷‍♀️", "Nutral", e)}
            >
              <div className={emoji === "🤷‍♀️" ? "emoji active" : "emoji"}>
                🤷‍♀️
              </div>
              <div className="feeling">Nutral</div>
            </div>

            <div
              className="emoji_container"
              onClick={(e) => emojiSelector("😢", "Sad", e)}
            >
              <div className={emoji === "😢" ? "emoji active" : "emoji"}>
                😢
              </div>
              <div className="feeling">Sad</div>
            </div>
            <button onClick={handleSubmit} disabled={!flag}>
              submit
            </button>
          </div>
        ) : (
          <div className="container_feed_back">
            <h1>Thank You 💖</h1>
            <div className="final_reply_container">
              <p>
                You selected:<span>{emoji}</span>{" "}
              </p>
              <p>
                Your Feeling is:<span>{feeling}</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
