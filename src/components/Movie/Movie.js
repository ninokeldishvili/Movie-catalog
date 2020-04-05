import React from "react"
import Poster from '../Poster/Poster'
import Description from '../Description/Description'
import "./Movie.css"

const Movie = function () {
    return (
        <div className="movie-container ">
            <Poster
                src="https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg"
                alt="Fight Club"></Poster>
            <Description rating="8.5" name="Fight Club"></Description>
        </div>    
    )
}
export default Movie