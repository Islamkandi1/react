import React, { useEffect } from "react";
import "./about.css";
const About = () => {
  // change title of page just in mount case====================================================
  useEffect(() => {
    document.title = "about";
  }, []);

  // jsx code ====================================================
  return (
    <>
      <section className="about py-7">
        <section className="container py-5">
          <section className="header">
            <h2 className="text-uppercase mb-3  text-center about-h2">
              about component
            </h2>
            <section className="icon mb-3  text-center">
              <span className="line"></span>
              <i className="fa-solid fa-star"></i>
              <span className="line"></span>
            </section>
          </section>
          <section className="row row-cols-1 row-cols-md-2 px-5 ">
            <section className="col">
              <section className="inner">
                <p className="about-p">
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </section>
            </section>
            <section className="col">
              <section className="inner">
                <p className="about-p">
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </section>
            </section>
          </section>
        </section>
      </section>
    </>
  );
};

export default About;
