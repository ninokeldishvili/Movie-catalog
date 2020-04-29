import React from 'react'
import './VIPPoster.css'
import Navigation from '../Navigation/Navigation'
import poster from '../../images/poster.jpg';


const VIPPoster = function () {
    return (
        <div className="container-fluid poster-container">
            <Navigation></Navigation>

            <img src={poster} alt="poster" />
            <div className="poster-lables-container">
                <h1>Bohemian Rapsody</h1>
                <button className="watch-now-btn">Watch Now</button>
            </div>
        </div>
    )
}
export default VIPPoster