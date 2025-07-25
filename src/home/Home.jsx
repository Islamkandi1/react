import React from "react";
import "./home.css";
import img from "./../../src/assets/images/avatar.svg"
const Home = () => {
  return (
    <>
      <section className="home py-5 d-flex justify-content-center align-items-center">
        <section className="content py-5  ">
          <figure>
            <img
              src={img}
              className="w-100"
              alt="avatar image"
            />
          </figure>
          <h1 className="text-center mt-4 text-uppercase header ">
            start Framework
          </h1>
          <section className="icon  text-center mb-2">
            <span className="line"></span>
            <i className="fa-solid fa-star "></i>
            <span className="line"></span>
          </section>
          <p className="text-center">Graphic Artist - Web Designer - Illustrator</p>
        </section>
      </section>
    </>
  );
};

export default Home;
