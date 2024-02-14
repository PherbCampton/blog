import { Routes, Route, Navigate } from "react-router-dom";

import { ProfileHeader } from "./components/profile-header";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Home } from "./pages/home";
import { Feeds } from "./pages/feeds";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";
import { SignIn } from "./pages/sign-in";
import { SignUp } from "./pages/sign-up";
import { useUser } from "./providers/user";

export default function App() {
  const userContext = useUser();
  const currentUser = userContext?.currentUser;

  return (
    <>
      {currentUser ? <ProfileHeader /> : <Header />}
      <Routes>
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
      </Routes>
      <Footer />
    </>
  );
}
