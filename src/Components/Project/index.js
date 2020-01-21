import React from "react";
import "./Project.scss";
import LearnMore from "../LeanMore/";

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileTouch: null
      // backgroundImage: this.props.data.image,
      // backgroundImageNum: 0
    };
  }

  toggleMobileTouch = boolean => {
    this.setState({
      mobileTouch: boolean
    });
  };

  shouldShowShowcaseStyles = () => {
    return (
      this.props.data.showcase &&
      this.props.inShowcase &&
      window.innerWidth > 1200
    );
  };

  selectRandomBackgroundImage = () => {
    if (this.props.data.secondaryImages) {
      const options = this.props.data.secondaryImages;
      options.push(this.props.data.image);
      const imageNum = (this.state.backgroundImageNum + 1) % options.length;
      console.log(options);
      console.log(imageNum);
      console.log(options[imageNum]);
      this.setState({
        backgroundImage: options[imageNum],
        backgroundImageNum: imageNum
      });
    }
  };
  darkOverlay =
    "linear-gradient(0deg, rgba(0,0,0,0.3) 30%, rgba(255,255,255,0) 60%),";

  getBackgroundImage = () => {
    const { props, darkOverlay } = this;
    const { data } = props;
    const {
      image,
      dark,
      imageTop,
      imageLeft,
      addMask,
      showcase,
      backgroundColor = "white"
    } = data;
    if (this.shouldShowShowcaseStyles()) {
      return {
        backgroundImage: `${!dark && addMask ? darkOverlay : ""}
                url(${showcase.image || image})`,
        backgroundPositionY: showcase.backgroundPositionY || imageTop,
        backgroundPositionX: showcase.backgroundPositionX || imageLeft,
        backgroundSize: showcase.backgroundSize || null,
        backgroundColor: showcase.backgroundColor || backgroundColor
      };
    } else {
      return {
        backgroundImage: `${!dark && addMask ? darkOverlay : ""}
                url(${image})`,
        backgroundPositionY: imageTop,
        backgroundPositionX: imageLeft
      };
    }
  };

  render() {
    const { state, props } = this;
    const { mobileTouch } = state;
    const { data, openModal } = props;
    const {
      showcase = false,
      title,
      role,
      year,
      company,
      technologies,
      dark,
      gradient,
    } = data;
    const {showcaseImage} = showcase;
    return (
      <div
        //with showcase thingy
        className={`project ${dark ? "dark" : ""} ${
          showcase ? "showcase" : ""
        } ${mobileTouch ? "hover-effects" : ""}`}
        //without showcase thingy
        // className={`project ${dark? "dark" : ""} ${mobileTouch? "hover-effects" : ""}`}
        onTouchStart={() => this.toggleMobileTouch(true)}
        onTouchEnd={() => this.toggleMobileTouch(false)}
        //onMouseLeave = {() => this.selectRandomBackgroundImage()}
        style={this.getBackgroundImage()}
      >
        <div className="gradient" style={{ backgroundImage: gradient }}></div>
        <div className="rising-content">
          <div className="rising-content--main">
            <h2 className="title">{title}</h2>
            <h4 className="company">{company}</h4>
            <h3
              onClick={() => openModal(data)}
              className={`learn-more-button ${dark ? "dark" : ""}`}
            >
              Learn More
            </h3>
            <div className="about">
              <p>
                Year: <span>{year}</span>
              </p>
              {role && (
                <p>
                  Role: <span>{role}</span>
                </p>
              )}
            </div>
            <ul className={`technologies ${dark ? "dark" : ""}`}>
              {technologies.map((technology, index) => {
                return <li key={index}>{technology}</li>;
              })}
            </ul>
          </div>
          {this.shouldShowShowcaseStyles() && showcaseImage? (
            <div className="rising-content--showcase">
                <img src={showcaseImage} alt="showcaseImage"/>
            </div>
          ) : null}
        </div>
        {/* <LearnMore visible={learnMore} toggleModal={this.toggleModal}{...props}/> */}
      </div>
    );
  }
}

export default Project;
