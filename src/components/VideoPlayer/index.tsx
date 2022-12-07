import { useRef } from "react";
import Styles from "src/components/VideoPlayer/styles.module.scss";
import PlayButton from "src/assets/images/p-btn.png";
import { FaRegPauseCircle } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";

const Index = ({ video, courseVideo, setVideo }) => {
  const videoRef = useRef(null);
  const playBtnRef = useRef(null);
  const pauseBtnRef = useRef(null);

  const onPlayVideo = () => {
    playBtnRef.current.style.opacity = 0;
    pauseBtnRef.current.classList.remove("d-none");
    videoRef.current.play();
  };

  const onPauseVideo = () => {
    playBtnRef.current.style.opacity = 1;
    pauseBtnRef.current.classList.add("d-none");
    videoRef.current.pause();
  };

  const onHover = () => {
    pauseBtnRef.current.style.opacity = 1;
  };

  const onLeave = () => {
    pauseBtnRef.current.style.opacity = 0;
  };
  const closeVideo = () => {
    setVideo({});
  };
  return (
    <div className={Styles.vBMain}>
      {courseVideo.videoTitle || video.name ? (
        <div
          className={Styles.videoBox}
          onMouseEnter={onHover}
          onMouseLeave={onLeave}
        >
          <img src={PlayButton} ref={playBtnRef} onClick={onPlayVideo} />
          <span ref={pauseBtnRef} className="d-none" onClick={onPauseVideo}>
            <FaRegPauseCircle size={50} color="white" />{" "}
          </span>
          <video
            ref={videoRef}
            src={video.name ? (URL.createObjectURL(video)) : courseVideo.source }
          />
          <AiFillCloseCircle className={Styles.closeV} onClick={closeVideo} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Index;
