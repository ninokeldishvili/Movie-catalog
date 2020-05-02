import React from "react"
import "./ComingSoonMovie.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

class ComingSoonMovie extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let movieName = this.props.movieData.name;

        if (this.props.lang === 'ka') {
            movieName = this.props.movieData.name_geo
        }

        return (
            <div className="row movie-container-cs">
                <div className="col-4"><img src={this.props.movieData.src} alt={this.props.movieData.alt} /></div>
                <div className="col-8">
                    <div><strong>{movieName}</strong></div>
                    <div><FontAwesomeIcon icon={faStar}></FontAwesomeIcon> {this.props.movieData.rating}</div>
                    <div>20.05.2020</div>
                </div>
            </div>
        )
    }
}

export default ComingSoonMovie;