import React from "react"
import Description from '../Description/Description'
import "./ComingSoonMovie.css"
import poster from '../../images/poster.jpg';

const ComingSoonMovie = function (props) {
    return (
        <div className="row movie-container-cs">
            <div className="col-4"><img src={poster} alt="poster"/></div>
            <div className="col-8">
                <div>Movie Name</div>
                <div>Rating</div>
                <div>Date</div>
            </div>
        </div>
    )
}

export default ComingSoonMovie;