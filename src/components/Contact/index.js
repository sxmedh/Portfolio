import { useEffect, useState } from "react";
import Loader from "react-loaders";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const form = useRef();

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_oiahjpf",
        "template_wgb8qi4",
        form.current,
        "c7VxxqVyXj3S8sJV_"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("success!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <p>
            I am interested in internship opportunities in the field of computer
            science. To contact me please use the details or the contact form
            given below.
          </p>
          <p>Email - sumedh11.sg@gmail.com, Mobile no. - 9890798370</p>
          <p className="">
            <a
              href="
            https://github.com/sxmedh"
            >
              Github ,
            </a>
            <a
              href="
            https://www.linkedin.com/in/sumedh-gole-495866221/"
            >
              LinkedIn.
            </a>
          </p>
          <p>Please enter your details.</p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    placeholder="Name"
                    type="text"
                    name="user_name"
                    required
                  />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="user_email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    className="messagef"
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="Send" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
