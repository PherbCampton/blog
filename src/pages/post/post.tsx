import Markdown from "react-markdown";
import { toast } from "react-toastify";
import { db } from "../../firebase/firebase";
import { useUser } from "../../providers/user";
import { BiSolidEditAlt } from "react-icons/bi";
import { Follow } from "../../components/follow";
import { Tab, Tabs } from "../../components/tabs";
import { Outline } from "../../components/outline";
import { Spinner } from "../../components/spinner";
import { useTimeAgo } from "../../hooks/useTimeAgo";
import { useEffect, useRef, useState } from "react";
import { Comments } from "../../components/comments";
import { PostType } from "../../components/tag-card";
import { useReadTime } from "../../hooks/useReadTime";
import { Like } from "../../components/post-actions/like";
import { Recommended } from "../../components/recommended";
import { Share } from "../../components/post-actions/share";
import { Saved } from "../../components/post-actions/saved";
import { Delete } from "../../components/post-actions/delete";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Comment } from "../../components/post-actions/comment";
import defaultAvatar from "../../assets/profile-placeholder.jpg";
import {
  doc,
  getDoc,
  FieldPath,
  increment,
  updateDoc,
} from "firebase/firestore";

import "./editor.css";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

export type TableOfContentsItem = {
  id: string;
  level: number;
  title: string;
  push?(arg0: { title: string; id: string; level: number }): unknown;
};

export const Post = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const { currentUser, allUsers } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const [post, setPost] = useState<PostType>({} as PostType);
  const [tableOfContents, setTableOfContents] = useState<TableOfContentsItem[]>(
    []
  );

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
          const postData = getPost.data() as PostType;
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
            } as unknown as string | FieldPath,
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
    const toc: TableOfContentsItem[] = Array.from(headings).reduce(
      (acc: TableOfContentsItem[], heading) => {
        const title = heading?.textContent?.trim();
        const id = title ? title.toLowerCase().replace(/\s+/g, "-") : "";
        heading.id = id;
        if (title && title !== "Outline") {
          acc.push({
            title: title,
            id: heading.id,
            level: parseInt(heading.tagName.charAt(1), 10),
          });
        }
        return acc;
      },
      []
    );

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
        <div className="wrapper">
          <div className="rounded-[36px] bg-gel-black px-4 pt-32 pb-16 lg:px-8 min-h-[100vh]">
            {isLoading ? (
              <Spinner size="45" />
            ) : (
              <>
                <div className="mt-10 grid grid-cols-1 gap-24 lg:grid-cols-3">
                  <div className="col-span-3 lg:col-span-2">
                    <div className="border-b border-b-gel-gray pb-4 text-xs font-semibold uppercase">
                      <Link to="/feeds" className="">
                        focus
                      </Link>{" "}
                      — {tag?.label}
                    </div>
                    <div
                      onClick={() => navigate(`/profile/${userId}`)}
                      className="mt-10 flex items-center gap-2 text-xs cursor-pointer"
                    >
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
                        <img
                          className="rounded-3xl mb-5"
                          src={postImg}
                          alt=""
                        />
                      </section>
                      <div className="w-md-preview">
                        <Markdown>{content}</Markdown>
                      </div>
                    </div>
                  </div>
                  <aside className="col-span-3 block lg:col-span-1">
                    <div className="sticky top-10 w-md-outline">
                      <div className="flex items-center gap-5 rounded-3xl backdrop-blur-lg backdrop-brightness-90 z-30 px-4 py-5 text-sm font-semibold  uppercase">
                        <Like post={post} />
                        <Comment post={post} />
                        <Saved post={post} />
                        <Share />
                        {currentUser?.uid !== userId ? (
                          <Follow userId={userId} />
                        ) : (
                          <div className="flex items-center gap-4">
                            <BiSolidEditAlt
                              size={20}
                              onClick={() => navigate(`/edit-post/${postId}`)}
                              className=" opacity-70 hover:opacity-100 cursor-pointer"
                            />
                            <Delete post={post} />
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
        </div>
        <Recommended post={post} />
      </div>
    </>
  );
};
