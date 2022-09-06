import { forwardRef, useImperativeHandle, useRef } from "react";

const video1 = require("./video/video1.mp4");

const Video = forwardRef<HTMLVideoElement>((props, ref) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useImperativeHandle<HTMLVideoElement | null, HTMLVideoElement | null>(
    ref,
    () => videoRef.current
  );

  return <video ref={videoRef} src={video1} width={280} />;
});

export default Video;
