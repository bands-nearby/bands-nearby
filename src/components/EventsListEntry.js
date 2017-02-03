import React, { Component } from 'react';
import VideoList from './VideoList'

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

  render() {
    const { title, link, date, venue, cost, photo, startTime, youTube, similarArtists, artistSummary } = this.props;
    const isDisplayed = this.addClass();

    let soundsLike;
    similarArtists[0] ? soundsLike = `Sounds Like: ${similarArtists}` : null;

    return (
      <li className="event-list-entry" onClick={() => this.toggle()}>
        <div className="show-info">
          <div className="date">{date}</div>
          <span className="title">{title}</span>
          <div>
            <a href={link}>
              <span className="venue">{venue}</span>
              <span className="startTime">{startTime}pm</span>
              <span className="cost">${cost}</span>
            </a>
          </div>
          <div className="similar-artists">
            {soundsLike}
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
          {/* {youTube.map((video, index) => {
            return (<Video
              videoId={video}
              index={index}
              thumbnail={photo}
              isDisplayed={this.state.toggled}
              key={index}
            />);
          })} */}
        </div>
      </li>
    );
  }
}

export default EventsListEntry;
