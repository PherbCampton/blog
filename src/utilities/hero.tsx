import { Link } from "react-router-dom";

type Props = {
  gradient: string;
  buttonText: string;
  buttonLink: string;
  titleLine1: string;
  titleLine2: string;
  descriptionLine1: string;
  descriptionLine2: string;
};

export const Hero = ({
  gradient,
  buttonLink,
  buttonText,
  titleLine1,
  titleLine2,
  descriptionLine1,
  descriptionLine2,
}: Props) => {
  return (
    <section>
      <div className=" hero-wrapper ">
        <div className="hero relative flex flex-1 flex-col justify-end overflow-hidden rounded-[36px] p-8 bg-secondaryBackground">
          <div className="inset-0 z-10 rounded-[36px]  md:block  [&>div]:inset-0 [&>div]:rounded-[36px]">
            <h1 className="hero-title lg:leading[72px] leading-[52px] tracking-[1.5px] md:leading-[60px] lg:tracking-[-4.5px]">
              <span
                className={`gel-gradient-text-${gradient} inline-block pb-1 pr-[4px] tracking-[-1.4px]`}
              >
                {titleLine1}
                <br />
                {titleLine2}
              </span>
            </h1>
            <p className="hero-text">
              <span>
                {descriptionLine1} <br />
                {descriptionLine2}
              </span>
            </p>
            <div className=" relative mt-8 flex flex-col items-center gap-4 md:flex-row">
              <Link
                to={buttonLink}
                className={`group button solid-gradient gradient-${gradient} outlined w-full md:w-auto`}
              >
                <span className="relative z-10 ">&gt; {buttonText}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div data-v-339ef4f2="" className="py-6">
        <i data-v-339ef4f2="" className="m-auto block w-4">
          <svg
            width="16"
            height="16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m2 5 6 6 6-6"
              stroke="#EFE0E0"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </i>
      </div>
    </section>
  );
};
