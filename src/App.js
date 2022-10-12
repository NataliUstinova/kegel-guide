import logo from './images/logo.svg';
import kegel from './images/kegel-pic.png';
import AppStore from './images/app-store.svg';
import GooglePlay from './images/google-play.svg';
import './App.css';
import Modal from "./Modal";
import {useState} from 'react';

function App() {
  const [email, setEmail] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function handleInputChange(e) {
    setEmail(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    setIsModalOpen(true)
    //TODO
    // if (email) {
    //   api.sendEmail("templateID", email)
    //     .then(() => setIsModalOpen(true))
    //     .catch(err => console.log(err))
    //     .finally(setIsLoading(false))
    // }
  }
    
  function handleModalClose() {
    setIsLoading(false);
    setIsModalOpen(false);
  }

  return (
    <>
    <main className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
          <img src={kegel} className="kegel-pic" alt="kegel" />
        <h1 className="App-header">
          Why you should be doing Kegels?
        </h1>
        <p className="App-text">Simple exercises to improve potency and last longer</p>
      </header>
      <form className="form" onSubmit={handleSubmit}>
          <input type="email" required minLength="2" maxLength="40" name="email" className="form__input" placeholder="Enter your email" onChange={handleInputChange}></input>
          <button type="submit" className="form__btn">{isLoading ? "SENDING..." : "GET FREE GUIDE"}</button>
      </form>
      <section className="download">
        <p className="download__text">or Download Now!</p>
        <div className="download__container">
          <a href="https://sensualcourse.onelink.me/nmz6/952g0uee">
          <div className="download__store">
            <img className="download__store_apple" src={AppStore} alt="AppStore"/>
          </div>
          </a>
          <a href="https://sensualcourse.onelink.me/nmz6/952g0uee">
          <div className="download__store">
            <img className="download__store_google" src={GooglePlay} alt="GooglePlay"/>
          </div>
          </a>
        </div>
      </section>
      <footer className="footer">
        <p className="footer__text">
          Copyright &copy; {new Date().getFullYear()} Senses
        </p>
        <p className="footer__text">All rights reserved</p>
      </footer>

      <Modal isOpen={isModalOpen} onClose={handleModalClose} />
    </main>
    </>
  );
}

export default App;
