import React from 'react'
import './VIPPoster.css'
import Navigation from '../Navigation/Navigation'
import poster from '../../images/poster.jpg';

class VIPPoster extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="container-fluid poster-container">
                <Navigation text={this.props.text}></Navigation>
                <img src={poster} alt="poster" />
                <div className="poster-lables-container">
                    <h1>{this.props.vipMovie}</h1>
                    <button className="watch-now-btn">{this.props.text.watchNow}</button>
                </div>
            </div>
        )
    }
}
export default VIPPoster