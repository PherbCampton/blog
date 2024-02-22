import { Spinner } from "./spinner";
import { PostType } from "./tag-card";
import { useFetch } from "../hooks/useFetch";
import { useTimeAgo } from "../hooks/useTimeAgo";
import { AiOutlineComment } from "react-icons/ai";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { useReadTime } from "../hooks/useReadTime";
import { Saved } from "./saved";
import { useUser } from "../providers/user";
import { Link } from "react-router-dom";

type Props = {
  post: PostType;
};

export const FeedsCard = ({ post }: Props) => {
  const { currentUser } = useUser();
  const { data, isLoading } = useFetch("users");
  const { title, tag, userId, description, createdAt, content } = post;
  const getUserData = data && data?.find((user) => user?.userId === userId);

  const timeAgo = useTimeAgo(createdAt);
  const readTime = useReadTime(content);

  return (
    <div className="col-span-2 h-full w-full items-start justify-end overflow-hidden rounded-3xl p-10">
      <div className="relative">
        <div className="absolute -bottom-8 -left-8 -right-8 -top-8 rounded-3xl bg-primaryBackground"></div>
        <div className="relative z-10 mx-auto my-auto">
          <div className="flex justify-between items-center mb-3 px-2">
            <Link
              to={`/profile/${getUserData?.userId}`}
              className="use-case-projects flex items-center transition-all delay-100 duration-200 group-hover:translate-y-5 group-hover:scale-105 group-hover:opacity-0 cursor-pointer"
            >
              <figure className="-ml-[14px] flex max-h-[46px] max-w-[46px] items-center overflow-hidden rounded-full border-[3px] border-gel-black text-black">
                {isLoading ? (
                  <Spinner size="40" />
                ) : (
                  <picture>
                    <source
                      type="image/webp"
                      sizes="40px"
                      srcSet={`${getUserData?.userImg} 40w`}
                    />
                    <img
                      width="40"
                      height="40"
                      alt="ZedRun"
                      loading="lazy"
                      sizes="40px"
                      src={getUserData?.userImg}
                      srcSet={`${getUserData?.userImg} 40w`}
                      className="object-cover min-h-[40px] min-w-[40px]"
                    />
                  </picture>
                )}
              </figure>
              <p className="text-lg font-bold ml-2">{getUserData?.username}</p>
            </Link>
            <div className="font-semibold text-gel-gray transition-all duration-200 group-hover:-translate-y-5 group-hover:scale-105 group-hover:opacity-0 mb-3">
              <span className="text-gel-gray text-sm">{tag.label}</span>
            </div>
          </div>

          <p className="pb-8 text-4xl font-bold">{title}</p>
          <p className="pb-6 text-lg text-gel-gray">
            {description}
            <span className="block text-xs font-semibold uppercase pt-2 opacity-70">
              <span className="pr-2 border-r">{readTime} mins read</span>
              <span className="ml-2 text-gel-peach">{timeAgo}</span>
            </span>
          </p>

          <div className="flex items-center justify-between">
            <button className="button solid-gradient outlined w-full border-gel-pink md:w-auto">
              <span className="relative z-10">View more</span>
            </button>
            <div className="hidden md:flex items-center gap-2 ">
              <div className="flex gap-1.5 items-center">
                <FcLikePlaceholder opacity={0.5} size={20} />
                <span className="text-xs font-semibold opacity-80">64</span>
              </div>
              <div className="flex gap-1.5 items-center">
                <AiOutlineComment opacity={0.5} size={20} />
                <span className="text-xs font-semibold opacity-80">203</span>
              </div>
              {currentUser?.uid !== userId && <Saved post={post} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
