import React from "react"
import "./TrendingMovie.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

class Movie extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        let movieName = this.props.movieData.name;

        if (this.props.lang === 'ka') {
            movieName = this.props.movieData.name_geo
        }

        return (
            <div className="movie-container col-lg-4 col-sm-4 col-md-4">
                <img src={this.props.movieData.src} alt={this.props.movieData.alt} />
                <div className="rating"><FontAwesomeIcon className="star" icon={faStar}></FontAwesomeIcon> {this.props.movieData.rating}</div>
                <p className="movie-name">{movieName}</p>
                <div className="playBtn"><FontAwesomeIcon icon={faPlay} /></div>
            </div>
        )
    }
}

export default Movie;