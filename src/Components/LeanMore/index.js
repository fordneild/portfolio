import React from 'react'
import './LearnMore.scss'
import CloseButton from '../CloseButton'
import Icon from '../Icon'

class LearnMore extends React.Component {
    modalRef = React.createRef()

    handleClick = () => {
        this.props.closeModal();
        this.modalRef.current.scrollTop = 0
    }
    renderDescription = () =>{
        const description = this.props.data.description;
        if(description){
            return Object.entries(description)
            .map((section, index) => {
                if(section.length > 1){
                    const sectionHeader = section[0].replace(/_/g," ");
                    const sectionBody = section[1];
                    let sectionBodyJSX;
                    if(sectionHeader === "What I Did"){
                        sectionBodyJSX = 
                        <ul>
                            {Object.values(sectionBody).map((bullet, secondaryIndex) => {
                                
                                return <li key={secondaryIndex}>{bullet}</li>
                            })}
                        </ul>
                    }else{
                        sectionBodyJSX = <p>{sectionBody}</p>
                    }

                    return(
                        <div key={index+"section"}className="learn-more__description__section">
                            <h5 className="description__section-header">{sectionHeader}</h5>
                            {sectionBodyJSX}
                        </div>
                    )
                }else{
                    return null;
                }
            })
            }
        
    }
    render(){
        const {props} = this;
        const {data} = props;
        let {image, title, role, year, company ,technologies, dark, gradient, imageTop, imageLeft, githubLink, liveLink, description} = data;
        const sampleDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        //change to const for real
        // githubLink = githubLink || "https://github.com/fordneild"
        // description = description || sampleDescription;
        return(
            <div className={`learn-more--overlay`}>
                <div ref={this.modalRef}className={`learn-more ${dark? "dark" : ""}`}>
                    <h3>{title}</h3>
                    <div className="buttons">
                        {githubLink? <Icon link={githubLink} dark={!dark} name="fa fa-github"/>: null}
                        {liveLink? <Icon link={liveLink} dark={!dark}name="fa fa-external-link-square"/>: null}
                    </div>
                    {/* <div className="image--container">
                        <img src={image} alt={title} />
                    </div> */}
                    {this.renderDescription()}
                    <div onClick={this.handleClick} className="close">
                        <CloseButton dark = {dark}/>
                    </div>
                    {/* <div className="mask" /> */}
                </div>
                <div className="fill-parent" onClick={this.handleClick}/>
            </div>
        )
    }
}

export default LearnMore