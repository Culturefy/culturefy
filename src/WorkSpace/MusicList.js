import React, { createRef, Component } from "react";
import ReactWaves from "@dschoon/react-waves";
// import track1 from './assets/track1.ogg';
import track1 from '../assets/track1.ogg';
import AudioMotionAnalyzer from "audiomotion-analyzer";
import Spectrum from "react-audio-spectrum";
import './MusicList.css'
class Audio extends Component {
  audio = undefined;
  componentDidMount() {
    console.log("ADM");
    this.audio = document.getElementById("player2");
    this.setState({ mediaElt: this.audio });
    var analyzer = document.getElementById("analyzer");
    this.audio.volume = 0.03;
    const audioMotion = new AudioMotionAnalyzer(analyzer);
    audioMotion.connectAudio(this.audio);
  }






  render() {
    return (
      <audio
        crossOrigin="anonymous"
        id="player"
        controls
        src={this.props.track.source}
        type="audio"
      />
    );
  }
}

class MusicList extends Component {
  initialTracks = {
    tracks: [
      { source: track1, title: "Zimt" },

    ]
  };
  audioMotion = undefined;

  constructor(props) {
    super(props);
    this.audioRef = createRef();
    this.state = {
      mediaElt: null,
      playing: false,
      tracks: [
        { source: track1, title: "Zimt" },

      ],
      track: this.initialTracks.tracks[0]
    };
  }

  changeTrack() {
    if (this.state.track === this.state.tracks[0]) {
      this.setState({ track: this.state.tracks[1] });
    } else {
      this.setState({ track: this.state.tracks[0] });
    }
  }

  componentDidMount() {
    console.log("DM");
    console.log(this.audioRef.current);
    console.log(this.state.playing, "ABCD");
    console.log(document.getElementById("player2"));
  }
  componentDidUpdate() { }

  click(){
    console.log("clck")
  }



  render() {
    return (
      <>
        {/* <button
          onClick={() => {
            this.changeTrack();
          }}
        >
          Click to alter track
        </button> */}
        {/* <Audio track={this.state.track} /> */}
        {/* <div
          style={{ color: "red" }}
          onClick={() => {
            this.setState({ playing: !this.state.playing });
          }}
        >
          Click me to trigger play: {!this.state.playing ? "▶" : "■"}
        </div> */}
        {/* <div id="analyzer"></div> */}
        <div style={{ width: "50vw", height: "60vh", position: "absolute" }}>

          <ReactWaves
            audioFile={this.state.track.source}
            mediaElt={this.audioRef.current} // maps the audio to the element
            className="react-waves _mp3_music_waves"

            options={{
              backend: "MediaElement", // maps the waveform to an audio element
              normalize: true,
              cursorWidth: 0,
              mediaType: "audio",
              hideScrollbar: true,
              responsive: true,
            }}
  
            zoom={1}
            playing={this.state.playing}
            ClickHandler={this.click}

          />
          <audio
            crossOrigin="anonymous"
            id="player2"
            controls
            ref={this.audioRef}
            src={this.state.track.source}
            type="audio"
            className="_mp3_music_player"
          />
        </div>
      </>
    );
  }
}
export default MusicList;
