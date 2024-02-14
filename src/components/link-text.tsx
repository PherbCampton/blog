import { Link } from "react-router-dom";

type Props = {
  text: string;
  link: string;
};

export const LinkText = ({ text, link }: Props) => {
  return (
    <Link to={link} className="group flex items-center hover:text-white">
      <span className="font-medium">{text}</span>
      <i className="relative top-[-5px] ml-1.5 inline-block align-text-top transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:duration-500 group-active:translate-x-10 group-active:-translate-y-10 group-active:opacity-0">
        <svg
          width="9"
          height="9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.784 1.333H2.31V.04h6.68v6.68H7.7V2.248L1.906 8.04.99 7.126l5.793-5.793Z"
          ></path>
        </svg>
      </i>
    </Link>
  );
};
