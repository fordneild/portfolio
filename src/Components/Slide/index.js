import React from 'react'
import './Slide.scss'

const Slide = (props) => {
    const {backgroundColor, title, image, points = [], ghost=false, reversed} = props;
    if(ghost){
        return(
            <div className="slide" style={{backgroundColor: "transparent"}}></div>
        )
    }

    const slideStyles = {
            flexDirection: (reversed ? "row-reverse":"row"),
        }
    console.log("slideStyles",slideStyles)
    return(
        <div style={slideStyles} className="slide">
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