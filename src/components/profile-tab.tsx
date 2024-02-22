import { Input } from "./input";
import { v4 as uuid } from "uuid";
import { Textarea } from "./textarea";
import { toast } from "react-toastify";
import { PrimaryBtn } from "./primary-btn";
import { IoTrashBin } from "react-icons/io5";
import { tags, profileColors } from "../data";
import { db, storage } from "../firebase/firebase";
import { doc, updateDoc } from "firebase/firestore";
import defaultAvatar from "../assets/default-avatar.jpg";
import SingleSelect, { OptionType } from "./single-select";
import { FormEvent, useEffect, useState, useRef } from "react";
import MultiSelect, { MultiSelectProps } from "./multi-select";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export type Profile = {
  bio: string;
  email: string;
  savedAt?: number;
  username: string;
  theme: OptionType;
  userImg: string | undefined;
  userId?: string | undefined;
  interests: MultiSelectProps["options"];
};

type Props = {
  getUserData: Profile | undefined;
  handleProfileTheme: (theme: string) => void;
};

export const ProfileTab = ({ handleProfileTheme, getUserData }: Props) => {
  useEffect(() => {
    if (getUserData) {
      setForm(getUserData);
    } else {
      setForm({
        bio: "",
        email: "",
        userImg: "",
        username: "",
        interests: [],
        theme: { value: "#fffff", label: "Default" },
      });
    }
  }, [getUserData]);

  const [isLoading, setIsLoading] = useState(false);
  const imgRef = useRef<HTMLInputElement | null>(null);
  const [imgUrl, setImgUrl] = useState(getUserData?.userImg);

  const options = tags.map((tag) => {
    return { value: tag.color, label: tag.title };
  });

  const [form, setForm] = useState<Profile>({
    bio: "",
    email: "",
    userImg: "",
    username: "",
    interests: [],
    theme: { value: "#fffff", label: "Default" },
  });

  const handleMultiSelectChange = (
    selectedValues: MultiSelectProps["options"]
  ) => {
    setForm((prevForm: Profile) => ({
      ...prevForm,
      interests: selectedValues,
    }));
  };

  const handleSingleSelectChange = (selectedValues: Profile["theme"]) => {
    setForm((prevForm: Profile) => ({
      ...prevForm,
      theme: selectedValues,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const isFormDirty = Object.keys(form).some(
      (key) =>
        form[key as keyof Profile] !== getUserData?.[key as keyof Profile]
    );
    const isFormFieldEmpty = Object.keys(form).some((key) => {
      const value = form[key as keyof Profile];
      return (
        !value || (Array.isArray(value) && value.length === 0) || value === ""
      );
    });
    if (isFormFieldEmpty) {
      toast.error("All fields are required");
      return;
    }
    if (!isFormDirty) {
      toast.error("No changes were made");
      return;
    }

    setIsLoading(true);

    const storageRef = ref(storage, `images/${uuid()}`);
    await uploadBytes(storageRef, form?.userImg);

    const imageUrl = await getDownloadURL(storageRef);

    try {
      const docRef = doc(db, "users", getUserData?.userId);
      await updateDoc(docRef, {
        bio: form.bio,
        userImg: imageUrl,
        email: form.email,
        theme: form.theme,
        username: form.username,
        interests: form.interests,
      });
      setIsLoading(false);
      toast.success("Profile updated successful");
    } catch (error) {
      setIsLoading(false);
      toast.error(
        (error as Error).message === "Firebase: Error (auth/internal-error)."
          ? "Check your internet connection"
          : (error as Error).message
      );
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImgUrl(URL.createObjectURL(file));
      setForm({ ...form, userImg: file });
    }
  };

  useEffect(() => {
    handleProfileTheme(form?.theme.value);
  }, [form.theme?.value, handleProfileTheme]);

  const openFile = () => {
    imgRef?.current?.click();
  };

  return (
    <form
      noValidate={true}
      onSubmit={handleSubmit}
      className="flex flex-col gap-4"
    >
      <div className="mb-4 mt-5 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center">
          <div
            onClick={openFile}
            className="relative rounded-full overflow-hidden cursor-pointer opacity-65 hover:opacity-80"
          >
            <div className="text-xs bottom-0 h-[25%] w-full absolute bg-[#979292] opacity-60 text-center text-[#000000] font-bold pt-1">
              Edit
            </div>
            <img
              alt="profile image"
              className="rounded-full w-[150px] h-[150px] object-cover"
              src={
                imgUrl ? imgUrl : form.userImg ? form.userImg : defaultAvatar
              }
            />
            <input
              type="file"
              ref={imgRef}
              className="hidden"
              onChange={handleFileChange}
              accept="image/png, image/jpg, image/jpeg"
            />
          </div>
          <IoTrashBin
            style={{ fill: "red" }}
            className="mt-3 opacity-50 hover:opacity-75 cursor-pointer"
          />
        </div>
        <label htmlFor="" className="mb-2 mt-2 block text-sm font-semibold">
          Profile Image
        </label>
      </div>
      <Input
        name="username"
        type="text"
        label="Name"
        setForm={setForm}
        value={form.username}
      />
      <Input
        disabled
        name="email"
        type="email"
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
      <Textarea name="bio" label="Bio" value={form.bio} setForm={setForm} />
      <SingleSelect
        label="Theme"
        options={profileColors}
        selectedOption={form.theme}
        onChange={handleSingleSelectChange}
        help="Select your profile accent color"
      />
      <div className="my-6 flex flex-col items-center gap-8 lg:flex-row">
        <PrimaryBtn type="submit" loading={isLoading} text="Update Profile" />
      </div>
    </form>
  );
};
