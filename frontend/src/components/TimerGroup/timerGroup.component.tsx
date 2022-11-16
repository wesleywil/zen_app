import { useDispatch } from "react-redux";

import { setTimer, setSong } from "../../redux/meditation/meditation";

import ButtonTimer from "../ButtonTimer/buttonTimer.component";

import fiveMin from "../../assets/musics/5min.mp3";
import tenMin from "../../assets/musics/10min.mp3";
import twMin from "../../assets/musics/20min.mp3";
import thMin from "../../assets/musics/30min.mp3";

const TimerGroup = () => {
  const dispatch = useDispatch();

  const setData = (dur: number, song: string) => {
    dispatch(setTimer(dur * 60));
    dispatch(setSong(song));
  };

  return (
    <div className=" p-2 flex gap-2 justify-center">
      <ButtonTimer timer={5} action={() => setData(5, fiveMin)} />
      <ButtonTimer timer={10} action={() => setData(10, tenMin)} />
      <ButtonTimer timer={20} action={() => setData(20, twMin)} />
      <ButtonTimer timer={30} action={() => setData(30, thMin)} />
    </div>
  );
};

export default TimerGroup;
