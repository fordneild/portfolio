import React from "react";
import "./About.scss";
import ProfilePhoto from "../../assets/portfolio_image.jpg";

export default function About() {
  return (
    <section className="about--container">
      <a href="about-section" id="about">
        {" "}
      </a>
      <div className="sheered">
        <div className="reverse-sheered">
          <h1>about</h1>
          <div className="about__content">
            <div className="about__content__column">
              <p>
                I'm Ford, a senior at Johns Hopkins University, studying
                computer science. I have a passion for building things, and
                coding enables me to develop software that can have an immediate
                impact on people worldwide.
              </p>
              <div className="profile-picture--container">
                <img src={ProfilePhoto} draggable="false" alt="Ford Neild" />
              </div>
            </div>
            <div className="about__content__column">
              <p>
                I have experience launching production web applications at
                leading fintech, digital health, and media companies. From
                making fancy buttons with Sass to deploying scalable clusters
                with Kubernetes, I think each part of the stack has its own
                exciting problems to solve.
                <br />
                <br />I am currently taking classes remotely and working with a
                team of five engineers from Johns Hopkins to build MemeHub.io. I
                am also seeking a new graduate position starting in Summer 2021.
              </p>
              <br />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
