import React from 'react';
import './Tracklist.css';
import Track from '../../Components/Track/Track';

class Tracklist extends React.Component{
  render(){
    return (
      <div className="TrackList">
            /* You will add a map method that renders a set Track components */
            {
              this.props.tracks.map(track => <Track  track={track} key={track.id} />)
            };
      </div>
    );
  }
}

export default Tracklist;
