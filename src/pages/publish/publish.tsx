import { v4 as uuid } from "uuid";
import { toast } from "react-toastify";
import { Input } from "../../components/input";
import { mkdStr, userInterests } from "../../data";
import { FormEvent, useRef, useState } from "react";
import { Textarea } from "../../components/textarea";
import { PrimaryBtn } from "../../components/primary-btn";
import { useNavigate } from "react-router-dom";

import "./editor.css";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import defaultImage from "../../assets/default-post-img.png";

import MDEditor from "@uiw/react-md-editor";
import SingleSelect, { OptionType } from "../../components/single-select";
import { addDoc, collection } from "firebase/firestore";
import { db, storage } from "../../firebase/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useUser } from "../../providers/user";

export type PostForm = {
  title: string;
  tag: OptionType;
  postImg: string;
  markdown: string;
  description: string;
};

export const Publish = () => {
  const [form, setForm] = useState<PostForm>({
    title: "",
    postImg: "",
    description: "",
    markdown: mkdStr,
    tag: { value: "", label: "" },
  });

  const { currentUser } = useUser();
  const navigate = useNavigate();
  const [imgUrl, setImgUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const imgRef = useRef<HTMLInputElement | null>(null);
  const [preview, setPreview] = useState<"edit" | "preview">("edit");

  const handlePreview = () => {
    setPreview((prev) => (prev === "edit" ? "preview" : "edit"));
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const isFormFieldEmpty = Object.keys(form).some((key) => {
      const value = form[key as keyof PostForm];
      return (
        !value || (Array.isArray(value) && value.length === 0) || value === ""
      );
    });
    try {
      if (isFormFieldEmpty) {
        toast.error("All fields are required");
        return;
      }
      setIsLoading(true);
      const collections = collection(db, "posts");
      const storageRef = ref(storage, `preview-image/${uuid()}`);
      await uploadBytes(storageRef, form?.postImg);

      const imageUrl = await getDownloadURL(storageRef);

      await addDoc(collections, {
        likes: 0,
        pageViews: 0,
        tag: form.tag,
        title: form.title,
        postImg: imageUrl,
        createdAt: Date.now(),
        content: form.markdown,
        userId: currentUser?.uid,
        description: form.description,
      });

      setForm({
        title: "",
        postImg: "",
        markdown: "",
        description: "",
        tag: { value: "", label: "" },
      });
      toast.success("Great!!! Post published");
      navigate("/feeds");
    } catch (error) {
      toast.error(
        (error as Error).message === "Firebase: Error (auth/internal-error)."
          ? "Check your internet connection"
          : (error as Error).message
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleSingleSelectChange = (selectedValue: PostForm["tag"]) => {
    setForm((prevForm: PostForm) => ({
      ...prevForm,
      tag: selectedValue,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImgUrl(URL.createObjectURL(file));
      setForm({ ...form, postImg: file });
    }
  };

  const openFile = () => {
    imgRef?.current?.click();
  };

  const handleMarkdown = (value: any) => {
    setForm({ ...form, markdown: value });
  };

  return (
    <>
      <div className="container px-5">
        <form
          noValidate={true}
          onSubmit={handleSubmit}
          className="mt-8 rounded-[36px] bg-gel-black px-4 pt-32 pb-16 lg:px-8 min-h-[100vh]"
        >
          <h2 className=" max-w-[960px] text-left text-2xl font-bold">
            <span className="gel-gradient-text-peach px-3">Meta Data</span>
          </h2>
          <div className="mt-10 grid gap-14 lg:grid-cols-2 mb-8 ">
            <div className="flex flex-col gap-4 ">
              <Input
                name="title"
                type="text"
                label="Title"
                setForm={setForm}
                value={form.title}
              />
              <SingleSelect
                label="Tag"
                options={userInterests}
                selectedOption={form.tag}
                onChange={handleSingleSelectChange}
                help="Let chatters know what your post is all about"
              />
              <Textarea
                name="description"
                setForm={setForm}
                value={form.description}
                label="Description"
              />
            </div>
            <div>
              <div className="flex flex-col items-center">
                <div
                  onClick={openFile}
                  className="relative rounded-lg overflow-hidden cursor-pointer opacity-80 hover:opacity-100"
                >
                  <label
                    htmlFor=""
                    className="ml-2 mb-2 block text-sm font-semibold text-left"
                  >
                    Image
                  </label>
                  <div className="text-xs bottom-0 w-full h-[20%] absolute backdrop-blur-xl backdrop-brightness-30  opacity-100 text-center  font-bold pt-3">
                    Select image
                  </div>
                  <img
                    alt="Post image"
                    className="rounded-lg  w-[450px] h-[250px] object-cover"
                    src={
                      imgUrl
                        ? imgUrl
                        : form.postImg
                        ? form.postImg
                        : defaultImage
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
              </div>
            </div>
          </div>
          <h2 className="max-w-[960px] text-left text-2xl mb-5 font-bold">
            <span className="gel-gradient-text-peach px-3">
              Markdown Editor
            </span>
          </h2>
          <div data-color-mode="dark">
            <MDEditor
              height={"100vh"}
              preview={preview}
              extraCommands={[]}
              spellCheck={"true"}
              value={form.markdown}
              onChange={handleMarkdown}
            />
          </div>
          <div className="my-6 flex flex-col items-center justify-center gap-8 lg:flex-row">
            <button
              onClick={handlePreview}
              className={`group button solid-gradient gradient-white outlined w-full md:w-auto`}
            >
              <span className="relative z-10 ">{`${
                preview === "edit" ? "Preview" : "Edit"
              }`}</span>
            </button>
            <PrimaryBtn type="submit" text="Publish" loading={isLoading} />
          </div>
        </form>
      </div>
    </>
  );
};
