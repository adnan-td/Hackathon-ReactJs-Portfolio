import { useState } from "react";
import Footer from "./footer.component";
import { arrowh, secure } from "./images.assets";

import Thanksmodal from "./modal/modal.component";
import Navbar from "./nav.component";

export default function ContactPage() {
  const [error, setError] = useState("");
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    company: "",
    details: "",
  });

  const handleChange = (e) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value,
    });
  };

  const { name, email, company, details } = formFields;

  return (
    <div className="contactpage">
      <div className="home">
        <div className="pink__circle pink__circle--01"></div>
        <div className="pink__circle pink__circle--02"></div>
        <Navbar />
        <div className="contactf">
          <div className="yellow__circle yellow__circle--01"></div>
          <div className="yellow__circle yellow__circle--02"></div>
          <div className="blue__circle blue__circle--01"></div>
          <div className="blue__circle blue__circle--02"></div>
          <div className="contactf__wrapper">
            <h1 className="contactf__wrapper__heading">Let’s create progress together</h1>
            <div className="contactf__wrapper__div">
              <div className="contactf__wrapper__div__left">
                <div className="contactf__wrapper__div__left__form">
                  <span style={{ color: "red" }}>{error ? `(${error})` : null}</span>
                  <div className="contactf__wrapper__div__left__form__row">
                    <form>
                      <input
                        className="form-input"
                        type="text"
                        placeholder="Full Name"
                        name="name"
                        value={name}
                        onChange={handleChange}
                      />
                    </form>
                    <form>
                      <input
                        className="form-input"
                        type="text"
                        placeholder="Email Address"
                        name="email"
                        value={email}
                        onChange={handleChange}
                      />
                    </form>
                  </div>
                  <form>
                    <input
                      className="form-input"
                      type="text"
                      placeholder="Company or Organization"
                      name="company"
                      value={company}
                      onChange={handleChange}
                    />
                  </form>
                  <textarea
                    className="form-input"
                    name="details"
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Details about your project"
                    value={details}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <Thanksmodal
                  className="contacth__wrapper__link__button"
                  setform={setFormFields}
                  formfields={formFields}
                  seterror={setError}
                >
                  Send Message{" "}
                  <img
                    className="contacth__wrapper__link__button__icon"
                    src={arrowh}
                    alt="loading"
                  />
                </Thanksmodal>
              </div>
              <div className="contactf__wrapper__div__right">
                <div className="contactf__wrapper__div__right__top">
                  <img
                    src={secure}
                    alt="loading"
                    className="contactf__wrapper__div__right__top__img"
                  />
                  <p className="contactf__wrapper__div__right__top__para">
                    Additionally, you can <br></br> reach me through the following methods.
                  </p>
                </div>
                <div className="contactf__wrapper__div__right__bottom">
                  <div className="contactf__wrapper__div__right__bottom__content">
                    <div className="contactf__wrapper__div__right__bottom__content__label">
                      Email
                    </div>
                    <a
                      href="mailto:hello@spuniverse.me"
                      className="contactf__wrapper__div__right__bottom__content__main"
                      target="_blank"
                      rel="noreferrer"
                    >
                      hello@spuniverse.me
                    </a>
                  </div>
                  <div className="contactf__wrapper__div__right__bottom__content">
                    <div className="contactf__wrapper__div__right__bottom__content__label">
                      Behance
                    </div>
                    <a
                      href="https://behance.net/sudhanshuprasad2002"
                      className="contactf__wrapper__div__right__bottom__content__main"
                      target="_blank"
                      rel="noreferrer"
                    >
                      behance.net/sudhanshuprasad2002
                    </a>
                  </div>
                  <div className="contactf__wrapper__div__right__bottom__content">
                    <div className="contactf__wrapper__div__right__bottom__content__label">
                      Github Link
                    </div>
                    <a
                      href="https://github.com/sudhanshuprasad2002"
                      className="contactf__wrapper__div__right__bottom__content__main"
                      target="_blank"
                      rel="noreferrer"
                    >
                      github.com/sudhanshuprasad2002
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
