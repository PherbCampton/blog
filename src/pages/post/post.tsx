import { mkdStr } from "../../data";
import { toast } from "react-toastify";
import { BiSolidEditAlt } from "react-icons/bi";
import { db } from "../../firebase/firebase";
import { useUser } from "../../providers/user";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { MdOutlineDeleteOutline } from "react-icons/md";
import "./editor.css";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

import Markdown from "react-markdown";
import { Spinner } from "../../components/spinner";

import defaultAvatar from "../../assets/default-avatar.jpg";
import { useTimeAgo } from "../../hooks/useTimeAgo";
import { useReadTime } from "../../hooks/useReadTime";
import { Follow } from "../../components/follow";
import { Like } from "../../components/post-actions/like";
import { Recommended } from "../../components/recommended";

export const Post = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({});
  const { currentUser, allUsers } = useUser();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
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

  const { title, content, postImg, tag, createdAt, description, userId } = post;
  const timeAgo = useTimeAgo(createdAt);
  const readTime = useReadTime(content);

  const [tableOfContents, setTableOfContents] = useState([]);

  useEffect(() => {
    // Check if content is available
    if (!content) {
      return;
    }

    const headings = document.querySelectorAll("h2, h3, h4, h5, h6");
    const toc = Array.from(headings).reduce((acc, heading) => {
      const title = heading.textContent.trim();
      const id = title.toLowerCase().replace(/\s+/g, "-"); // Generate ID from heading title
      heading.id = id; // Assign ID to heading
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
  }, [isLoading]);

  const scrollToHeading = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -30;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const getUserData = allUsers.find((user) => user.userId === userId);

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
                                ? getUserData?.userImg
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
                    <p className="font-semibold text-xl border-r-2 border-r-rareColor pr-6">
                      {getUserData?.username}
                    </p>
                    <div className="pl-2">
                      {currentUser.uid !== userId ? (
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
                  <div className="sticky top-10 .w-md-outline">
                    <div className="rounded-3xl sticky top-8 backdrop-blur-lg backdrop-brightness-90 z-30 px-4 py-5 text-sm font-semibold mb-5 uppercase">
                      <Like post={post} />
                    </div>
                    <h3 className="font-bold">Outline</h3>
                    <ul className="outline-list mt-6 flex flex-col gap-1">
                      {tableOfContents?.map((item) => (
                        <li
                          key={item.id}
                          style={{ marginLeft: `${(item.level - 2) * 10}px` }}
                        >
                          <a
                            href={`#${item.id}`}
                            className={`text-lg ${
                              item.level === 2
                                ? "h2"
                                : item.level === 3
                                ? "h3"
                                : item.level === 4
                                ? "h4"
                                : item.level === 5
                                ? "h5"
                                : item.level === 6
                                ? "h6"
                                : ""
                            }`}
                            onClick={(e) => {
                              e.preventDefault();
                              scrollToHeading(item.id);
                            }}
                          >
                            {item.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </aside>
              </div>
            </>
          )}
        </div>
        <Recommended post={post} />
      </div>
    </>
  );
};
