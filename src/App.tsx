import { Home } from "./pages/home";
import { Feeds } from "./pages/feeds";
import { About } from "./pages/about";
import { Slide } from "react-toastify";
import { SignIn } from "./pages/sign-in";
import { SignUp } from "./pages/sign-up";
import { Profile } from "./pages/profile";
import { Contact } from "./pages/contact";
import { useUser } from "./providers/user";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { ToastContainer } from "react-toastify";
import SmoothScroll from "./utilities/scroll-to-top";
import { Routes, Route, Navigate } from "react-router-dom";
import { ProfileHeader } from "./components/profile-header";

import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const userContext = useUser();
  const currentUser = userContext?.currentUser;

  return (
    <>
      {currentUser ? <ProfileHeader /> : <Header />}
      <SmoothScroll>
        <Routes>
          {currentUser && <Route path="/" element={<Home />} />}
          {currentUser && <Route path="/feeds" element={<Feeds />} />}
          <Route
            path="*"
            element={<Navigate to={currentUser ? "/feeds" : "/"} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {!currentUser && <Route path="/sign-in" element={<SignIn />} />}
          {!currentUser && <Route path="/sign-up" element={<SignUp />} />}
          {currentUser && (
            <Route path="/profile/:userId" element={<Profile />} />
          )}
        </Routes>
      </SmoothScroll>
      <Footer />
      <ToastContainer
        theme="dark"
        transition={Slide}
        position="bottom-center"
      />
    </>
  );
}
