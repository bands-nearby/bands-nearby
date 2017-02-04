import React, { Component } from 'react';
import VideoList from './VideoList'
import SimilarArtistsList from './SimilarArtistsList'
import TitleList from './TitleList'

class EventsListEntry extends Component {
  constructor() {
    super();
    this.state = {
      toggled: false,
    };
  }

  toggle() {
    this.setState({ toggled: !this.state.toggled });
  }

  addClass() {
    return this.state.toggled ? 'show ' : 'hide';
  }

  isCover(cost) {
    return typeof cost === 'number' && cost === cost ? cost = `$${cost}` : cost = 'No Cover';
      }

  render() {
    const { titles, ticketLink, date, venue, cost, photo, startTime, youTube, similarArtists, artistSummary } = this.props;
    const isDisplayed = this.addClass();
    const showCost = this.isCover(cost);

    return (
      <li className="event-list-entry" onClick={() => this.toggle()}>
        <div className="show-info">
          <div className="date">{date}</div>
          <span className="headliner">{titles[0]}</span>
          <span className="other-bands"><TitleList titles={this.props.titles} /></span>
          <div>
            <span className="venue">{venue}</span>
            <span className="startTime">{startTime}pm</span>
            <span className="cost">{showCost}</span>
            <span className="tickets"><a href={ticketLink}>Tickets</a></span>
          </div>
          <div className="similar-artists">
            {similarArtists[0] && <SimilarArtistsList artists={similarArtists} />}
          </div>
        </div>
        <div className="concert-photo-wrapper">
          <img className="concert-photo" src={photo} alt={photo} />
        </div>
        <div className='video-container' className={isDisplayed}>
          <div className="artist-summary-container">
            <div className="artist-summary">
              <p>{artistSummary}</p>
            </div>
          </div>
          <VideoList photo={photo} youTube={youTube} isDisplayed={this.state.toggled}/>
        </div>
      </li>
    );
  }
}

export default EventsListEntry;
