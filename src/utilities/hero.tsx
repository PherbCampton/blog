type Props = {
  buttonText: string;
  titleLine1: string;
  titleLine2: string;
  descriptionLine1: string;
  descriptionLine2: string;
};

export const Hero = ({
  titleLine1,
  titleLine2,
  descriptionLine1,
  descriptionLine2,
  buttonText,
}: Props) => {
  return (
    <div className=" hero-wrapper ">
      <div className="hero relative flex flex-1 flex-col justify-end overflow-hidden rounded-[36px] p-8 bg-secondaryBackground">
        <div className="inset-0 z-10 rounded-[36px]  md:block  [&>div]:inset-0 [&>div]:rounded-[36px]">
          <h1 className="hero-title lg:leading[72px] leading-[52px] tracking-[-1.5px] md:leading-[60px] lg:tracking-[-4.5px]">
            <span className="gel-gradient-text-peach inline-block pb-1 pr-[4px]">
              Discover new topics,
              <br />
              &amp; build your expertise.
            </span>
          </h1>
          <p className="hero-text">
            <span>
              Uncover premium articles curated by experts. <br />
              Ranging from a variety of topics, meet expertise and perfection.
            </span>
          </p>
          <div className=" relative mt-8 flex flex-col items-center gap-4 md:flex-row">
            <a
              href="/contact"
              className="group button solid-gradient outlined w-full md:w-auto"
            >
              <span className="relative z-10 ">&gt; Get Started</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
