import Markdown from "react-markdown";
import { toast } from "react-toastify";
import { db } from "../../firebase/firebase";
import { Tab, Tabs } from "../../components/tabs";
import { useUser } from "../../providers/user";
import { BiSolidEditAlt } from "react-icons/bi";
import { Follow } from "../../components/follow";
import { Outline } from "../../components/outline";
import { Spinner } from "../../components/spinner";
import { Link, useParams } from "react-router-dom";
import { useTimeAgo } from "../../hooks/useTimeAgo";
import { useEffect, useRef, useState } from "react";
import { Comments } from "../../components/comments";
import { PostType } from "../../components/tag-card";
import { useReadTime } from "../../hooks/useReadTime";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Like } from "../../components/post-actions/like";
import { Recommended } from "../../components/recommended";
import { Saved } from "../../components/post-actions/saved";
import { Share } from "../../components/post-actions/share";
import { Comment } from "../../components/post-actions/comment";
import defaultAvatar from "../../assets/profile-placeholder.jpg";
import {
  FieldPath,
  doc,
  getDoc,
  increment,
  updateDoc,
} from "firebase/firestore";

import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

export const Edit = () => {
  const { postId } = useParams();
  const [post, setPost] = useState({});
  const { currentUser, allUsers } = useUser();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!postId) {
      return;
    }

    const fetchPost = async () => {
      setIsLoading(true);
      try {
        const postRef = doc(db, "posts", postId);
        const getPost = await getDoc(postRef);

        if (getPost.exists()) {
          const postData = getPost.data();
          setPost({ ...postData, id: postId });
          if (postData?.userId) {
            const userRef = doc(db, "user", postData?.userId);
            const getUser = await getDoc(userRef);

            if (getUser.exists()) {
              const userData = getUser.data();
              setPost({ ...postData, ...userData, id: postId });
            }
          }
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

  const { title, content, postImg, tag, createdAt, userId } = post as PostType;
  const timeAgo = useTimeAgo(createdAt);
  const readTime = useReadTime(content);

  const [tableOfContents, setTableOfContents] = useState([]);

  const isInitialRender = useRef(true);
  useEffect(() => {
    if (isInitialRender.current && currentUser?.uid !== userId) {
      const incrementPageView = async () => {
        try {
          const ref = doc(db, "posts", postId as string);
          await updateDoc(
            ref,
            {
              pageViews: increment(1),
            } as unknown as FieldPath,
            {
              merge: true,
            }
          );
        } catch (error) {
          toast.error((error as Error).message);
        }
      };
      setTimeout(() => {
        incrementPageView();
      }, readTime * 60 * 1000);
    }
    isInitialRender.current = false;
  }, [currentUser?.uid, postId, readTime, userId]);

  useEffect(() => {
    if (!content) {
      return;
    }

    const headings = document.querySelectorAll("h2, h3, h4, h5, h6");
    const toc = Array.from(headings).reduce((acc, heading) => {
      const title = heading.textContent.trim();
      const id = title.toLowerCase().replace(/\s+/g, "-");
      heading.id = id;
      if (title && title !== "Outline") {
        acc.push({
          title: title,
          id: heading.id,
          level: parseInt(heading.tagName.charAt(1)),
        });
      }
      return acc;
    }, []);

    setTableOfContents(toc);
  }, [content, isLoading]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -30;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const getUserData = allUsers.find((user) => user.userId === userId);

  const tabs: Tab[] = [
    {
      title: "Outline",
      color: "#fff",
      content: (
        <div className="mt-10 flex flex-col gap-10">
          <Outline
            tableOfContents={tableOfContents}
            scrollToHeading={scrollToHeading}
          />
        </div>
      ),
    },
    {
      title: "Comments",
      color: "#fff",
      content: (
        <div className="mt-10 flex flex-col gap-10">
          <Comments postId={postId as string} />
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="container px-5">
        <div className="mt-8 rounded-[36px] bg-gel-black px-4 pt-32 pb-16 lg:px-8 min-h-[100vh]">
          {isLoading ? (
            <Spinner size="45" />
          ) : (
            <>
              <div className="mt-10 grid grid-cols-1 gap-24 lg:grid-cols-3">
                <div className="col-span-3 lg:col-span-2">
                  <div className="border-b border-b-gel-gray pb-4 text-xs font-semibold uppercase">
                    <Link to="/feeds" className="">
                      topic
                    </Link>{" "}
                    — {tag?.label}
                  </div>
                  <div className="mt-10 flex items-center gap-2 text-xs">
                    <div className=" hover:opacity-75 font-medium lg:pr-2 cursor-pointer  text-primaryBackground rounded-full">
                      <figure className=" flex max-h-[46px] max-w-[46px] items-center overflow-hidden rounded-full border-[3px] border-gel-background text-black">
                        <picture>
                          <source
                            type="image/webp"
                            sizes="40px"
                            srcSet={`${
                              getUserData?.userImg
                                ? getUserData?.userImg
                                : defaultAvatar
                            } 40w`}
                          />
                          <img
                            width="40"
                            height="40"
                            alt="ZedRun"
                            loading="lazy"
                            sizes="40px"
                            src={
                              getUserData?.userImg
                                ? (getUserData?.userImg as string)
                                : defaultAvatar
                            }
                            srcSet={`${
                              getUserData?.userImg
                                ? getUserData?.userImg
                                : defaultAvatar
                            } 40w`}
                            className="object-cover min-h-[40px] min-w-[40px]"
                          />
                        </picture>
                      </figure>
                    </div>
                    <p className="font-semibold text-xl  pr-6">
                      {getUserData?.username}
                    </p>
                  </div>
                  <div className="mt-5 flex items-center gap-2 text-xs uppercase">
                    <p className="text-xs font-semibold uppercase text-gel-gray border-r-2 pr-2">
                      {readTime} mins read
                    </p>
                    <p className="text-xs font-semibold uppercase text-gel-gray">
                      {timeAgo}
                    </p>
                  </div>
                  <h1 className="mt-4 text-3xl font-bold">{title}</h1>
                  <p className="mt-6 text-lg font-medium"></p>
                  <div className="mt-10 flex flex-col gap-5">
                    <section className="prose prose-invert mt-5 !max-w-full w-md-preview">
                      <img className="rounded-3xl mb-5" src={postImg} alt="" />
                    </section>

                    <div className="w-md-preview">
                      <Markdown>{content}</Markdown>
                    </div>
                  </div>
                </div>
                <aside className="col-span-3 block lg:col-span-1">
                  <div className="sticky top-10 w-md-outline">
                    <div className="flex items-center gap-5 rounded-3xl backdrop-blur-lg backdrop-brightness-90 z-30 px-4 py-5 text-sm font-semibold  uppercase">
                      <Like post={post as PostType} />
                      <Comment post={post as PostType} />
                      <Saved post={post as PostType} />
                      <Share />
                      {currentUser?.uid !== userId ? (
                        <Follow userId={userId} />
                      ) : (
                        <div className="flex items-center gap-4">
                          <BiSolidEditAlt
                            size={20}
                            className=" opacity-70 hover:opacity-100 cursor-pointer"
                          />
                          <MdOutlineDeleteOutline
                            size={20}
                            className=" opacity-70  cursor-pointer hover:fill-[red]"
                          />
                        </div>
                      )}
                    </div>
                    <Tabs tabs={tabs} />
                  </div>
                </aside>
              </div>
            </>
          )}
        </div>
        <Recommended post={post as PostType} />
      </div>
    </>
  );
};
