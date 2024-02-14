import { Fragment } from "react";
import {
  Route,
  Outlet,
  Navigate,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { Home } from "../pages/home";
import { Feeds } from "../pages/feeds";
import { About } from "../pages/about";
import { SignIn } from "../pages/sign-in";
import { SignUp } from "../pages/sign-up";
import { Contact } from "../pages/contact";
import { useUser } from "../providers/user";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { ProfileHeader } from "../components/profile-header";

const currentUser = true;

const AppRoutes = () => {
  const userContext = useUser();
  const currentUser = userContext?.currentUser;

  return (
    <>
      {currentUser ? <ProfileHeader /> : <Header />}
      <Outlet />
      <Footer />
    </>
  );
};

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Fragment>
      <Route element={<AppRoutes />}>
        {!currentUser && <Route path="/" element={<Home />} />}
        {currentUser && <Route path="/feeds" element={<Feeds />} />}
        <Route
          path="*"
          element={<Navigate to={currentUser ? "/feeds" : "/"} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Route>
    </Fragment>
  )
);
