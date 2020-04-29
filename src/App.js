import React from 'react';
import TrendingMovie from './components/TrendingMovie/TrendingMovie'
import ComingSoonMovie from './components/ComingSoonMovie/ComingSoonMovie'
import MoviesData from '../src/Data/MoviesData'
import MoviesData_Geo from '../src/Data/MoviesData_Geo'
import VIPPoster from './components/VIPPoster/VIPPoster'
import "./App.css"
import './components/Language/Language.css'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            MoviesData: MoviesData,
            lang: 'en',
        }
        this.updateDataByLanguage = this.updateDataByLanguage.bind(this);
    }

    updateDataByLanguage(lang) {
        //console.log("hi")
        if (lang === 'en')
            this.setState({ MoviesData: MoviesData });
        else
            this.setState({ MoviesData: MoviesData_Geo });

    }

    render() {
        return (
            <div className="App">
                <VIPPoster></VIPPoster>
                <header className="App-header">
                    {/* <Language lang="GEO" id="ka"></Language>
            <Language lang="ENG" id="en"></Language> 

                    <div className="lang-switch">
                        <span onClick={this.updateDataByLanguage.bind(this, 'ka')}>GEO</span >/<span onClick={this.updateDataByLanguage.bind(this, 'en')}>ENG</span>
                    </div>*/}
                    {/*<h1>What to watch</h1>*/}
                    
                </header>
                <div className="row">
                    <div className="col-lg-9 section">
                        <div className="section-title">Trending</div>
                        <div className="section-content">
                            {this.state.MoviesData.map(movie => <TrendingMovie key={movie.id} movieData={movie}></TrendingMovie>)}
                        </div>
                    </div>

                    <div className="col-lg-3 section">
                        <div className="section-title">Coming Soon</div>
                        <div className="section-content">
                            <ComingSoonMovie></ComingSoonMovie>
                            <ComingSoonMovie></ComingSoonMovie>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default App;
