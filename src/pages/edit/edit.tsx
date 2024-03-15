import { mkdStr } from "../../data";
import { PostForm } from "../publish";
import { toast } from "react-toastify";
import { db } from "../../firebase/firebase";
import { Input } from "../../components/input";
import { useUser } from "../../providers/user";
import { PostType } from "../../components/tag-card";
import { Textarea } from "../../components/textarea";
import { FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PrimaryBtn } from "../../components/primary-btn";
import { doc, getDoc, updateDoc } from "firebase/firestore";

import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

import MDEditor from "@uiw/react-md-editor";
import SingleSelect, { OptionType } from "../../components/single-select";

type Check = {
  title: string;
  tag: OptionType;
  markdown: string;
  description: string;
};

export const EditPost = () => {
  const [form, setForm] = useState<PostForm>({
    title: "",
    description: "",
    markdown: mkdStr,
    tag: { value: "", label: "" },
  });

  const { postId } = useParams();

  const navigate = useNavigate();
  const { currentUser, allUsers } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const [preview, setPreview] = useState<"edit" | "preview">("edit");

  useEffect(() => {
    if (!postId) {
      return;
    }

    const fetchPost = async () => {
      setIsLoading(true);
      try {
        const postRef = doc(db, "posts", postId as string);
        const getPost = await getDoc(postRef);

        if (getPost.exists()) {
          const postData = getPost.data() as PostType;
          setForm({
            tag: postData.tag,
            title: postData.title,
            markdown: postData.content,
            description: postData.description,
          });
        }
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);

        toast.error(
          (error as Error).message === "Firebase: Error (auth/internal-error)."
            ? "Check your internet connection"
            : (error as Error).message
        );
      }
    };

    fetchPost();
  }, [postId]);

  const getUserData = allUsers.find((user) => user.userId === currentUser?.uid);

  const handlePreview = () => {
    setPreview((prev) => (prev === "edit" ? "preview" : "edit"));
    window.scrollTo({
      top: 500,
      behavior: "smooth",
    });
    console.log(form);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const isFormFieldEmpty = Object.keys(form).some((key) => {
      const value = form[key as keyof Check];
      return (
        !value || (Array.isArray(value) && value.length === 0) || value === ""
      );
    });
    try {
      if (isFormFieldEmpty) {
        toast.error("All fields are required");
        console.log(form);
        return;
      }
      setIsLoading(true);
      const postRef = doc(db, "posts", postId as string);

      await updateDoc(postRef, {
        tag: form.tag,
        title: form.title,
        content: form.markdown,
        description: form.description,
      });

      setForm({
        title: "",
        markdown: "",
        description: "",
        tag: { value: "", label: "" },
      });
      toast.success("Post updated");
      navigate(`/post/${postId}`);
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

  const handleMarkdown = (value: string | undefined) => {
    setForm({ ...form, markdown: value as string });
  };

  return (
    <>
      <div className="container px-5">
        <div className="wrapper">
          <form
            noValidate={true}
            onSubmit={handleSubmit}
            className="rounded-[36px] bg-gel-black px-4 pt-32 pb-16 lg:px-8 min-h-[100vh]"
          >
            <h2 className=" max-w-[960px] text-left text-2xl font-bold">
              <span className="gel-gradient-text-peach px-3">Meta Data</span>
            </h2>
            <div className="mt-10 grid gap-14 lg:grid-cols-2 mb-8 ">
              <div className="flex flex-col gap-4 ">
                <Input
                  type="text"
                  name="title"
                  label="Title"
                  value={form.title}
                  setForm={setForm}
                />
                <SingleSelect
                  label="Tag"
                  selectedOption={form.tag}
                  onChange={handleSingleSelectChange}
                  options={getUserData?.interests as OptionType[]}
                  help="Let chatters know what your post is all about"
                />
                <Textarea
                  setForm={setForm}
                  name="description"
                  label="Description"
                  value={form.description}
                />
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
                type="button"
                onClick={handlePreview}
                className={`group button solid-gradient gradient-white outlined w-full md:w-auto`}
              >
                <span className="relative z-10 ">{`${
                  preview === "edit" ? "Preview" : "Edit"
                }`}</span>
              </button>
              <PrimaryBtn type="submit" text="Update" loading={isLoading} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
