import React from "react";
import "./modal.css"
const Modal = ({display ,img,closeModal}) => {
  if(display ==false) return
  return (
    <>
      <div className="my-modal  d-flex justify-content-center align-items-center" onClick={()=>closeModal()}>
        <section className="open-modal" >
          <img src={img} className="w-100" alt="modal image" />
        </section>
      </div>
    </>
  );
};

export default Modal;
