import { useFetch } from "../hooks/useFetch";
import { OptionType } from "./single-select";
import { Spinner } from "./spinner";

export type PostType = {
  id: string;
  title: string;
  likes: number;
  userId: string;
  content: string;
  tag: OptionType;
  postImg: string;
  createdAt: number;
  pageViews: number;
  description: string;
};

type Props = {
  post: PostType;
  background: string;
};

export const TagCard = ({ post, background }: Props) => {
  const { title, tag, userId } = post;
  const { data, isLoading } = useFetch("users");
  const getUserData = data && data?.find((user) => user?.userId === userId);

  return (
    <a
      href="/blog/nft-lending-management"
      className={`relative flex h-[261px] flex-col rounded-3xl bg-${background} p-8 text-sm`}
    >
      <div className="flex flex-1 flex-col">
        <i className="absolute right-5 flex w-5">
          <svg
            width="9"
            height="9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.784 1.333H2.31V.04h6.68v6.68H7.7V2.248L1.906 8.04.99 7.126l5.793-5.793Z"
            ></path>
          </svg>
        </i>
        <div className="font-semibold text-gel-gray transition-all duration-200 group-hover:-translate-y-5 group-hover:scale-105 group-hover:opacity-0">
          <span className="text-gel-gray">{tag?.label}</span>
        </div>
        <div className="mt-2 flex-1 text-2xl font-bold transition-all delay-75 duration-200 group-hover:-translate-y-5 group-hover:scale-105 group-hover:opacity-0">
          {title}
        </div>
        <div className="use-case-projects flex transition-all delay-100 duration-200 group-hover:translate-y-5 group-hover:scale-105 group-hover:opacity-0">
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
                  className="h-full w-full"
                  src={getUserData?.userImg}
                  sizes="40px"
                  srcSet={`${getUserData?.userImg} 40w`}
                />
              </picture>
            )}
          </figure>
        </div>
      </div>
    </a>
  );
};
