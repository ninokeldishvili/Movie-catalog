import React from 'react';
import Movie from './components/Movie/Movie'
import LanguageSwitch from './components/LanguageSwitch/LanguageSwitch'
import MoviesData from '../src/Data/MoviesData'

function App() {
  return (
    <div className="App">
          <header className="App-header">
              <LanguageSwitch></LanguageSwitch>
              <h1>What to watch</h1>
          </header>
          <div>
              {MoviesData.map(movie =><Movie key={movie.id} movieData={movie}></Movie>)}
          </div>
    </div>
  );
}

export default App;
