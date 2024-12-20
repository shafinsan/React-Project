import React, { useEffect, useState } from "react";
import "./style.css";
function Add() {
  const [show, setShow] = useState(false);
  let [user, setValue] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  let [sub, setSub] = useState(false);

  function change(e) {
    setValue({ ...user, [e.target.name]: e.target.value });
  }

  function singHandle() {
    setShow(true);
  }
  function close() {
    setShow(false);
  }
  function submit() {
    let i = document.querySelectorAll("input");
    let flag = false;
    i.forEach((li) => {
      if (li.className.includes("invalid")) {
        flag = true;
        return;
      }
    });
    if (flag) {
      return;
    }
    setSub(true);
  }

  useEffect(() => {
    if (sub) {
      setShow(false);
      setSub(false);
    }
  }, [sub]);
  useEffect(() => {
    let labels = document.querySelectorAll("form .input label");
    labels.forEach((li) => {
      let currentlabel = li.textContent;
      li.textContent = "";
      let data = Array.from(currentlabel);
      data.forEach((letter, i) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.style.transitionDelay = `${i * 50}ms`;
        li.appendChild(span);
      });
    });
  }, [show]);

  useEffect(() => {
    let allActive = document.querySelectorAll("input");
    allActive.forEach((li) => {
      li.addEventListener("click", () => {
        li.classList.add("active");
      });
    });
  }, [show]);
  return (
    <div className="container">
      {!show ? (
        <div className="highlight">
          <h1>Welcome to real world</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
            recusandae similique magnam quia vitae rerum neque. Similique nisi,
            pariatur quae distinctio eum alias sapiente id odio? Accusamus unde
            fugit vero. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quis eaque doloremque inventore nobis minus, libero debitis possimus
            sit at eveniet quam laboriosam vitae dolores, quisquam officia quasi
            et ab reprehenderit?
          </p>
          <button onClick={singHandle}>Sign Up</button>
        </div>
      ) : (
        <div className="from_container">
          <div className="cross" onClick={close}>
            &times;
          </div>
          <button className="submit" onClick={submit}>
            submit
          </button>
          <form action="">
            <div className="input">
              <input
                type="name"
                name="name"
                onChange={(e) => change(e)}
                className={user.name.length <= 4 ? "invalid" : ""}
              />
              <label htmlFor="name">Name</label>
            </div>
            <div className="input">
              <input
                type="email"
                name="email"
                onChange={(e) => change(e)}
                className={
                  !/^[a-zA-Z0-9]+@gmail\.com$/.test(user.email) ? "invalid" : ""
                }
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input">
              <input
                type="password"
                name="password"
                className={user.password.length <= 4 ? "invalid" : ""}
                onChange={(e) => change(e)}
              />
              <label htmlFor="password">Password</label>
            </div>
            <div className="input">
              <input
                type="password"
                name="confirmPassword"
                onChange={(e) => change(e)}
                className={
                  user.confirmPassword.length <= 4 ||
                  user.confirmPassword !== user.password
                    ? "invalid"
                    : ""
                }
              />
              <label htmlFor="confirmPassword">Confirm Password</label>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Add;
