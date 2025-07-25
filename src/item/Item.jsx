import React from "react";

const Item = ({ ele, setDisplay, setImg }) => {
  const { src, alt } = ele;
  
// handle modal ===========================================
  function handleModal() {
    setDisplay(true);
    setImg(src);
  }
  return (
    <>
      <section className="col" onClick={() => handleModal()}>
        <section className="inner overflow-hidden rounded-3 position-relative">
          <img src={src} className="w-100" alt={alt} />
          <section className="layer position-absolute top-0  bottom-0 w-100 d-flex justify-content-center align-items-center">
            <i className="fa-solid fa-plus"></i>
          </section>
        </section>
      </section>
    </>
  );
};

export default Item;
