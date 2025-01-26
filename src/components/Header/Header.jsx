import { CiShoppingCart } from "react-icons/ci";
import {  NavLink } from "react-router-dom"

function Header() {
  const links = <>
  <NavLink 
    to={`/`} 
    className={({ isActive }) => isActive ? "mx-8 underline-offset-8 underline text-white text-lg" : "mx-8 text-white text-lg"}
  >
    Home
  </NavLink>
  <NavLink 
    to={`/statistics`} 
    className={({ isActive }) => isActive ? "mx-8 underline-offset-8 underline text-white text-lg" : "mx-8 text-white text-lg"}
  >
    Statistics
  </NavLink>
  <NavLink 
    to={`/dashboard`} 
    className={({ isActive }) => isActive ? "mx-8 underline-offset-8 underline text-white text-lg" : "mx-8 text-white text-lg"}
  >
    Dashboard
  </NavLink>
  <NavLink 
    to={`/contact`} 
    className={({ isActive }) => isActive ? "mx-8 underline-offset-8 underline text-white text-lg" : "mx-8 text-white text-lg"}
  >
    Contact
  </NavLink>
</>;

  return (
    <div className="navbar bg-[#9538e2] mt-7 max-w-screen-2xl   rounded-t-xl	 mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <a className=" text-2xl font-bold text-white/90">Gadget Heaven</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal">
      {links}
    </ul>
  </div>
  <div className="navbar-end gap-4">
    <span className=" cursor-pointer bg-white w-9 h-9 flex justify-center items-center text-2xl rounded-full"><CiShoppingCart /></span>
    <img className=" cursor-pointer w-9 h-9 bg-white rounded-full p-2" src="https://img.icons8.com/?size=50&id=87&format=png" alt="" />
  </div>
</div>
  )
}

export default Header