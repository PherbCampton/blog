import React from "react";
import { Link } from "react-router-dom";

type Props = {
  link: string;
  out?: boolean;
  title: string;
  description: string;
  children: React.ReactNode;
};
export const DropdownItem = ({
  link,
  title,
  children,
  description,
  out = false,
}: Props) => {
  return (
    <Link
      tabIndex={-1}
      role="menuitem"
      to={link}
      className="group-hover/parent:flex"
    >
      <span
        className={`group relative flex w-full cursor-pointer items-center rounded-lg py-2 text-lg text-gel-primary lg:items-start lg:px-2 lg:text-sm lg:text-gel-primary ${
          out
            ? "hover:lg:bg-[rgba(242,38,23,0.51)]"
            : "hover:lg:bg-[rgba(133,126,123,0.15)]"
        }`}
      >
        {children}
        <div className="w-full">
          <span className="inline-block w-full text-left lg:flex-1">
            {title}
          </span>
          <div className="hidden text-[12px] tracking-tighter opacity-50 lg:block">
            {description}
          </div>
        </div>
      </span>
    </Link>
  );
};
