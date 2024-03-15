import { tags } from "../../data";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/input";
import { auth, db } from "../../firebase/firebase";
import { LinkText } from "../../components/link-text";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { PrimaryBtn } from "../../components/primary-btn";
import { createUserWithEmailAndPassword } from "firebase/auth";
import MultiSelect, { MultiSelectProps } from "../../components/multi-select";

export type SignUpForm = {
  name: string;
  email: string;
  phone: string;
  password: string;
  rePassword: string;
  interests: MultiSelectProps["options"];
};

export const SignUp = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [form, setForm] = useState<SignUpForm>({
    name: "",
    email: "",
    phone: "",
    password: "",
    interests: [],
    rePassword: "",
  });

  const options = tags.map((tag) => {
    return { value: tag.color, label: tag.title };
  });

  const handleMultiSelectChange = (
    selectedValues: MultiSelectProps["options"]
  ) => {
    setForm((prevForm: SignUpForm) => ({
      ...prevForm,
      interests: selectedValues,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (Object.values(form).every((value) => value === "")) {
      toast.error("All fields are required");
    } else if (form.password !== form.rePassword) {
      toast.error("Password doesn't match");
    } else {
      try {
        setIsLoading(true);
        const { user } = await createUserWithEmailAndPassword(
          auth,
          form.email,
          form.password
        );
        const ref = doc(db, "users", user.uid);
        const userDoc = await getDoc(ref);

        if (!userDoc.exists()) {
          await setDoc(ref, {
            x: "",
            bio: "",
            userImg: "",
            linkedin: "",
            instagram: "",
            userId: user.uid,
            phone: form.phone,
            email: form.email,
            username: form.name,
            password: form.password,
            interests: form.interests,
            theme: { value: "#fffff", label: "Default" },
          });

          setIsLoading(false);
          toast.success("Account created successfully");
          navigate("/sign-in");
        }
      } catch (error) {
        setIsLoading(false);
        toast.error(
          (error as Error).message === "Firebase: Error (auth/internal-error)."
            ? "Check your internet connection"
            : (error as Error).message
        );
      }
    }
  };

  return (
    <>
      <div className="container px-5">
        <div className="wrapper ">
          <div className="grid min-h-[670px] grid-cols-1 gap-16 overflow-hidden rounded-[36px] bg-gel-black px-8 pb-16 pt-40 lg:grid-cols-2">
            <div>
              <h1 className="text-6xl font-bold leading-tight tracking-tight">
                Create an account
              </h1>
              <p className="mt-4 text-lg text-gel-gray text-opacity-40">
                Join the league of the world's most outstanding minds today,
                connect with intellects from around the globe and consume value
                adding contents on <strong>Chatter</strong>...
              </p>
            </div>
            <div>
              <form
                onSubmit={handleSubmit}
                noValidate={true}
                className="flex flex-col gap-4"
              >
                <Input
                  name="name"
                  type="text"
                  label="Name"
                  setForm={setForm}
                  value={form.name}
                />
                <Input
                  type="tel"
                  name="phone"
                  setForm={setForm}
                  value={form.phone}
                  label="Phone number"
                />
                <Input
                  type="email"
                  name="email"
                  label="Email"
                  setForm={setForm}
                  value={form.email}
                />
                <MultiSelect
                  maxSelected={4}
                  options={options}
                  selectedOptions={form.interests}
                  onChange={handleMultiSelectChange}
                />
                <Input
                  type="password"
                  name="password"
                  label="Password"
                  setForm={setForm}
                  value={form.password}
                />
                <Input
                  type="password"
                  setForm={setForm}
                  name="rePassword"
                  value={form.rePassword}
                  label="Re-enter Password"
                />
                <p className="my-2 text-left text-sm text-gel-gray-2">
                  By signing up you agree to <strong>Chatter’s</strong> Terms of
                  Service and acknowledge that <strong>Chatter’s</strong>{" "}
                  Privacy Policy applies to you.
                </p>
                <div className="my-6 flex flex-col items-center gap-8 lg:flex-row">
                  <PrimaryBtn
                    type="submit"
                    text="Get me in"
                    loading={isLoading}
                  />
                  <button
                    id="contact-send-button"
                    className=" button solid-gradient outlined w-full md:w-auto "
                  >
                    <span className="flex items-center justify-center">
                      <FcGoogle fontSize="20px" />
                      <span className="button-action-text text-primaryBackground"></span>
                    </span>
                  </button>
                </div>
                <LinkText text="Already have an account?" link="/sign-in" />
              </form>
              <div className="relative -right-8 mt-12"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
