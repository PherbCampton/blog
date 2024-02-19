import { Profile } from "./profile-tab";
import { PostForm } from "../pages/publish";
import { ContactForm } from "../pages/contact";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

type Props = {
  name: string;
  label: string;
  value: string;
  setForm:
    | Dispatch<SetStateAction<Profile>>
    | Dispatch<SetStateAction<PostForm>>
    | Dispatch<SetStateAction<ContactForm>>;
};

export const Textarea = ({ label, name, value, setForm }: Props) => {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
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
        <textarea
          rows={5}
          id={name}
          name={name}
          value={value}
          maxLength={300}
          onChange={handleChange}
          className="border-gel-background border px-6 py-4"
        ></textarea>
      </div>
    </div>
  );
};
