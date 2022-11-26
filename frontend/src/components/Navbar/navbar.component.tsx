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
          <NavLink to="/track" className="mr-5 hover:text-gray-900">
            Track
          </NavLink>
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
        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0"></div>
      </div>
    </header>
  );
};

export default Navbar;
