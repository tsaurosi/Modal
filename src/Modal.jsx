import React from "react";
import './Modal.css';

export const Modal = ({reveal, close}) => {
    return (
      <div className = "modal-wrapper"
       style={{ 
           transform: reveal? 'translateY(0vh)': 'translateY(-100vh)',
           opacity: reveal? '1': '0'
       }}>
          <div className="modal-header">
              <p> Jonathan Smith </p> 
              <span onClick={close} className="close-modal-btn">x</span>
          </div>
          <div className="modal-content">
              <div classname = "modal-body">
                  <h4>Software Engineering</h4>
                  <p className="modal-bodyp">hey my name is Jonathan Smith and i am a software enginer at digital futures.
                      My favourite colour is pink, although i do prefer natural colours a little more
                      when it comes to interior design and my fashion.
                  </p>
              </div>
              <div className="modal-footer">
                  <div className="button-box">
                  <button className="register-interest">Register interest</button> </div>
                  <div className="button-box">
                  <button onClick={close} className="btn-cancel">Close</button></div>
              </div>
          </div>
      </div>
    )
};

