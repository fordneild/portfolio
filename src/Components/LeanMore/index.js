import React from "react";
import "./LearnMore.scss";
import CloseButton from "../CloseButton";
import Icon from "../Icon";
import Slider from "../Slider/index";

class LearnMore extends React.Component {
  modalRef = React.createRef();
  SLIDER_HEIGHT = 400;
  handleClick = () => {
    this.props.closeModal();
    this.modalRef.current.scrollTop = 0;
  };
  renderDescription = () => {
    const description = this.props.data.description;
    if (description) {
      return Object.entries(description).map((section, index) => {
        if (section.length > 1) {
          const sectionHeader = section[0].replace(/_/g, " ");
          const sectionBody = section[1];
          let sectionBodyJSX;
          if (sectionHeader === "What I Did") {
            sectionBodyJSX = (
              <ul>
                {Object.values(sectionBody).map((bullet, secondaryIndex) => {
                  return <li key={secondaryIndex}>{bullet}</li>;
                })}
              </ul>
            );
          } else {
            sectionBodyJSX = <p>{sectionBody}</p>;
          }

          return (
            <div
              key={index + "section"}
              className="learn-more__description__section"
            >
              <h5 className="description__section-header">{sectionHeader}</h5>
              {sectionBodyJSX}
            </div>
          );
        } else {
          return null;
        }
      });
    }
  };
  render() {
    const { props } = this;
    const { data } = props;
    let { title, githubLink, liveLink, slides, dark } = data;
    if (!slides) {
      return (
        <div className={`learn-more--overlay`}>
          <div
            ref={this.modalRef}
            className={`learn-more old ${dark ? "dark" : ""}`}
          >
            <h3>{title}</h3>
            <div className="buttons">
              {githubLink ? (
                <Icon link={githubLink} dark={!dark} name="fa fa-github" />
              ) : null}
              {liveLink ? (
                <Icon
                  link={liveLink}
                  dark={!dark}
                  name="fa fa-external-link-square"
                />
              ) : null}
            </div>
            {/* <div className="image--container">
                        <img src={image} alt={title} />
                    </div> */}
            {this.renderDescription()}
            <div onClick={this.handleClick} className="close">
              <CloseButton dark={dark} />
            </div>
            {/* <div className="mask" /> */}
          </div>
          <div className="fill-parent" onClick={this.handleClick} />
        </div>
      );
    }
    return (
      <div className={`learn-more--overlay`}>
        <div ref={this.modalRef} className={`learn-more`}>
          <h3>{title}</h3>
          {githubLink || liveLink ? (
            <div className="buttons">
              {githubLink ? (
                <Icon link={githubLink} dark={true} name="fa fa-github" />
              ) : null}
              {liveLink ? (
                <Icon
                  link={liveLink}
                  dark={true}
                  name="fa fa-external-link-square"
                />
              ) : null}
            </div>
          ) : null}

          <div className="learn-more-slider-container">
            <Slider height={this.SLIDER_HEIGHT} slides={slides} />
          </div>
          <div onClick={this.handleClick} className="close">
            <CloseButton dark={false} />
          </div>
        </div>
        <div className="fill-parent" onClick={this.handleClick} />
      </div>
    );
  }
}

export default LearnMore;
