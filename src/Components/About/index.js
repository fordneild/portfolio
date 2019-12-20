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
            My name is Ford Neild. I am a Junior at Johns Hopkins University studying computer science.
            <br /><br />
            Software development is my passion and I often find myself getting lost in my work for hours. I enjoy working with similarly enthusatic and motivated people. During my summer and winter breaks, I have developed commerical websites with React and jQuery. Web Development is extremely gratifing to me becuase of the vast and immediate impact it can have on the world. In my academic studies, I enjoy using Java, C/C++ and Python. Although I love web development, my area of concentration for my CS degree is machine learning. In addition to taking the full ML courseload offered at Hopkins, I have completed several personal projects with Tensor Flow.
            <br /><br />            
            Currently, I am taking classes on campus and will return to my internship at Way2B1 for my month long winter break in January. I am also seeking an internship for Summer 2020 that will expand upon my skills in software development and build real-world experience as part of a programming team.
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
