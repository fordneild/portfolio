import React from 'react'
import './Slide.scss'

const Slide = (props) => {
    const {backgroundColor, title, image, points = [], ghost=false} = props;
    if(ghost){
        return(
            <div className="slide" style={{backgroundColor: "transparent"}}></div>
        )
    }
    return(
        <div className="slide">
            <div className="image-container">
                <img src={image} alt={title}/>
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
    )

}

export default Slide