import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import PlaySong from "../../components/PlaySong/playsong.component";
import RestartTimer from "../../components/RestartTimer/restartTimer.component";
import TimerGroup from "../../components/TimerGroup/timerGroup.component";

const Meditation = () => {
  const key = useSelector((state: RootState) => state.meditation.key);
  const song = useSelector((state: RootState) => state.meditation.song);
  const isPlaying = useSelector(
    (state: RootState) => state.meditation.isPlaying
  );
  const duration = useSelector((state: RootState) => state.meditation.duration);

  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className=" text-center  text-4xl sm:text-6xl font-bold text-teal-700">
        MEDITATION
      </h1>
      <TimerGroup />
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
