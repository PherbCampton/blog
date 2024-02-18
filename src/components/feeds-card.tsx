type Props = {
  title: string;
  description: string;
};

export const FeedsCard = ({ title, description }: Props) => {
  return (
    <div className="col-span-2 h-full w-full items-start justify-end overflow-hidden rounded-3xl p-10">
      <div className="relative">
        <div className="absolute -bottom-8 -left-8 -right-8 -top-8 rounded-3xl bg-primaryBackground"></div>
        <div className="relative z-10 mx-auto my-auto">
          <div className="flex justify-between items-center mb-3 px-2">
            <div className="use-case-projects flex items-center transition-all delay-100 duration-200 group-hover:translate-y-5 group-hover:scale-105 group-hover:opacity-0">
              <figure className="-ml-[14px] flex max-h-[46px] max-w-[46px] items-center overflow-hidden rounded-full border-[3px] border-gel-black text-black">
                <picture>
                  <source
                    type="image/webp"
                    sizes="40px"
                    srcSet={`https://media.cms.gelato.network/logo_Zed_Run_ada9ca8090/logo_Zed_Run_ada9ca8090.png 40w`}
                  />
                  <img
                    width="40"
                    height="40"
                    alt="ZedRun"
                    loading="lazy"
                    className="h-full w-full"
                    src='"https://media.cms.gelato.network/logo_Zed_Run_ada9ca8090/logo_Zed_Run_ada9ca8090.png'
                    sizes="40px"
                    srcSet={`https://media.cms.gelato.network/logo_Zed_Run_ada9ca8090/logo_Zed_Run_ada9ca8090.png 40w`}
                  />
                </picture>
              </figure>
              <p className="text-lg font-bold ml-2">Samuel Tuinperi</p>
            </div>
            <div className="font-semibold text-gel-gray transition-all duration-200 group-hover:-translate-y-5 group-hover:scale-105 group-hover:opacity-0 mb-3">
              <span className="text-gel-gray text-sm">{"Gaming"}</span>
            </div>
          </div>

          <p className="pb-8 text-4xl font-bold">{title}</p>
          <p className="pb-6 text-lg text-gel-gray">
            {description}
            <span className="block text-xs font-semibold uppercase text-gel-peach pt-2 opacity-70">
              3 days ago
            </span>
          </p>

          <a
            href="https://discord.com/invite/ApbA39BKyJ"
            className="button solid-gradient outlined w-full border-gel-pink md:w-auto"
            target="_blank"
          >
            <span className="relative z-10">View more</span>
          </a>
        </div>
      </div>
    </div>
  );
};
