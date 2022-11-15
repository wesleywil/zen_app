import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { playOrPause } from "../../redux/meditation/meditation";
import { useEffect, useState } from "react";

const PlaySong = () => {
  const song = useSelector((state: RootState) => state.meditation.song);
  const playing = useSelector(
    (state: RootState) => state.meditation.playingMusic
  );
  const dispatch = useDispatch();

  //   const [playing, setPlaying] = useState(false);
  useEffect(() => {
    console.log("Playing...", playing);
  }, [playing, song]);

  const animate = () => {
    const element = document.getElementById("test");
    element?.classList.toggle("meditate_cls");
  };

  const play = () => {
    console.log("Play Function");
    const music: any = document.getElementById("music");
    if (playing === true) {
      music.pause();
      //   setPlaying(false);
    } else {
      music.play();
      //   setPlaying(true);
    }
  };
  return (
    <>
      <audio id="music" src={song}></audio>
      <button
        onClick={() => {
          dispatch(playOrPause());
          animate();
          play();
        }}
        className="text-lime-50 rounded-xl bg-teal-700 hover:bg-cyan-900 mt-4 px-4 py-2 font-bold transition duration-700 ease-in-out"
      >
        Start/Pause
      </button>
    </>
  );
};

export default PlaySong;
