import React, { useEffect, useState } from "react";
import imgs from "./../../src/assets/images/images"
import "./portfolio.css";
import Modal from "./../modal/Modal";
import Item from "../item/Item";

const {port1,port2,port3} =  imgs

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
    { id: 1, src: port1, alt: "red image" },
    { id: 2, src:port2, alt: "blue image" },
    { id: 3, src: port3, alt: "brown image" },
    { id: 4, src: port1, alt: "red image" },
    { id: 5, src: port2, alt: "blue image" },
    { id: 6, src: port3, alt: "brown image" },
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
      {display && <Modal  img={img} closeModal={closeModal} />}
    </>
  );
};

export default Portfolio;
