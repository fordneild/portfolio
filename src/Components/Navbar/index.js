import React from 'react'
import './Navbar.scss'

const Navbar = (props) => {
    const {dark} = props
    return(
        <div className={`navbar--container ${dark? "dark": ""}`}>
            <ul className="navbar__tabs">
                <li><a href="#">Home</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">CV</a></li>
            </ul>

        </div>
    )

}

export default Navbar