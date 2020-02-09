import React from 'react'
import './Slide.scss'

const Slide = (props) => {
    const {backgroundColor, title, images= [], imageStyles, points = [], ghost=false, reversed} = props;
    if(ghost){
        return(
            <div className="slide" style={{backgroundColor: "transparent"}}></div>
        )
    }

    const slideStyles = {
            flexDirection: (reversed ? "row-reverse":"row"),
        }
    return(
        <>
        <div className="slide-mask"></div>
        <div style={slideStyles} className="slide">
            <div className="ghost images-container"></div>
            <div style={{position: "fixed"}}className="images-container">
                {images.map((image,index) => {
                    return(
                        <div style={imageStyles} className="image-container">
                            <img  src={image} alt={`title ${index}`}/>
                        </div>
                    )
                })}
            </div>
            
            <div className="text-container">
                <h2>{title}</h2>
                <ul>
                    {points.map((point, index) => {
                        return (
                            <li key={index}
                            className="point">
                                {point}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
        </>
    )

}

export default Slide