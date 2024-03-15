import { NavLink } from "./nav-link";
import { Link } from "react-router-dom";
import logo from "../assets/chatter.png";
import { useEffect, useState } from "react";
import Hamburger from "./hamburger/hamburger";
import { mobileNavLinks, nav } from "../data";

export const Header = () => {
  const [visible, setVisible] = useState(true);
  const [navOpen, setNavOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  useEffect(() => {
    const scrollMe = () => {
      window.scrollY > 150 ? setIsActive(true) : setIsActive(false);
    };

    window.addEventListener("scroll", scrollMe);
  }, [isActive]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 60);

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <>
      <header
        className={`container duration-700 fixed left-0 right-0  z-40 w-full pt-7 px-5 -z-509 ${
          !visible ? "top-[-140px]" : "top-0"
        }`}
      >
        <div
          className={`flex rounded-3xl justify-between items-center  ${
            isActive ? "backdrop-blur-lg backdrop-brightness-90" : ""
          }`}
        >
          <div className="flex w-full items-center justify-between px-8 py-4 lg:p-10">
            <Link to="/" className="hover:opacity-75">
              <img src={logo} alt="logo" width="110px" />
            </Link>
            <div className="lg:hidden">
              <Hamburger nav={navOpen} setNav={setNavOpen} />
            </div>
            <div className="hidden lg:flex items-center">
              <div className=" text-sm flex items-center">
                {nav.map((link, i) => (
                  <Link
                    key={i}
                    to={link.path}
                    className="hover:opacity-75 lg:pl-5 lg:pr-5 font-medium"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
              <div className="hidden text-sm lg:flex items-center">
                <Link
                  to="/sign-in"
                  className="hover:opacity-75 font-medium lg:pl-5 lg:pr-5 cursor-pointer bg-primaryColor text-primaryBackground rounded-2xl py-1.5"
                >
                  Sign in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div
        className={`${
          navOpen ? "fixed" : "hidden"
        } inset-0 z-20 h-full overflow-auto lg:hidden`}
      >
        <div
          className={`${
            navOpen ? "fixed" : "hidden"
          } inset-0 -z-10 bg-black bg-opacity-80 backdrop-blur-sm`}
        ></div>
        <ul className="container mt-20 flex flex-col gap-8 p-[51px] text-xl font-semibold text-gel-primary">
          {mobileNavLinks.map((navLink, i) => (
            <NavLink
              key={i}
              navOpen={navOpen}
              text={navLink.nav}
              link={navLink.path}
              setNavOpen={setNavOpen}
            />
          ))}
        </ul>
      </div>
    </>
  );
};
