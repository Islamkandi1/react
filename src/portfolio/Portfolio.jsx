import React, { useEffect, useState } from "react";
import "./portfolio.css";
import Modal from "./../modal/Modal";
import Item from "../item/Item";
const Portfolio = () => {
  // state for modal ==========================
  const [display, setDisplay] = useState(false);
  const [img, setImg] = useState("")
  //   change title of page just in mount case=====================================================
  useEffect(() => {
    document.title = "portfolio";
  }, []);
  // close modal=============================
  function closeModal() {
    setDisplay(false);
  }
  // img date===============================
  const imgDate = [
    { id: 1, src: "./src/assets/images/poert1.png", alt: "red image" },
    { id: 2, src: "./src/assets/images/port2.png", alt: "blue image" },
    { id: 3, src: "./src/assets/images/port3.png", alt: "brown image" },
    { id: 4, src: "./src/assets/images/poert1.png", alt: "red image" },
    { id: 5, src: "./src/assets/images/port2.png", alt: "blue image" },
    { id: 6, src: "./src/assets/images/port3.png", alt: "brown image" },
  ];
  //   jsx code=======================================
  return (
    <>
      <section className="container prot py-6">
        <section className="header text-center text-uppercase mb-2 pt-5 pb-2">
          <h2>portfolio component</h2>
          <section className="icon mb-3  text-center">
            <span className="line"></span>
            <i className="fa-solid fa-star"></i>
            <span className="line"></span>
          </section>
        </section>
        <section className="row m-0 row-cols-1 g-4 row-cols-md-2 row-cols-lg-3">
          {imgDate.map((ele) => {
            return (
              <Item
                key={ele.id}
                ele={ele}
                setDisplay={setDisplay}
                setImg={setImg}
              />
            );
          })}
        </section>
      </section>
      <Modal display={display} img={img} closeModal={closeModal} />
    </>
  );
};

export default Portfolio;
