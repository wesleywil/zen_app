import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../redux/store";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import { addToMonth } from "../../redux/track/track";

import PlaySong from "../../components/PlaySong/playsong.component";
import RestartTimer from "../../components/RestartTimer/restartTimer.component";
import TimerGroup from "../../components/TimerGroup/timerGroup.component";

const Meditation = () => {
  const key = useSelector((state: RootState) => state.meditation.key);
  const song = useSelector((state: RootState) => state.meditation.song);
  const isPlaying = useSelector(
    (state: RootState) => state.meditation.isPlaying
  );
  const track = useSelector((state: RootState) => state.track.listTrack);
  const duration = useSelector((state: RootState) => state.meditation.duration);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className=" text-center  text-4xl sm:text-6xl font-bold text-teal-700">
        MEDITATION
      </h1>
      <div className="flex gap-2 ">
        {track.map((item) => (
          <h1>{item.y}</h1>
        ))}
      </div>

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
              onComplete={() => {
                dispatch(addToMonth());
              }}
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
