import React from 'react'
import './ContactMe.scss'

const iconStyles = {
        fontSize: "30px",
        height: "30px",
        margin: "0",
        padding: "0",
        color: "white",
        display: "block",
        transition: "color 500ms ease-in-out",
    }
const ContactMe = () => {
    return(
    <div className="contact-me--container">
        <h3 className="subheader">Wanna work together,<br/> or have comments on my work?</h3>
        <h1 className="header">Reach Out!</h1>
        <ul className="contact-me-icons">
            <li className="icon--container">
                <a className="link" target="_blank" href="https://codepen.io/fordneild">
                    <div className="icon--background">
                        <i className="fa fa-codepen"></i>
                    </div>
                </a>
            </li>
            <li className="icon--container">
                <a className="link"target="_blank" href="https://www.linkedin.com/in/ford-neild/">
                    <div className="icon--background">
                        <i className="fa fa-linkedin"></i>
                    </div>
                </a>
            </li>
            <li className="icon--container">
                <a className="link"target="_blank" href="https://github.com/fordneild">
                    <div className="icon--background">
                        <i className="fa fa-github"></i>
                    </div>
                </a>
            </li>
            <li className="icon--container">
                <a className="link" target="_blank" href="https://codepen.io/fordneild">
                    <div className="icon--background">
                        <i className="fa fa-github"></i>
                    </div>
                </a>
            </li>
        </ul>
    </div>
    )

}

export default ContactMe