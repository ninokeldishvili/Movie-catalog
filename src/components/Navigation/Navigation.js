import React from 'react'
import './Navigation.css'

class Navigation extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const text = this.props.text;

        return (
            <div className="nav-container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand text-white" href="#">MovieItUp</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="nav navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link text-white" href="#">{text.shows}<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">{text.movies}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">{text.liveTV}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">{text.songs}</a>
                            </li>
                        </ul>

                    </div>
                </nav>
            </div>
        )
    }
}
export default Navigation