import React from "react"
import "./TrendingMovie.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

const Movie = function (props) {
    return (
        <div className="movie-container col-lg-4">
            <img src={props.movieData.src} alt={props.movieData.alt} />
            <div className="rating"><FontAwesomeIcon className="star" icon={faStar}></FontAwesomeIcon> {props.movieData.rating}</div>
            <p className="movie-name">{props.movieData.name}</p>
            <div className="playBtn"><FontAwesomeIcon icon={faPlay} /></div>
        </div>
    )
}

export default Movie;