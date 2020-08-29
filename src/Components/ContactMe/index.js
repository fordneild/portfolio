import React from "react";
import "./ContactMe.scss";
import Icon from "../Icon";

const IconsData = [
  {
    name: "fa fa-linkedin",
    link: "https://www.linkedin.com/in/ford-neild/",
  },
  {
    name: "fa fa-github",
    link: "https://github.com/fordneild",
  },
  {
    name: "fa fa-codepen",
    link: "https://codepen.io/fordneild",
  },
  {
    name: "fa fa-envelope",
    link: "mailto: hanfordn35@gmail.com",
  },
];
const ContactMe = () => {
  return (
    <div className="contact-me--container">
      <a id="contact-me" />
      <h3 className="subheader">
        Want to work together,
        <br /> or have comments on my work?
      </h3>
      <h1 className="header">Reach Out!</h1>
      <ul className="contact-me-icons">
        {IconsData.map((iconData, index) => {
          return (
            <li key={index}>
              <Icon {...iconData} dark="true" />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactMe;
