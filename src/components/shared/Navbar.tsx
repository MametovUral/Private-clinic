import { navLinks } from "@/constants";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="nav-head bg-custom-lightGray">
        <ul className="flex gap-[51px] justify-center items-center">
          {navLinks.map((item) => (
            <NavLink to={item.path} key={item.label}>
              {item.label}
            </NavLink>
          ))}
        </ul>
      </div>
      <div className="nav-bottom"></div>
    </nav>
  );
}

export default Navbar;
