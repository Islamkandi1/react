import React, { useEffect } from "react";
import "./contact.css";
import { useState } from "react";
const Contact = () => {
  // inputs value state===================================================
  const [inputValue, setValue] = useState({
    userName: "",
    userAge: "",
    userEmail: "",
    userPassword: "",
  });
  const { userName, userAge, userEmail, userPassword } = inputValue;
  //   change title of page just in mount case=====================================================
  useEffect(() => {
    document.title = "contact";
  }, []);

  //   change state of input value============================================================
  function handleValue() {
    let { value, id } = event.target;
    setValue({ ...inputValue, [id]: value });
  }

  //   jsx code=============================================================
  return (
    <>
      <section className="container contact py-7">
        <section className="content py-5">
          <section className="header text-center text-uppercase mb-5">
            <h2>conatct section</h2>
            <section className="icon mb-3  text-center">
              <span className="line"></span>
              <i className="fa-solid fa-star"></i>
              <span className="line"></span>
            </section>
          </section>
          <form className="px-3 my-form">
            <section className="input-box">
              <label
                htmlFor="userName"
                className={userName != "" ? "label-active" : ""}
              >
                userName :
              </label>
              <input
                value={userName}
                onChange={handleValue}
                type="text"
                name="user-name"
                id="userName"
                placeholder="userName"
              />
            </section>
            <section className="input-box">
              <label
                htmlFor="userAge"
                className={userAge != "" ? "label-active" : ""}
              >
                userAge :
              </label>
              <input
                value={userAge}
                onChange={handleValue}
                type="number"
                name="user-age"
                id="userAge"
                placeholder="userAge"
              />
            </section>
            <section className="input-box">
              <label
                htmlFor="userEmail"
                className={userEmail != "" ? "label-active" : ""}
              >
                userEmail :
              </label>
              <input
                value={userEmail}
                onChange={handleValue}
                type="text"
                name="user-Email"
                id="userEmail"
                placeholder="userEmail"
              />
            </section>
            <section className="input-box">
              <label
                htmlFor="userPassword"
                className={userPassword != "" ? "label-active" : ""}
              >
                userpaswword :
              </label>
              <input
                value={userPassword}
                onChange={handleValue}
                type="password"
                name="user-paswword"
                id="userPassword"
                placeholder="userpaswword"
              />
            </section>
            <button type="submit" className=" my-btn">
              send message
            </button>
          </form>
        </section>
      </section>
    </>
  );
};

export default Contact;
