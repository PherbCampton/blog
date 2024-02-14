type Props = {
  title: string;
  index: number;
  imageUrl: string;
  description: string;
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

export const TrendingCard = ({
  index,
  title,
  imageUrl,
  description,
}: Props) => {
  const textColor = textColors[index % textColors.length];
  const backgroundColor = backgroundColors[index % backgroundColors.length];

  return (
    <div className="relative">
      <div className="absolute top-0 z-0 h-full w-full rounded-3xl bg-gel-black"></div>
      <a
        href="/raas"
        className="group relative z-10 flex h-[280px] flex-col justify-end overflow-hidden rounded-3xl p-8"
      >
        <div
          className={`${backgroundColor}-background absolute inset-0 overflow-hidden rounded-3xl`}
        >
          <div className={`${backgroundColor}-background-hover`}>
            <span></span>
          </div>
        </div>
        <div className="flex h-full flex-col justify-between">
          <img
            src={imageUrl}
            width="35"
            alt="Automate"
            style={{ visibility: "hidden" }}
          />
          <div>
            <div className="flex gap-1 text-4xl">
              <p className="text-gel-primary">{title}</p>
            </div>
            <div
              className={`text-base font-semibold text-white transition-colors duration-700 ease-out group-hover:text-white lg:text-[${textColor}]`}
            >
              {description}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};
