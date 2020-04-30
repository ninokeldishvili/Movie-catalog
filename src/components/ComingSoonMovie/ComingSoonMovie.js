import React from "react"
import "./ComingSoonMovie.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const ComingSoonMovie = function (props) {
    return (
        <div className="row movie-container-cs">
            <div className="col-4"><img src={props.movieData.src} alt={props.movieData.alt} /></div>
            <div className="col-8">
                <div>{props.movieData.name}</div>
                <div><FontAwesomeIcon icon={faStar}></FontAwesomeIcon> {props.movieData.rating}</div>
                <div>20.05.2020</div>
            </div>
        </div>
    )
}

export default ComingSoonMovie;