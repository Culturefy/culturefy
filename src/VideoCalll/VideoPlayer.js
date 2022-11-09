import React, { useEffect, useRef } from 'react';
import './VideoPlayer.css'
export const VideoPlayer = ({ user }) => {
  const ref = useRef();

  useEffect(() => {
    user.videoTrack.play(ref.current);
  }, []);

  return (
    <div className='video_playet_pr'>
      Uid: {user.uid}
      <div
        ref={ref}
            className="video_playet"
      ></div>
    </div>
  );
};
