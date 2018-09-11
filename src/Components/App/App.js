import React, { Component } from 'react';
import './App.css';
import SearchBar from '../../Components/SearchBar/SearchBar'
import SearchResults from '../../Components/SearchResults/SearchResults'
import Playlist from '../../Components/Playlist/Playlist'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {searchResults: [{
      name:'i love you',
      artist: 'ronke',
      album: 'love lives here',
      id: 2
    },
    {
      name:'He reigns',
      artist: 'Bob Marly',
      album: 'Time flies',
      id: 3
    },
    {
      name:'We shall come',
      artist: 'Jesus',
      album: 'I am God',
      id: 4
    }]};
  }
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults}/>
          <Playlist />
          </div>
          </div>
      </div>
    );
  }
}

export default App;
