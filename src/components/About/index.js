import { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <p>
            I'm a very ambitious web developer looking for an internship in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I'm pursuing my Bachelor of Engineering in computer science from the
            Savitribai Phule Pune university. I am eager to be challenged in
            order to grow and further improve my IT skills. My greatest passion
            is in life is using my technical know-how to benefit other people
            and organisations.
          </p>
          <p>My technical skills include:</p>
          <p>
            Programming Languages - C++, C, Java, JavaScript, HTML, Sass and
            CSS.
          </p>
          <p>
            Libraries and Frameworks - ReactJS, NodeJS, Express, Bootstrap CSS.
          </p>
          <p>Databases Management - MySQL, PL/SQL, MongoDB.</p>
          <p>Tools - Git, Github.</p>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
