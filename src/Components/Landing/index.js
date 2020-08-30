import React from "react";
import VisibilitySensor from "react-visibility-sensor";

import "./Landing.scss";

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      reflectionStyles: {
        filter: `blur(${this.INITIAL_BLUR}px)`,
        transform: "rotate(180deg) scale(-1,1.5) translateY(0px)",
      },
      heroLoaded: false,
    };
  }

  INITIAL_BLUR = 2;
  //higher = slower blur
  BLUR_CONSTANT = 42.5;
  //not sure what hgiher means but ill find out
  REFLECTION_CONSTANT = 1.4;
  height = null;

  componentDidMount() {
    this.updateReflection();
    this.height = window.innerHeight;
    // document.documentElement.style.setProperty("--window-innerHeight", window.innerHeight);
    //this.onChange(this.state.isVisible)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.updateReflection);
  }

  updateReflection = () => {
    const deltaReflectionY = window.pageYOffset;
    const blur = this.INITIAL_BLUR + deltaReflectionY / this.BLUR_CONSTANT;
    let translateY = `${deltaReflectionY * this.REFLECTION_CONSTANT}`;
    //annoying mobile thing that lets u scroll higher than the page is the reason for this

    if (translateY < 0) {
      translateY = 0;
    }
    const reflectionStyles = {
      filter: `blur(${blur}px)`,
      transform: `rotate(180deg) scale(-1,1.5) translateY(${
        -1 * translateY
      }px)`,
    };
    this.setState({
      reflectionStyles: reflectionStyles,
      translateY: translateY,
    });
  };

  onChange = (isVisible) => {
    if (isVisible) {
      window.addEventListener("scroll", this.updateReflection);
    } else {
      window.removeEventListener("scroll", this.updateReflection);
    }
    this.setState({
      isVisible: isVisible,
    });
    this.props.toggleLandingVisible(isVisible);
  };

  getHeightDependentStyle = (property, percent) => {
    return this.height ? { [property]: this.height * (percent / 100) } : {};
  };

  render() {
    const { isVisible, heroLoaded } = this.state;
    const h4Styles = this.getHeightDependentStyle("fontSize", 4);
    const h1Styles = this.getHeightDependentStyle("fontSize", 7);
    return (
      //DO I EVEN NEED THIS ANY MORE????
      <VisibilitySensor
        partialVisibility={true}
        onChange={this.onChange}
        offset={{ top: 50 }}>
        <section
          style={this.getHeightDependentStyle("height", 110)}
          className="landing"
          onTouchMove={(e) => e.preventDefault()}>
          <a href="landing-section" id="#home">
            {" "}
          </a>
          <img
            style={this.getHeightDependentStyle("height", 110)}
            // className={isVisible ? "fixed" : null}
            alt="hero-large"
            className="fixed"
            onLoad={() => {
              this.setState((prevState) => {
                return {
                  ...prevState,
                  heroLoaded: true,
                };
              });
            }}
            src={
              // "https://firebasestorage.googleapis.com/v0/b/portfolio-9117a.appspot.com/o/landingImage.png?alt=media&token=12519bd8-c3e4-4d92-ab4b-8371161be400"
              "https://firebasestorage.googleapis.com/v0/b/portfolio-9117a.appspot.com/o/landingImageLargeCompessed.jpg?alt=media&token=870d7ac5-0a0c-4e5e-ba71-ac1ef9c0b4d6"
            }
          />
          <img
            style={this.getHeightDependentStyle("height", 110)}
            // className={isVisible ? "fixed" : null}
            alt="hero-small"
            className={`fixed small ${heroLoaded ? "hidden" : ""}`}
            src={
              "https://firebasestorage.googleapis.com/v0/b/portfolio-9117a.appspot.com/o/landingImageSmall.jpg?alt=media&token=c2e60abb-c006-4371-a5a6-ed8f4a6c6a8d"
            }
          />
          <div
            style={this.getHeightDependentStyle("marginTop", 24)}
            className={`landing__intro ${!isVisible ? "" : ""}`}>
            <div
              style={this.getHeightDependentStyle("marginTop", 20)}
              className="text">
              <h4 style={h4Styles}>Meet Me</h4>
              <h1 style={h1Styles}>Ford Neild</h1>
              <h4 style={h4Styles}>Full Stack Developer</h4>
            </div>
            <div
              className="text-relflection"
              style={this.state.reflectionStyles}>
              <h4 style={h4Styles}>Meet Me</h4>
              <h1 style={h1Styles}>Ford Neild</h1>
              <h4 style={h4Styles}>Full Stack Developer</h4>
            </div>
          </div>
        </section>
      </VisibilitySensor>
    );
  }
}

export default Landing;
