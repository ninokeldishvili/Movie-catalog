import React from "react"
import Poster from '../Poster/Poster'
import Description from '../Description/Description'
import "./Movie.css"

const Movie = function (props) {
    return (
        <div className="movie-container">
            <Poster src={props.movieData.src} alt={props.movieData.alt}></Poster>
            <Description rating={props.movieData.rating} name={props.movieData.name}></Description>
        </div>
    )
}

export default Movie;