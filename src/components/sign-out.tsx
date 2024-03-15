import React from "react";
import { toast } from "react-toastify";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

export const SignOut = ({ children }: Props) => {
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

  return (
    <div
      tabIndex={-1}
      role="menuitem"
      onClick={handleLogout}
      className="group-hover/parent:flex"
    >
      <span
        className={`group relative flex w-full cursor-pointer items-center rounded-lg py-2 text-lg text-gel-primary lg:items-start lg:px-2 lg:text-sm lg:text-gel-primary hover:lg:bg-[rgba(242,38,23,0.51)]
        `}
      >
        {children}
        <div className="w-full">
          <span className="inline-block w-full text-left lg:flex-1">
            Sign out
          </span>
          <div className="hidden text-[12px] tracking-tighter opacity-50 lg:block">
            We wouldn’t want you to though.
          </div>
        </div>
      </span>
    </div>
  );
};
