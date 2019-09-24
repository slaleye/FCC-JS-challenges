import React, { Component } from "react";
import DrumButton from "./DrumButton";

const drumPads = [
  {
    id: "Q",
    code: 81,
    text: "Heater-1",
    audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  {
    id: "W",
    code: 87,
    text: "Heater-2",
    audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  },
  {
    id: "E",
    code: 69,
    text: "Heater-3",
    audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  },
  {
    id: "A",
    code: 65,
    text: "Heater-4",
    audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  },
  {
    id: "S",
    code: 83,
    text: "Heater-6",
    audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
    id: "D",
    code: 68,
    text: "Dsc-oh",
    audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  {
    id: "Z",
    code: 90,
    text: "Kick-n-hat",
    audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  {
    id: "X",
    code: 88,
    text: "Kick-1",
    audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },
  {
    id: "C",
    code: 67,
    text: "Snare",
    audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
  }
];

const displayStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
  height: "50px"
};

class Display extends Component {
  constructor(props) {
    super(props);
    this.playDrum = this.playDrum.bind(this);
    this.state = {
      pressed: "Press or Click a Key"
    };
  }

  playDrum = drum => {
    const parent = drum.parentElement;
    console.log(parent);
    drum.play();
    this.setState({
      pressed: drum.dataset.description
    });
  };

  handleKeyPress = event => {
    let button = event.key.toUpperCase();
    let buttonElement = document.getElementById(button);
    if (buttonElement) {
      this.playDrum(buttonElement);
    }
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress, false);
  }

  render() {
    return (
      <div>
        <span id="display">{this.state.pressed}</span>
        <ul style={displayStyle}>
          {drumPads.map(elem => {
            return <DrumButton drumPad={elem} playMe={this.playDrum} />;
          })}
        </ul>
      </div>
    );
  }
}

export default Display;
