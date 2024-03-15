import { useNavigate } from "react-router-dom";

type Props = {
  text: string;
  link: string;
  navOpen: boolean;
  setNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const NavLink = ({ text, link, navOpen, setNavOpen }: Props) => {
  const navigate = useNavigate();

  const navigation = (route: string) => {
    navigate(route);
    setNavOpen(false);
    if (!navOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  };

  return (
    <li>
      <div className="nav-dropdown relative inline-block w-full text-center">
        <div className="w-full">
          <a
            onClick={() => navigation(link)}
            className="text-center opacity-70 hover:opacity-90 hover:text-line lg:pl-5 lg:pr-5 cursor-pointer"
          >
            {text}
          </a>
        </div>
      </div>
    </li>
  );
};
