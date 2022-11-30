import React, { createRef, Component } from "react";
import ReactWaves from "@dschoon/react-waves";
// import track1 from './assets/track1.ogg';
import track1 from '../assets/track1.ogg';
import AudioMotionAnalyzer from "audiomotion-analyzer";
import Spectrum from "react-audio-spectrum";
import './MusicList.css'
import { useState } from "react";
import Draggable from 'react-draggable';
import { Tooltip } from '@mui/material'
import { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';




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

// class MusicList extends Component {
function MusicList() {

  const [show, setshow] = useState(false)
  const [playing, setplaying] = useState(false)
  const [second, setSecond] = useState('')
  const [anootation, setanootation] = useState('')
  const [data, setdata] = useState([]);
  console.log(data)



  const initialTracks = {
    tracks: [
      { source: track1, title: "Zimt" },

    ]
  };
  // audioMotion = undefined;

  // constructor(props) {
  //   super(props);
  const audioRef = createRef();

  const [state, setState] = useState({
    show: false,
    mediaElt: null,
    playing: false,

    tracks: [
      { source: track1, title: "Zimt" },

    ],
    track: initialTracks.tracks[0]
  })


  // }





  const changeTrack = () => {
    if (state.track === state.tracks[0]) {
      this.setState({ track: this.state.tracks[1] });
    } else {
      this.setState({ track: this.state.tracks[0] });
    }
  }

  // const componentDidMount = () => {
  //   console.log("DM");
  //   console.log(this.audioRef.current);
  //   console.log(this.state.playing, "ABCD");

  // }
  const componentDidUpdate = () => {

  }
  const annotationHandle = (e) => {
    setanootation(e.target.value)
  }
  const handleSubmit = () => {
    const submitdata = `${second} : ${anootation}`
    setdata([...data, submitdata])

    setshow(false)
  }



  const clickd = () => {


    let a = (document.getElementById("player2"));
    const milisecond = a.currentTime
    if (show === false) {
      setshow(true)
    }
    if (show === true) {
      setshow(false)
    }
    if (milisecond >= 60.6242) {
      const second = ((milisecond / 60)).toFixed(2)
      setSecond(second)
    } else {
      const second = (milisecond / 100).toFixed(2)
      setSecond(second)
    }
  }
  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      maxWidth: 500,
      backgroundColor: theme.palette.common.white,
      color: 'white',
      backgroundColor: "black",
      boxShadow: theme.shadows[1],
      fontSize: 11,

    },
  }));




  // render() {
  return (
    <>

      <div style={{ width: "50vw", height: "60vh", position: "relative" }}>

        <ReactWaves
          audioFile={track1}
          mediaElt={audioRef.current} // maps the audio to the element
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
        />


        <audio
          crossOrigin="anonymous"
          id="player2"
          controls
          ref={audioRef}
          src={track1}
          type="audio"
          className="_mp3_music_player"
          onCanPlayThrough={clickd}
        >

        </audio>
        <div className="annotation_drag_div">
        {
           
          data.map((e) => {
            return (
             
                <Draggable>
                  <LightTooltip title={e}><div className="annotation_tooltip"></div></LightTooltip >
                </Draggable>
            

            )
          })
            
        }
        </div>



        {show ?

          <Draggable>
            <div className="audio_annotation">
              <div className="annotation">
                <p>{second} :</p>
                <form onSubmit={handleSubmit}>
                  <input type="text" onChange={annotationHandle} />
                </form>
              </div>
            </div>
          </Draggable> : null

        }



      </div>



    </>
  );
  // }
}
export default MusicList;
