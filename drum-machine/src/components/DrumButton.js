import React, { Component } from "react";

import "./DrumButton.css";

class DrumButton extends Component {
  constructor(props) {
    super(props);
    this.playSound = this.playSound.bind(this);
    this.audioRef = React.createRef();

  }

  playSound = () => {
    const audioButton = this.audioRef.current;
    this.props.playMe(audioButton);
  };

  render() {
    let { id, text, audioSrc, code } = this.props.drumPad;

    return (
      <li onClick={this.playSound} key={code} className="drum-pad" id={text}>
        <audio
          className="clip"
          id={id}
          data-description={text}
          src={audioSrc}
          ref={this.audioRef}
          type="audio/mpeg"
        >
          Your browser does not support the audio element.
        </audio>
        {id}
      </li>
    );
  }
}

export default DrumButton;
