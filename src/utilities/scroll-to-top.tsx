import { useEffect, ReactNode } from "react";
import { useLocation } from "react-router-dom";

type NavigationType = "POP" | string;

interface SmoothScrollProps {
  children: ReactNode;
}

function SmoothScroll({ children }: SmoothScrollProps) {
  const location = useLocation();
  const navType: NavigationType = "POP";

  useEffect(() => {
    if (navType == "POP") {
      window.scrollTo({
        top: 0,
        behavior: "auto",
      });
    }
  }, [location, navType]);

  return <>{children}</>;
}

export default SmoothScroll;
