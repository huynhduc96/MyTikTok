import { useEffect, useRef } from "react";
import "./App.css";
import Video from "./video";

function App() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    videoRef.current?.play();
  }

  const handlePause = () => {
    videoRef.current?.pause();
  }

  return (
    <div className="App">
      <Video ref={videoRef} />
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </div>
  );
}

export default App;
