import { navLinks } from "@/constants";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="nav-head bg-custom-lightGray">
        <ul className="flex justify-center items-center">
          {navLinks.map((item) => (
            <li
              key={item.label}
              className="flex items-center justify-center   font-manrope font-extralight text-[13px]"
            >
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive ? "bg-custom-pureWhite " : ""
                  } px-[26px] py-[6px] `
                }
                to={item.path}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="nav-bottom"></div>
    </nav>
  );
}

export default Navbar;
