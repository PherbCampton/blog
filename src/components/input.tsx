import { Profile } from "./profile-tab";
import { PostForm } from "../pages/publish";
import { SignUpForm } from "../pages/sign-up";
import { SignInForm } from "../pages/sign-in";
import { ContactForm } from "../pages/contact";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

type Props = {
  type: string;
  name: string;
  value: string;
  label: string;
  disabled?: boolean;
  setForm:
    | Dispatch<SetStateAction<Profile>>
    | Dispatch<SetStateAction<PostForm>>
    | Dispatch<SetStateAction<SignInForm>>
    | Dispatch<SetStateAction<SignUpForm>>
    | Dispatch<SetStateAction<ContactForm>>;
};

export const Input = ({
  type,
  name,
  value,
  label,
  setForm,
  disabled = false,
}: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setForm((prevForm: any) => ({
      ...prevForm,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      <label htmlFor={name} className="ml-2 mb-2 block text-sm font-semibold">
        {label}
      </label>
      <div className="relative">
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          disabled={disabled}
          onChange={handleChange}
          className={`border-gel-background border px-6 py-4 ${
            disabled ? "text-gel-gray cursor-not-allowed" : ""
          }`}
        />
      </div>
    </div>
  );
};
