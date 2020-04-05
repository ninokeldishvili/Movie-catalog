import React from "react"
import "./Description.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Description = function(props){
    return (
        <div>
            <div className="rating"><FontAwesomeIcon icon={faStar}></FontAwesomeIcon> {props.rating}</div>
            <p className="movie-name">{props.name}</p>
            <button>Watch Now</button>
        </div>
    )
}

export default Description