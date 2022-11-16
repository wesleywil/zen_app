import { useDispatch } from "react-redux";
import {
  restartTimer,
  pauseMeditation,
} from "../../redux/meditation/meditation";

const RestartTimer = () => {
  const dispatch = useDispatch();

  const animate = () => {
    const element = document.getElementById("test");
    element?.classList.remove("meditate_cls");
  };

  const reset = () => {
    dispatch(restartTimer());
    dispatch(pauseMeditation());
    const music: any = document.getElementById("music");
    music.pause();
    music.currentTime = null;
  };
  return (
    <button
      className="text-lime-50 rounded-xl bg-teal-700 hover:bg-cyan-900  mt-4 px-4 py-2 font-bold transition duration-700	ease-in-out"
      onClick={() => {
        reset();
        animate();
      }}
    >
      Restart Timer
    </button>
  );
};

export default RestartTimer;
