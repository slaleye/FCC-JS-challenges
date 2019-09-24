import React, { Component } from "react";

import './DrumButton.css';


class DrumButton extends Component {
  constructor(props) {
    super(props);
    this.audioRef = React.createRef();
  }

  setAudioButton = button => {
    this.setState({
      audioButton: button
    });
    // console.log(button);
  };
  playSound = () => {
    console.log("pressed");
    const audioButton = this.audioRef.current;
    audioButton.play();
    console.log(audioButton);
  };

  render() {
    let { id, text, audioSrc, code } = this.props.drumPad;

    return (
      <li
        onKeyPress={this.playSound}
        key={code}
        alt={text}
        className="drum-pad"
        id={id}
      >
        <audio
          className="clip"
          id={id}
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
