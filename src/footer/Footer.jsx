import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <>
      <section className="footer">
        <section className="container">
          <section className="px-3 py-5">
            <section className="row row-cols-1 row-cols-md-3 py-5 gy-5">
              <section className="col">
                <section className="inner text-center text-light">
                  <h2 className="text-uppercase">location</h2>
                  <p>2215 John Daniel Drive</p>
                  <p>Clark, MO 65243</p>
                </section>
              </section>
              <section className="col">
                <section className="inner text-center text-light">
                  <h2 className="text-uppercase mb-4">AROUND THE WEB</h2>
                  <ul className="icons">
                    <li>
                      <i className="fa-brands fa-facebook"></i>
                    </li>
                    <li>
                      <i className="fa-brands fa-twitter"></i>
                    </li>
                    <li>
                      <i className="fa-brands fa-linkedin-in"></i>{" "}
                    </li>
                    <li>
                      <i className="fa-solid fa-globe"></i>{" "}
                    </li>
                  </ul>
                </section>
              </section>
              <section className="col">
                <section className="inner text-center text-light">
                  <h2 className="text-uppercase">ABOUT FREELANCER</h2>
                  <p className="freelance-p">
                    Freelance is a free to use, licensed Bootstrap theme created
                    by Route
                  </p>
                </section>
              </section>
            </section>
          </section>
        </section>
      </section>
      <section className="copy-right">
        <p className="m-0">Copyright © Your Website 2021</p>
      </section>
    </>
  );
};

export default Footer;
