import React from 'react';
import s from './Video.css';
import VideoPlayer from '../VideoPlayer';

class Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    };
  }

  openModal = () => this.setState({ modalOpen: true });
  closeModal = () => this.setState({ modalOpen: false });

  render() {
    const { video } = this.props;
    return (
      <div className={s.video} onClick={this.openModal}>
        <div className={s.title}>
          {video.title}
        </div>
        <img
          className={s.preview}
          src={video.pic}
          width={260}
          height={195}
        />
        <div className={s.play}>
          {/*
            SVG icon from Material icon set
            https://material.io/icons/#ic_play_circle_outline
          */}
          <svg
            fill="#000000"
            height="80"
            viewBox="0 0 24 24"
            width="80"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
          </svg>
        </div>
        <div className={s.description}>
          {video.description}
        </div>
        <div className={s.uploaded}>
          {video.time}
        </div>
        <VideoPlayer
          video={video}
          modalOpen={this.state.modalOpen}
          closeModal={this.closeModal}
        />
      </div>
    );
  }
}

export default Video;