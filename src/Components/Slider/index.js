import React from "react";
import "./Slider.scss";
import Slide from '../Slide/index'

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
    this.activeSlideRef = React.createRef();
    this.sliderRef = React.createRef();
  }


  componentDidMount(){
    this.updateSliderPosition()
  }
  slideContainerStyles={height: `${this.props.height || 400}px`}

  updateSliderPosition = () => {
    //put the middle of the current ref in the center of the slider
    const { activeSlideRef, sliderRef } = this;
    if (activeSlideRef) {
      const curSlide = activeSlideRef.current;
      if (curSlide) {
        const midOfSlide = curSlide.clientWidth / 2 + curSlide.offsetLeft;
        const midOfWindow = sliderRef.current.clientWidth /2
        console.log("midOfWindow",midOfWindow)
        const offsetLeft = -1*(midOfSlide - midOfWindow)
        console.log("offsetLeft",offsetLeft)
        this.setState({ offsetLeft: offsetLeft });
      }
    }
  };

  setActiveSlide = index => {
    console.log("Click!", index);
    this.setState({ activeIndex: index }, () => {
        this.updateSliderPosition();
    });
  };

  render() {
    const { state, activeSlideRef, sliderRef, props, slideContainerStyles} = this;
    const { activeIndex, offsetLeft = 0 } = state;
    const {slides = []} = props;
    return (
      <div ref={sliderRef} className="slider-window">
        <div
          style={{
            transform: `translateX(${offsetLeft}px)`
          }}
          className="slider-track"
        >
            <div style={slideContainerStyles}className="slide-container ghost"><Slide ghost={true}/></div>
          {slides.map((slideData, index) => {
            return (
              <div
                onClick={() => this.setActiveSlide(index)}
                key={index}
                ref={activeIndex === index ? activeSlideRef : null}
                style={slideContainerStyles}
                className={`slide-container ${activeIndex === index ? "active" : ""}`}
              >
                  <Slide {...slideData}/>
              </div>
            );
          })}
        <div style={slideContainerStyles}className="slide-container ghost"><Slide ghost={true}/></div>
        </div>
      </div>
    );
  }
}

export default Slider;
