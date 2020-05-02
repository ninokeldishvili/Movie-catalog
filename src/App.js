import React from 'react';
import TrendingMovie from './components/TrendingMovie/TrendingMovie'
import ComingSoonMovie from './components/ComingSoonMovie/ComingSoonMovie'
import MoviesData from '../src/Data/MoviesData'
import VIPPoster from './components/VIPPoster/VIPPoster'
import "./App.css"
import './components/Language/Language.css'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            MoviesData: MoviesData,
            lang: 'en',
            trending: 'Trending',
            comingSoon: 'Coming Soon',
            vipMovie: 'Bohemian Rapsody',
        }
        this.setLangToKa = this.setLangToKa.bind(this);
        this.setLangToEn = this.setLangToEn.bind(this);
    }

    setLangToKa() {
        this.setState({
            lang: 'ka',
            trending: 'პოპულარული',
            comingSoon: 'მალე',
            vipMovie: 'ბოჰემიური რაფსოდია'
        })
    }

    setLangToEn() {
        this.setState({
            lang: 'en',
            trending: 'Trending',
            comingSoon: 'Coming Soon',
            vipMovie: 'Bohemian Rapsody',
        })
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    
                </header>
                <div className="lang-switch">
                    <span onClick={this.setLangToKa}>GEO</span>/<span onClick={this.setLangToEn}>ENG</span>
                </div>
                <VIPPoster lang={this.state.lang} vipMovie={this.state.vipMovie}></VIPPoster>
                <div className="row">
                    <div className="col-lg-9 section">
                        <div className="section-title">{this.state.trending}</div>
                        <div className="section-content">
                            {this.state.MoviesData.filter(m => m.tranding === true).map(movie => <TrendingMovie lang={this.state.lang} key={movie.id} movieData={movie}></TrendingMovie>)}
                        </div>
                    </div>

                    <div className="col-lg-3 section">
                        <div className="section-title">{this.state.comingSoon}</div>
                        <div className="section-content">
                            {this.state.MoviesData.map(movie => <ComingSoonMovie lang={this.state.lang} key={movie.id} movieData={movie}></ComingSoonMovie>)}
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default App;
