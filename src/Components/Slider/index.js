import React from "react";
import "./Slider.scss";

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
    this.activeSlideRef = React.createRef();
    this.sliderRef = React.createRef();
  }

  updateSliderPosition = () => {
    //put the middle of the current ref in the center of the slider
    const { activeSlideRef } = this;
    if (activeSlideRef) {
      const curSlide = activeSlideRef.current;
      if (curSlide) {
        const midOfSlide = curSlide.clientWidth / 2 + curSlide.offsetLeft;
        console.log("updating slider position",midOfSlide)
        this.setState({ offtsetLeft: midOfSlide });
      }
    }
  };

  setActiveSlide = index => {
    console.log("Click!", index);
    this.setState({ activeIndex: index });
    this.updateSliderPosition();
  };
  sliderData = [
    "lightgreen",
    "lightblue",
    "lightred",
    "lightyellow",
    "lightpurple",
    "lightorange"
  ];

  render() {
    const { state, activeSlideRef, sliderRef } = this;
    const { activeIndex, offsetLeft = 0 } = state;
    return (
      <div ref={sliderRef} className="slider-window">
        <div
          style={{
            transform: `translateX(${offsetLeft}px)`
          }}
          className="slider-track"
        >
          {this.sliderData.map((slideData, index) => {
            return (
              <div
                onClick={() => this.setActiveSlide(index)}
                key={index}
                ref={activeIndex === index ? activeSlideRef : null}
                style={{
                  backgroundColor: slideData
                }}
                className={`slide ${activeIndex === index ? "active" : ""}`}
              ></div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Slider;
