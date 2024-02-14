type Props = {
  name: string;
  title: string;
  review: string;
  imageUrl: string;
  designation: string;
};

export const Review = ({
  title,
  name,
  review,
  imageUrl,
  designation,
}: Props) => {
  return (
    <div className="relative mb-6 flex h-fit min-h-[540px] w-full flex-col items-start justify-start overflow-hidden rounded-3xl px-3 py-8 align-top md:w-1/2 lg:w-1/3">
      <div className="absolute bottom-2 left-2 right-2 top-2 rounded-3xl bg-gel-black"></div>
      <div className="relative z-10 mx-8 flex grow flex-col items-stretch gap-3">
        <div className="flex gap-2">
          <img src={imageUrl} width="40px" />
          <p className="my-auto h-full font-semibold">{name}</p>
        </div>
        <p className="text-left text-xl font-bold">{title}</p>
        <p className="my-2 text-left text-sm text-gel-gray-2">{review}</p>
        <p className="my-2 text-left text-sm text-gel-gray-5">{designation}</p>
        <div className="flex h-fit grow flex-col justify-end">
          <a
            href="https://www.gelato.network/blog/beefy-gelato-web3-functions"
            className="button solid-gradient outlined mb-2 h-fit w-full border-gel-pink align-bottom"
            target="_blank"
          >
            <span className="relative z-10">&gt; Sign up </span>
          </a>
        </div>
      </div>
    </div>
  );
};
