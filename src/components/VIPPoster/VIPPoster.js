import React from 'react'
import './VIPPoster.css'
import Navigation from '../Navigation/Navigation'
import poster from '../../images/poster.jpg';

class VIPPoster extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let watchNow = 'Watch Now';

        if (this.props.lang === 'ka') {
            watchNow = 'ნახვა'
        }

        return (
            <div className="container-fluid poster-container">
                <Navigation lang={this.props.lang}></Navigation>

                <img src={poster} alt="poster" />
                <div className="poster-lables-container">
                    <h1>{this.props.vipMovie}</h1>
                    <button className="watch-now-btn">{watchNow}</button>
                </div>
            </div>
        )
    }
}
export default VIPPoster