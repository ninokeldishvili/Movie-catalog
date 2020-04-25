import React from 'react';
import Movie from './components/Movie/Movie'
import MoviesData from '../src/Data/MoviesData'
import MoviesData_Geo from '../src/Data/MoviesData_Geo'
import Language from './components/Language/Language'
import "./App.css"

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      MoviesData : MoviesData,
      lang : 'en',
    }
    this.updateDataByLanguage = this.updateDataByLanguage.bind(this);
  }

  updateDataByLanguage(lang){
    //console.log("hi")
       if (lang==='en')
         this.setState({MoviesData: MoviesData});
       else 
         this.setState({MoviesData: MoviesData_Geo});
        
  }

  render(){
    return (
      <div className="App">
          <header className="App-header">
            {/* <Language lang="GEO" id="ka"></Language>
            <Language lang="ENG" id="en"></Language> */}
  
          <div className="lang-switch">
              <span onClick={this.updateDataByLanguage.bind(this,'ka')}>GEO</span >/<span onClick={this.updateDataByLanguage.bind(this,'en')}>ENG</span>
          </div>
  
          <h1>What to watch</h1>
          </header>
          <div>
            {this.state.MoviesData.map(movie =><Movie key={movie.id} movieData={movie}></Movie>)}
          </div>
      </div>
    );
  }
}

export default App;
