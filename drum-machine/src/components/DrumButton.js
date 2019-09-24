import React, { Component } from "react";

class DrumButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      audioButton: null
    };
  }

  setAudioButton = button => {
    this.setState({
      audioButton: button
    });
    // console.log(button);
  };
  playSound = () => {
    this.state.button.play();
  };

  render() {
    let { id, text, audioSrc, code } = this.props.drumPad;
    //console.log(code);
    return (
      <li key={code} className="drum-pad" id={id}>
        <audio
          className="clip"
          src={audioSrc}
          ref={this.setAudioButton}
          type="audio/mpeg"
        >
          Your browser does not support the audio element.
        </audio>
        <button onKeyPress={this.playSound} alt={text}>
          {id}
        </button>
      </li>
    );
  }
}

export default DrumButton;
