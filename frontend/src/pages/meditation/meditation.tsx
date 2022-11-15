import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../redux/store";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import { setTimer, setSong } from "../../redux/meditation/meditation";

import ButtonTimer from "../../components/ButtonTimer/buttonTimer.component";
import PlaySong from "../../components/PlaySong/playsong.component";
import RestartTimer from "../../components/RestartTimer/restartTimer.component";

import FiveMin from "../../assets/musics/5min.mp3";
import TenMin from "../../assets/musics/10min.mp3";
import TwMin from "../../assets/musics/20min.mp3";
import ThMin from "../../assets/musics/30min.mp3";

const Meditation = () => {
  const key = useSelector((state: RootState) => state.meditation.key);
  const song = useSelector((state: RootState) => state.meditation.song);
  const isPlaying = useSelector(
    (state: RootState) => state.meditation.isPlaying
  );
  const duration = useSelector((state: RootState) => state.meditation.duration);
  const dispatch = useDispatch();

  const setData = (dur: number, song: string) => {
    dispatch(setTimer(dur * 60));
    dispatch(setSong(song));
  };

  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className=" text-center  text-4xl sm:text-6xl font-bold text-teal-700">
        MEDITATION
      </h1>
      <div className=" p-2 flex gap-2 justify-center">
        <ButtonTimer timer={5} action={() => setData(5, FiveMin)} />
        <ButtonTimer timer={10} action={() => setData(10, TenMin)} />
        <ButtonTimer timer={20} action={() => setData(20, TwMin)} />
        <ButtonTimer timer={30} action={() => setData(30, ThMin)} />
      </div>
      <div className="flex flex-col ">
        <div
          id="test"
          className="p-4 rounded-full self-center text-5xl  font-bold"
        >
          <div className="hidden sm:block ">
            <CountdownCircleTimer
              key={key}
              isPlaying={isPlaying}
              duration={duration}
              colors="#0f766e"
              size={300}
            >
              {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
          </div>
          <div className="block sm:hidden ">
            <CountdownCircleTimer
              key={key}
              isPlaying={isPlaying}
              duration={duration}
              colors="#0f766e"
              size={150}
            >
              {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
          </div>
        </div>
        <div className="flex justify-center gap-4 ">
          {song === "" ? (
            ""
          ) : (
            <>
              <PlaySong />
              <RestartTimer />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Meditation;
