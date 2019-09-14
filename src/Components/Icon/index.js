import React from 'react'
import './Icon.scss'

const Icon = (props) => {
    const {name, link, dark} = props;
    return (
        <a className={`icon--container ${dark? "dark":""}`} target="_blank" href={link}>
            <div>
                <i className={name}/>
            </div>
        </a>
        

    )
}

export default Icon;