// import { profileNav } from "../data";
import { Link } from "react-router-dom";
import logo from "../assets/chatter.svg";
import { FiSearch } from "react-icons/fi";
import { FaRegStar } from "react-icons/fa";
import { Loading } from "./loader/loading";
8;
import { useEffect, useState } from "react";
import { useUser } from "../providers/user";
import { DropdownItem } from "./dropdown-item";
import { CgProfile, CgLogOut } from "react-icons/cg";
import defaultAvatar from "../assets/default-avatar.jpg";
import { IoMdNotificationsOutline, IoIosNotifications } from "react-icons/io";
// import Hamburger from "./hamburger/hamburger";

export const ProfileHeader = () => {
  const notification = 0;
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
      {userLoading && <Loading />}
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
            </div>
            <div className="group/parent hidden text-sm lg:flex items-center">
              <div className="py-[20px] hover:opacity-75 font-medium lg:pr-2 cursor-pointer  text-primaryBackground rounded-2xl">
                <img
                  src={
                    getUserData?.userImg ? getUserData?.userImg : defaultAvatar
                  }
                  width={30}
                  height={30}
                  alt="profile image"
                  className=" rounded-full min-w-[30px]"
                />
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
                    <DropdownItem
                      out
                      title="Sign out"
                      link={`/profile/${currentUser?.uid}`}
                      description="We wouldn’t want you to though."
                    >
                      <CgLogOut className="mr-3 mt-1.5" fontSize={"30px"} />
                    </DropdownItem>
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
