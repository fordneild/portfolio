import React from "react";
import "./About.scss";
import ProfilePhoto from '../../assets/portfolio_image.jpg'

const About = () => {
  return (
    <section className="about--container">
      <a id="about" />
      <div className="sheered">
        <div className="reverse-sheered">
          <h1>about</h1>
          <div className="about__content">
            <div className="about__content__column">
              <p>
                I'm Ford, a Junior at Johns Hopkins University, studying computer
                science. I have a passion for thinking of and carrying out
                full-stack features from start to finish. I love every stage in the process, from brainstorming to unit testing.
              </p>
              <div className="profile-picture--container">            
              <img src={ProfilePhoto} draggable="false"  alt="Ford Neild"/>
              </div>
            </div>
            <div className="about__content__column">
            <p>
              Web Development is rewarding to me because of the vast and immediate
              impact it can have on people. I especially enjoy creating
              applications that harness the power of machine learning to provide
              a smarter UX. In addition to taking the full ML courseload offered
              at Hopkins, I have completed several personal projects with Tensor
              Flow. 
              <br />
              <br /> 
              Currently, I am studying from home and working on personal ML projects. I am excited to intern at Komodo Health in Summer 2020, where I will be working as a Full Stack Developer.
            </p>
            <br />
              <br /> 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
