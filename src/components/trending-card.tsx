import { Spinner } from "./spinner";
import { useFetch } from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";

type Props = {
  tag: string;
  title: string;
  index: number;
  userId: string;
  postId: string;
};

const textColors = [
  "#7b9ed1",
  "#8ac4ca",
  "#fdaa93",
  "#b893d1",
  "#66ccff",
  "#BAAFAE",
];

const backgroundColors = [
  "raas",
  "marketplace",
  "functions",
  "relay",
  "real",
  "vrf",
];

export const TrendingCard = ({ index, title, userId, tag, postId }: Props) => {
  const navigate = useNavigate();
  const { data, isLoading } = useFetch("users");
  const getUserData = data && data?.find((user) => user?.userId === userId);

  const textColor = textColors[index % textColors.length];
  const backgroundColor = backgroundColors[index % backgroundColors.length];

  return (
    <div
      className="relative cursor-pointer"
      onClick={() => navigate(`/post/${postId}`)}
    >
      <div className="absolute top-0 z-0 h-full w-full rounded-3xl bg-gel-black"></div>
      <div className="group relative z-10 flex h-[280px] flex-col justify-end overflow-hidden rounded-3xl p-8">
        <div
          className={`${backgroundColor}-background absolute inset-0 overflow-hidden rounded-3xl`}
        >
          <div className={`${backgroundColor}-background-hover`}>
            <span></span>
          </div>
        </div>
        <div className="flex h-full flex-col justify-between">
          <figure className="flex max-h-[46px] max-w-[46px] items-center overflow-hidden rounded-full border-[3px] border-gel-black text-black min-h-[40px] min-w-[40px]">
            {isLoading ? (
              <Spinner size="40" />
            ) : (
              <picture>
                <source
                  sizes="40px"
                  type="image/webp"
                  className="min-h-[40px] min-w-[40px]"
                  srcSet={`${getUserData?.userImg} 40w`}
                />
                <img
                  width="40"
                  height="40"
                  alt="ZedRun"
                  sizes="40px"
                  loading="lazy"
                  src={getUserData?.userImg as string}
                  srcSet={`${getUserData?.userImg} 40w`}
                  className="object-cover min-h-[40px] min-w-[40px] "
                />
              </picture>
            )}
          </figure>
          <div>
            <div className="flex gap-1 text-2xl mb-2">
              <p className="text-gel-primary">{title}</p>
            </div>
            <div
              className={`text-base font-semibold text-white transition-colors duration-700 ease-out group-hover:text-white lg:text-[${textColor}]`}
            >
              {tag}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
