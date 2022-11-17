import { NavLink } from "react-router-dom";

import Logo from "../../assets/LotusLogo.svg";

const Homepage = () => {
  return (
    <div className="flex flex-col gap-4 p-4 self-center">
      <h1 className="border-cyan-900 text-center  text-6xl font-bold text-teal-700">
        ZEN
      </h1>
      <h2 className="text-center text-2xl font-semibold text-teal-700">
        Be Zen
      </h2>
      <h3 className="text-center text-xl text-teal-700">
        Meditating to calm the soul in this busy world.
      </h3>
      <div className="flex flex-col">
        <img
          src={Logo}
          alt="zen logo"
          className="rounded-full meditate mx-auto w-1/2 xl:w-full md:w-full"
        />
        <NavLink
          to="meditation"
          className="text-center text-lime-50 rounded-xl bg-teal-700 hover:bg-cyan-900 w-1/3 mx-auto mt-4 py-2 font-bold transition duration-700	ease-in-out	"
        >
          MEDIDATE
        </NavLink>
      </div>
    </div>
  );
};

export default Homepage;
