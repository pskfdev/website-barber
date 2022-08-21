import React from 'react';
import './Modal.css';
import { ImCross } from "react-icons/im";

function Modal(props) {
  return (
    <>
      <div className='container-modal'>
        <ImCross onClick={props.closeModal} className='btnClose'/>
        <div className="modal">
          <img src={props.src} alt="" />
        </div>
      </div>
    </>
  )
}

export default Modal