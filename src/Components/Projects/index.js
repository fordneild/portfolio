import React from "react";
import "./Projects.scss";
import Project from "../Project";
import LearnMore from "../LeanMore/";
import data from "./ProjectsData";
import { categories } from "./ProjectsData";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";
import VisibilitySensor from "react-visibility-sensor";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeFilter: this.showcase,
      learnMoreData: null,
      isVisible: false,
      backgroundStyles: this.DEFAULT_BACKGROUND_STYLES,
    };
    this.containerRef = React.createRef();
  }
  modalRef = React.createRef();
  targetModalElement = null;
  DISABLE_BG_ANIMATION = false;
  DEFAULT_BACKGROUND_STYLES = {
    backgroundPosition: "50% 50%",
    backgroundSize: "100%",
  };
  MAX_WINDOW_WIDTH_FOR_ANIMATION = 1600;
  MIN_WINDOW_WIDTH_FOR_ANIMATION = 600;
  showcase = "Showcase";

  checkWindowSize() {
    //returns true if within max and min
    return !(
      window.innerWidth < this.MIN_WINDOW_WIDTH_FOR_ANIMATION ||
      window.innerWidth > this.MAX_WINDOW_WIDTH_FOR_ANIMATION
    );
  }

  // -------------------------------
  componentDidMount() {
    this.updateBackground();
  }

  componentWillUnmount() {
    clearAllBodyScrollLocks();
    window.removeEventListener("scroll", this.updateBackground);
  }

  calculateProperty(min, max, percentScrolled, increase) {
    let percent = percentScrolled;
    if (!increase) {
      percent = percent * -1;
    }
    let propertyValue = min + (max - min) * percent;
    return propertyValue;
  }

  updateBackground = () => {
    const validWindowSize = this.checkWindowSize();
    if (this.containerRef.current && validWindowSize) {
      const { top } = this.containerRef.current.getBoundingClientRect();
      const deltaY = -1 * top;
      const containerSize = this.containerRef.current.getBoundingClientRect()
        .height;
      const percentScrolled = deltaY / containerSize;
      let backgroundLeft = this.calculateProperty(
        50,
        100,
        percentScrolled,
        true
      );

      const backgroundStyles = {
        backgroundPosition: `${backgroundLeft}% 50%`,
        // backgroundSize: `${backgroundSize}%`
      };
      this.setState({
        backgroundStyles: backgroundStyles,
      });
      // }else if(!validWindowSize){
      //     this.setState({
      //       backgroundStyles: this.DEFAULT_BACKGROUND_STYLES
      //     });
    }
  };

  onChange = (isVisible) => {
    const validWindowSize = this.checkWindowSize();
    if (isVisible && !this.DISABLE_BG_ANIMATION && validWindowSize) {
      window.addEventListener("scroll", this.updateBackground);
    } else {
      window.removeEventListener("scroll", this.updateBackground);
    }
    this.setState({
      isVisible: isVisible,
    });
  };
  // -------------------------------

  getCategories() {
    const newCatgories = categories.slice(0);
    newCatgories.splice(0, 0, this.showcase);
    return newCatgories;
  }

  openModal = (learnMoreData) => {
    this.setState({ learnMoreData: learnMoreData });
    disableBodyScroll(this.targetModalElement);
  };

  closeModal = () => {
    this.setState({ learnMoreData: null });
    enableBodyScroll(this.targetModalElement);
  };

  handleFilterClick = (filter) => {
    this.setState({
      activeFilter: filter,
    });
  };
  render() {
    const { state, showcase } = this;
    const { activeFilter, learnMoreData } = state;

    return (
      <VisibilitySensor
        partialVisibility={true}
        onChange={this.onChange}
        offset={{ top: 50 }}>
        <div
          className={`projects--container ${
            activeFilter === showcase ? "showcase" : ""
          }`}
          style={this.state.backgroundStyles}
          ref={this.containerRef}>
          <a href="projects-section" id="projects">
            {""}
          </a>
          <h1>Projects</h1>
          <ul className="menu">
            {this.getCategories().map((filter, index) => {
              return (
                <li
                  className={`${activeFilter === filter ? "active" : ""} ${
                    filter === showcase ? "showcase" : ""
                  }`}
                  key={index}
                  onClick={() => this.handleFilterClick(filter)}>
                  {filter}
                </li>
              );
            })}
          </ul>
          <div className="projects">
            {data
              .filter((projectData) => {
                if (projectData.show === 1) {
                  if (activeFilter === this.showcase) {
                    return projectData.showcase;
                  } else {
                    return projectData.category === activeFilter;
                  }
                } else {
                  return false;
                }
              })
              .map((projectData, index) => (
                <Project
                  openModal={this.openModal}
                  key={index}
                  data={projectData}
                  inShowcase={activeFilter === showcase}
                />
              ))}
          </div>
          {learnMoreData != null ? (
            <LearnMore closeModal={this.closeModal} data={learnMoreData} />
          ) : null}
        </div>
      </VisibilitySensor>
    );
  }
}

export default Projects;
