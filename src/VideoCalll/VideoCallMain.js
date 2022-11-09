import React from 'react'
import { useState } from 'react';
import { VideoRoom } from './VideoRoom';
const VideoCallMain = () => {
    const [joined, setJoined] = useState(false);

  return (
    <div className="App">
      <h1> Virtual Video  Call</h1>
      {!joined && (
        <button onClick={() => setJoined(true)}>
          Join Room
        </button>
      )}

      {joined && <VideoRoom />}
    </div>
  )
}

export default VideoCallMain
