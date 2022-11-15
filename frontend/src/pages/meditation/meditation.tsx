import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../redux/store";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import {
  playOrPause,
  restartTimer,
  setTimer,
} from "../../redux/meditation/meditation";

import ButtonTimer from "../../components/ButtonTimer/buttonTimer.component";

const Meditation = () => {
  const key = useSelector((state: RootState) => state.meditation.key);
  const isPlaying = useSelector(
    (state: RootState) => state.meditation.isPlaying
  );
  const duration = useSelector((state: RootState) => state.meditation.duration);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className=" text-center  text-4xl sm:text-6xl font-bold text-teal-700">
        MEDITATION
      </h1>
      <div className=" p-2 flex gap-2 justify-center">
        <ButtonTimer timer={5} action={() => dispatch(setTimer(5 * 60))} />
        <ButtonTimer timer={10} action={() => dispatch(setTimer(10 * 60))} />
        <ButtonTimer timer={20} action={() => dispatch(setTimer(20 * 60))} />
        <ButtonTimer timer={30} action={() => dispatch(setTimer(30 * 60))} />
      </div>
      <div className="flex flex-col ">
        <div className="self-center text-5xl text-teal-700 font-bold">
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
          <button
            onClick={() => dispatch(playOrPause())}
            className="text-lime-50 rounded-xl bg-teal-700 hover:bg-cyan-900  mt-4 px-4 py-2 font-bold transition duration-700	ease-in-out	"
          >
            Start/Pause
          </button>
          <button
            className="text-lime-50 rounded-xl bg-teal-700 hover:bg-cyan-900  mt-4 px-4 py-2 font-bold transition duration-700	ease-in-out"
            onClick={() => dispatch(restartTimer())}
          >
            Restart Timer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Meditation;
