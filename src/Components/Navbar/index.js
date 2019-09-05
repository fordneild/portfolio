import React from 'react'
import './Navbar.scss'

class Navbar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isVisible: true
        }
    }
    HIDE_ON_SCROLL_UP = true;

    componentDidMount(){
        if(this.HIDE_ON_SCROLL_UP){
            this.prevScrollY = window.scrollY;
            window.addEventListener('scroll',this.updateNavbarVisible)
        }
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.updateNavbarVisible)
    }

    updateNavbarVisible = () => {
        const curScrollY = window.scrollY;
        if(this.prevScrollY < curScrollY){
            //scrolling down
            if(this.state.isVisible){
                //is there
                this.setState({
                    //make it not
                    isVisible: false
                })
            }
        }else{
            //scrolling up
            if(!this.state.isVisible){
                //is not there
                this.setState({
                    //make it so
                    isVisible: true
                })
            }
        }
        this.prevScrollY = curScrollY;
    }

    render(){
        const {dark} = this.props;
        const {isVisible} = this.state;
        return(
            <div className={`navbar--container ${dark? "dark ": ""} ${!isVisible? "hidden": ""}`}>
                <ul className="navbar__tabs">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">CV</a></li>
                </ul>
    
            </div>
        )
    }


}

export default Navbar