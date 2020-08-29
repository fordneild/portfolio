import React from "react";
import "./Slide.scss";

const Slide = (props) => {
  const {
    title,
    images = [],
    imageStyles,
    points = [],
    ghost = false,
    reversed,
  } = props;
  if (ghost) {
    return (
      <div className="slide" style={{ backgroundColor: "transparent" }}></div>
    );
  }
  // STARTED ADDING SWIPE MOTION DETECTION
  //need some state tracking to keep track of whther or not we moved left or right
  //   const slideRef = React.createRef();
  //   useEffect(() => {
  //     const div = slideRef.current;
  //     // subscribe event
  //     div.addEventListener("touchstart", handleTouchStart);
  //     return () => {
  //       // unsubscribe event
  //       div.removeEventListener("touchend", handleTouchEnd);
  //     };
  //   }, []);

  //   const handleTouchEnd = e => {};

  //   const handleTouchStart = e => {};
  // END ADDING SWIPE MOTION DETECTION

  const slideStyles = {
    flexDirection: reversed ? "row-reverse" : "row",
  };
  return (
    <>
      <div className="slide-mask"></div>
      <div
        //   ref={slideRef}
        style={slideStyles}
        className="slide">
        <div className="ghost images-container"></div>
        <div style={{ position: "fixed" }} className="images-container">
          {images.map((image, index) => {
            return (
              <div style={imageStyles} className="image-container">
                <img src={image} alt={`title ${index}`} />
              </div>
            );
          })}
        </div>

        <div className="text-container">
          <h2>{title}</h2>
          <ul>
            {points.map((point, index) => {
              return (
                <li key={index} className="point">
                  {point}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Slide;
