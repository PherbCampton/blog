import { Spinner } from "./spinner";
import { SignOut } from "./sign-out";
import { NavLink } from "./nav-link";
import { toast } from "react-toastify";
import { signOut } from "firebase/auth";
import logo from "../assets/chatter.png";
import { FiSearch } from "react-icons/fi";
import { FaRegStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import { useUser } from "../providers/user";
import Hamburger from "./hamburger/hamburger";
import { DropdownItem } from "./dropdown-item";
import { MdOutlinePublish } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { CgProfile, CgLogOut } from "react-icons/cg";
import defaultAvatar from "../assets/profile-placeholder.jpg";
import { IoMdNotificationsOutline, IoIosNotifications } from "react-icons/io";

export const ProfileHeader = () => {
  const notification = 0;
  const [visible, setVisible] = useState(true);
  const [navOpen, setNavOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const { allUsers, currentUser, userLoading } = useUser();

  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        toast.error((error as Error).message);
      });
  };

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

  const profileNavLinks = [
    {
      nav: "Publish a post",
      path: "/publish",
    },
    {
      nav: "Dashboard",
      path: `/profile/${currentUser?.uid}`,
    },
    {
      nav: "Notifications",
      path: `/profile/${currentUser?.uid}`,
    },
  ];

  return (
    <div>
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
            <div className="lg:hidden">
              <Hamburger nav={navOpen} setNav={setNavOpen} />
            </div>
            <div className="hidden lg:flex items-center">
              <div className=" text-sm flex items-center">
                <Link
                  to="/sign-in"
                  className="hover:opacity-75 font-medium lg:pl-5 lg:pr-5 cursor-pointer rounded-full py-1.5"
                >
                  <FiSearch fontSize={"20px"} />
                </Link>
                {/* {pathname !== "/publish" && editPath !== "edit-post" && (
                  <Link
                    to="/publish"
                    className="hover:opacity-75 font-medium flex items-center gap-2 lg:pl-5 lg:pr-5 cursor-pointer text-primaryColor rounded-full py-1.5 border border-1 mr-5"
                  >
                    <p className="text-sm">Write</p>
                  </Link>
                )} */}
              </div>
              <div className="group/parent hidden text-sm lg:flex items-center">
                <div className=" hover:opacity-75 font-medium lg:pr-2 cursor-pointer  text-primaryBackground rounded-full">
                  <figure className=" flex max-h-[46px] max-w-[46px] items-center overflow-hidden rounded-full border-[3px] border-gel-background text-black">
                    {userLoading ? (
                      <Spinner size="40" />
                    ) : (
                      <picture>
                        <source
                          sizes="40px"
                          type="image/webp"
                          srcSet={`${
                            getUserData?.userImg
                              ? getUserData?.userImg
                              : defaultAvatar
                          } 40w`}
                        />
                        <img
                          width="40"
                          height="40"
                          sizes="40px"
                          loading="lazy"
                          alt="Profile Picture"
                          src={
                            getUserData?.userImg
                              ? (getUserData?.userImg as string)
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
                <div className="group w-full hidden group-focus:flex group-hover/parent:flex ">
                  <div className="right-10 origin-top-right w-full min-w-fit rounded-2xl pt-4 ring-1 ring-black ring-opacity-5 drop-shadow-xl focus:outline-none lg:absolute lg:ml-2 lg:mt-6 lg:w-[270px] lg:bg-gel-black/80 lg:pt-0 lg:shadow-lg lg:backdrop-blur-lg">
                    <div className="w-full pt-2 lg:px-2 lg:py-2">
                      <DropdownItem
                        link={`/publish`}
                        title="Publish a post"
                        description="Your ideas are waiting for you..."
                      >
                        <MdOutlinePublish
                          fontSize={"30px"}
                          className="mr-3 mt-1.5"
                        />
                      </DropdownItem>
                      <DropdownItem
                        title="Dashboard"
                        link={`/profile/${currentUser?.uid}`}
                        description="View and update your profile"
                      >
                        <CgProfile className="mr-3 mt-1.5" fontSize={"30px"} />
                      </DropdownItem>
                      <DropdownItem
                        title="Notifications"
                        description="Stay updated"
                        link={`/profile/${currentUser?.uid}`}
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
          {profileNavLinks.map((navLink, i) => (
            <NavLink
              key={i}
              navOpen={navOpen}
              text={navLink.nav}
              link={navLink.path}
              setNavOpen={setNavOpen}
            />
          ))}
          <li>
            <div className="nav-dropdown relative inline-block w-full text-center">
              <div className="w-full">
                <a
                  onClick={handleLogout}
                  className="text-center opacity-70 hover:opacity-90 hover:text-[red] lg:pl-5 lg:pr-5 cursor-pointer"
                >
                  Sign out
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
