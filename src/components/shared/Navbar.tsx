import { linksNav, navLinks } from "@/constants";
import { Link, NavLink } from "react-router-dom";
import logo from "@/assets/logo.svg";
import userLogo from "@/assets/user-logo.svg";
import { Button } from "../ui/button";
import { useCategoryState } from "@/stores/category.store";
import { Path } from "@/types";

function Navbar() {
  const handleCategoryClick = (path: Path) => {
    const { setCategory } = useCategoryState.getState();
    setCategory(path);
  };

  const { categoryState } = useCategoryState();

  console.log(categoryState);

  return (
    <nav className="shadow-custom fixed inset-0 z-50 ">
      <div className="nav-head bg-custom-lightGray">
        <ul className="flex justify-center items-center">
          {navLinks.map((item) => (
            <li
              key={item.label}
              className="flex items-center justify-center cursor-pointer select-none font-manrope font-extralight text-[13px]"
            >
              <a
                onClick={() => handleCategoryClick(item.path)}
                className={`${
                  categoryState == item.path ? "bg-custom-pureWhite" : ""
                } px-[26px] py-[6px]`}
              >
                {item.label}
              </a>
              {/* <NavLink
                className={({ isActive }) =>
                  `${
                    isActive ? "bg-custom-pureWhite " : ""
                  } px-[26px] py-[6px] `
                }
                to={item.path}
              >
                {item.label}
              </NavLink> */}
            </li>
          ))}
        </ul>
      </div>
      <div className="nav-bottom bg-custom-pureWhite">
        <div className="nav-register container py-[14px] flex items-center justify-between border-b">
          <div className="register-logo">
            <Link to={"/"}>
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="register-contact flex gap-1 cursor-pointer">
            <span className="text-custom-slateGray font-extralight">
              8 (861)
            </span>
            <p className="text-custom-slateGray font-semibold">202-0-202</p>
          </div>
          <div className="register-login flex gap-4 ">
            <Button className="">Записаться</Button>
            <Button
              className="text-custom-slateGray flex gap-[7px] "
              variant={"outline"}
            >
              <img src={userLogo} alt="user logo" />
              Войти
            </Button>
          </div>
        </div>
        <div className="container nav-navigate">
          <ul className="flex justify-between items-center">
            {linksNav.map((item) => (
              <li
                key={item.label}
                className="flex items-center justify-center  font-manrope font-medium text-base text-custom-slateGray"
              >
                <NavLink
                  className={({ isActive }) =>
                    `${isActive ? "text-custom-dustyRose" : ""} py-[10px]`
                  }
                  to={item.path}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
