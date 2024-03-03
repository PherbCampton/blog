import { nav } from "../data";
import { Link } from "react-router-dom";
import logo from "../assets/chatter.svg";
import { useEffect, useState } from "react";
// import Hamburger from "./hamburger/hamburger";

export const Header = () => {
  const [visible, setVisible] = useState(true);
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
    <header
      className={`container duration-700 fixed left-0 right-0  z-40 w-full pt-7 px-5 -z-509 ${
        !visible ? "top-[-120px]" : "top-0"
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
          {/* <div className="lg:hidden">
            <Hamburger />
          </div> */}
          <div className="flex items-center">
            <div className="hidden text-sm lg:flex items-center">
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
  );
};
