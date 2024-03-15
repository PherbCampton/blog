import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/input";
import { LinkText } from "../../components/link-text";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { PrimaryBtn } from "../../components/primary-btn";
import { auth, db, provider } from "../../firebase/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export type SignInForm = {
  email: string;
  password: string;
};

export const SignIn = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState<SignInForm>({
    email: "",
    password: "",
  });

  const googleAuth = async () => {
    try {
      const createUser = await signInWithPopup(auth, provider);
      const newUser = createUser.user;

      const ref = doc(db, "users", newUser.uid);
      const userDoc = await getDoc(ref);

      if (!userDoc.exists()) {
        await setDoc(ref, {
          x: "",
          bio: "",
          linkedin: "",
          instagram: "",
          userId: newUser.uid,
          email: newUser.email,
          userImg: newUser.photoURL,
          username: newUser.displayName,
          theme: { value: "#fffff", label: "Default" },
        });
      }
      toast.success("You are in");
      navigate("/feeds");
    } catch (error) {
      toast.error(
        (error as Error).message === "Firebase: Error (auth/internal-error)."
          ? "Check your internet connection"
          : (error as Error).message
      );
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (Object.values(form).every((value) => value === "")) {
      toast.error("All fields are required");
    } else {
      try {
        setIsLoading(true);
        await signInWithEmailAndPassword(auth, form.email, form.password);
        navigate("/feeds");
        setIsLoading(false);
        toast.success("You are now in");
      } catch (error) {
        setIsLoading(false);
        toast.error(
          (error as Error).message ===
            "Firebase: Error (auth/network-request-failed)."
            ? "Check your internet connection"
            : (error as Error).message
        );
      }
    }
  };

  return (
    <>
      <div className="container px-5">
        <div className="wrapper">
          <div className="grid min-h-[670px] grid-cols-1 gap-16 overflow-hidden rounded-[36px] bg-gel-black px-8 pb-16 pt-40 lg:grid-cols-2">
            <div>
              <h1 className="text-6xl font-bold leading-tight tracking-tight">
                Welcome back
              </h1>
              <p className="mt-4 text-lg text-gel-gray text-opacity-40">
                A few updates were added and a couple of writers published
                amazing contents during your absence and we are very excited to
                get you back on track...
              </p>
            </div>
            <div>
              <form
                noValidate={true}
                onSubmit={handleSubmit}
                className="flex flex-col gap-4"
              >
                <Input
                  type="email"
                  name="email"
                  label="Email"
                  setForm={setForm}
                  value={form.email}
                />
                <Input
                  type="password"
                  name="password"
                  label="Password"
                  setForm={setForm}
                  value={form.password}
                />
                <div className="my-6 flex flex-col items-center gap-8 lg:flex-row">
                  <PrimaryBtn
                    type="submit"
                    text="Get me in"
                    loading={isLoading}
                  />
                  <button
                    type="button"
                    onClick={googleAuth}
                    id="contact-send-button"
                    className=" button solid-gradient outlined w-full md:w-auto "
                  >
                    <span className="flex items-center justify-center">
                      <FcGoogle fontSize="20px" />
                      <span className="button-action-text text-primaryBackground"></span>
                    </span>
                  </button>
                </div>
                <LinkText text="Don’t have an account?" link="/sign-up" />
              </form>
              <div className="relative -right-8 mt-12"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
