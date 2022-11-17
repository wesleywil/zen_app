import { NavLink } from "react-router-dom";

import Logo from "../../assets/LotusLogo.svg";

const Navbar = () => {
  return (
    <header className="w-full text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          <NavLink to="/" className="mr-5 hover:text-gray-900">
            Home
          </NavLink>
          <NavLink to="/meditation" className="mr-5 hover:text-gray-900">
            Meditation
          </NavLink>
          <a className="mr-5 hover:text-gray-900">Third Link</a>
          <a className="hover:text-gray-900">Fourth Link</a>
        </nav>
        <NavLink
          to="/"
          className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center  p-2 mb-4 md:mb-0"
        >
          <img
            src={Logo}
            alt="zen logo"
            className="w-12 rounded border border-lime-50 hover:border-teal-700 transition duration-700 ease-in-out"
          />
        </NavLink>
        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          <button className="inline-flex items-center text-lime-50 bg-teal-700 hover:bg-cyan-900 border-0 py-1 px-3 focus:outline-none  rounded text-base mt-4 md:mt-0">
            Button
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
