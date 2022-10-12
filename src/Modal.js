import React from 'react';
import './App.css';
import AppStore from "./images/app-store.svg";
import GooglePlay from "./images/google-play.svg";

const Modal = ({isOpen, onClose}) => {
  return (
    <>
      <section className={`modal ${isOpen && "modal_opened"}`}>
        <div className="modal__container">
          <div className="modal__close" onClick={onClose}></div>
          <h1 className="modal__header">
            Your men's health guide is in the mail!
          </h1>
          <p className="App-text">Don't forget to download the app to start applying this knowledge right away</p>
          <div className="download__container">
            <div className="download__store">
              <a href="https://sensualcourse.onelink.me/nmz6/952g0uee">
              <img className="modal__store_apple" src={AppStore} alt="AppStore"/>
              </a>
            </div>
            <div className="download__store">
              <a href="https://sensualcourse.onelink.me/nmz6/952g0uee">
              <img className="modal__store_google" src={GooglePlay} alt="GooglePlay"/>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Modal;
