// import { profileNav } from "../data";
import logo from "../assets/chatter.svg";
import { FiSearch } from "react-icons/fi";
import { FaRegStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useUser } from "../providers/user";
import { DropdownItem } from "./dropdown-item";
import { Link, useLocation } from "react-router-dom";
import { CgProfile, CgLogOut } from "react-icons/cg";
import defaultAvatar from "../assets/default-avatar.jpg";
import { IoMdNotificationsOutline, IoIosNotifications } from "react-icons/io";
import { SignOut } from "./sign-out";
import { Spinner } from "./spinner";
// import Hamburger from "./hamburger/hamburger";

export const ProfileHeader = () => {
  const notification = 0;
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const { allUsers, currentUser, userLoading } = useUser();

  const getUserData = allUsers.find((user) => user.userId === currentUser?.uid);

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
        !visible ? "top-[-150px]" : "top-0"
      }`}
    >
      <div
        className={`flex rounded-3xl justify-between items-center  ${
          isActive ? "backdrop-blur-lg " : ""
        }`}
      >
        <div className="flex w-full items-center justify-between px-8 py-4 lg:p-10">
          <Link to="/feeds" className="hover:opacity-75">
            <img src={logo} alt="logo" width="110px" />
          </Link>
          {/* <div className="lg:hidden">
            <Hamburger />
          </div> */}
          <div className="flex items-center">
            <div className="hidden text-sm lg:flex items-center"></div>
            <div className="hidden text-sm lg:flex items-center">
              <Link
                to="/sign-in"
                className="hover:opacity-75 font-medium lg:pl-5 lg:pr-5 cursor-pointer rounded-full py-1.5"
              >
                <FiSearch fontSize={"20px"} />
              </Link>
              {pathname !== "/publish" && (
                <Link
                  to="/publish"
                  className="hover:opacity-75 font-medium flex items-center gap-2 lg:pl-5 lg:pr-5 cursor-pointer text-primaryColor rounded-full py-1.5 border border-1 mr-5"
                >
                  <p className="text-sm">Write</p>
                </Link>
              )}
            </div>
            <div className="group/parent hidden text-sm lg:flex items-center">
              <div className=" hover:opacity-75 font-medium lg:pr-2 cursor-pointer  text-primaryBackground rounded-full">
                <figure className=" flex max-h-[46px] max-w-[46px] items-center overflow-hidden rounded-full border-[3px] border-gel-background text-black">
                  {userLoading ? (
                    <Spinner size="40" />
                  ) : (
                    <picture>
                      <source
                        type="image/webp"
                        sizes="40px"
                        srcSet={`${
                          getUserData?.userImg
                            ? getUserData?.userImg
                            : defaultAvatar
                        } 40w`}
                      />
                      <img
                        width="40"
                        height="40"
                        alt="ZedRun"
                        loading="lazy"
                        sizes="40px"
                        src={
                          getUserData?.userImg
                            ? getUserData?.userImg
                            : defaultAvatar
                        }
                        srcSet={`${
                          getUserData?.userImg
                            ? getUserData?.userImg
                            : defaultAvatar
                        } 40w`}
                        className="object-cover min-h-[40px] min-w-[40px]"
                      />
                    </picture>
                  )}
                </figure>
              </div>

              <div className="group w-full hidden group-focus:flex group-hover/parent:flex hover:group/parent">
                <div className="right-10 origin-top-right w-full min-w-fit rounded-2xl pt-4 ring-1 ring-black ring-opacity-5 drop-shadow-xl focus:outline-none lg:absolute lg:ml-2 lg:mt-6 lg:w-[270px] lg:bg-gel-black/80 lg:pt-0 lg:shadow-lg lg:backdrop-blur-lg">
                  <div className="w-full pt-2 lg:px-2 lg:py-2">
                    <DropdownItem
                      title="Dashboard"
                      link={`/profile/${currentUser?.uid}`}
                      description="View and update your profile"
                    >
                      <CgProfile className="mr-3 mt-1.5" fontSize={"30px"} />
                    </DropdownItem>
                    <DropdownItem
                      title="Notifications"
                      link={`/profile/${currentUser?.uid}`}
                      description="Stay updated"
                    >
                      {notification > 0 ? (
                        <IoIosNotifications
                          fontSize={"30px"}
                          className="mr-3 mt-1.5"
                        />
                      ) : (
                        <IoMdNotificationsOutline
                          fontSize={"30px"}
                          className="mr-3 mt-1.5"
                        />
                      )}
                    </DropdownItem>
                    <DropdownItem
                      title="Favorites"
                      link={`/profile/${currentUser?.uid}`}
                      description="View and manage your saved posts."
                    >
                      <FaRegStar className="mr-3 mt-1.5" fontSize={"30px"} />
                    </DropdownItem>
                    <SignOut>
                      <CgLogOut className="mr-3 mt-1.5" fontSize={"30px"} />
                    </SignOut>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
