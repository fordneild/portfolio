import React from "react";
import "./About.scss";

const About = () => {
  return (
    <section className="about--container">
      <a id="about" />
      <div className="sheered">
        <div className="reverse-sheered">
          <h1>about</h1>
          <p>
            Hi.
            <br /><br />
            My name is Ford Neild. I am a Junior at Johns Hopkins University studying computer science. I am a talented developer, just ask my Mom.
            <br /><br />
            I focus on simple, elegant designs that convey content in a streamlined user-friendly experience and strive to write modularized reusable code. Software development is my passion and I often find myself getting lost in my work for hours. I enjoy working with similarly enthusatic and motivated people. I haved developed commerical websites with React and jQuery. In my academic studies, I enjoy using C, C++, Java and Python. My area of concentration is machine learning and I have completed several personal projects with Tensor Flow. I am currently seeking an internship for Summer 2020 that will expand upon my skills in web development and build real-world experience as part of a programming team.
            <br /><br />
            Currently, I am taking classes on campus with plans to continue my internship at Way2B1 in the winter term.
          </p>
          {/* <div className="test">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
