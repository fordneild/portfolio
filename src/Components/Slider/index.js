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

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown)
    this.updateSliderPosition()
  }

  componentWillUnmount(){
    document.removeEventListener("keydown", this.handleKeyDown)
  }

  handleKeyDown = (e) => {
    const {activeIndex} = this.state;
    const maxIndex = this.props.slides && this.props.slides.length-1;
    if(e.keyCode === 37){
      if(activeIndex>0){
        //left arrow
        this.setActiveSlide(activeIndex-1)
      }else{
        //wrap around
        this.setActiveSlide(maxIndex)
      }
    }else if(e.keyCode === 39){
      //right arrow
      if(activeIndex<maxIndex){
        this.setActiveSlide(activeIndex+1)
      }else{
        //wrap around
        this.setActiveSlide(0)
      }
    }else{

    }
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
        const offsetLeft = -1*(midOfSlide - midOfWindow)
        this.setState({ offsetLeft: offsetLeft });
      }
    }
  };

  setActiveSlide = index => {
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
                  <Slide {...slideData} reversed={index%2 === 0}/>
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
