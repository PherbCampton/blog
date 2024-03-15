import { Post } from "./pages/post";
import { Home } from "./pages/home";
import { Feeds } from "./pages/feeds";
import { About } from "./pages/about";
import { Slide } from "react-toastify";
import { EditPost } from "./pages/edit";
import { SignIn } from "./pages/sign-in";
import { SignUp } from "./pages/sign-up";
import { Profile } from "./pages/profile";
import { Publish } from "./pages/publish";
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
      <ToastContainer
        theme="dark"
        transition={Slide}
        closeButton={false}
        position="top-center"
        bodyClassName="toastBody"
        progressClassName="toastProgress"
      />
      <SmoothScroll>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/post/:postId" element={<Post />} />
          <Route path="/edit-post/:postId" element={<EditPost />} />
          {!currentUser && <Route path="/" element={<Home />} />}
          {currentUser && <Route path="/feeds" element={<Feeds />} />}
          {!currentUser && <Route path="/sign-in" element={<SignIn />} />}
          {!currentUser && <Route path="/sign-up" element={<SignUp />} />}
          {currentUser && <Route path="/publish" element={<Publish />} />}
          <Route path="/profile/:userId" element={<Profile />} />
          <Route
            path="*"
            element={<Navigate to={currentUser ? "/feeds" : "/"} />}
          />
        </Routes>
      </SmoothScroll>
      <Footer />
    </>
  );
}
