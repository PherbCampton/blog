type Props = {
  index: number;
  topText: string;
  bottomText: string;
};

const networking = (
  <svg
    width="22"
    height="26"
    viewBox="0 0 22 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.66406 1L20.3307 13L1.66406 25V1Z"
      stroke="url(#paint0_linear_8491_744)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <defs>
      <linearGradient
        id="paint0_linear_8491_744"
        x1="1.66406"
        y1="14.3333"
        x2="20.3307"
        y2="14.3333"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F2BDE3"></stop>
        <stop offset="1" stopColor="#7560CA"></stop>
      </linearGradient>
    </defs>
  </svg>
);

const personal = (
  <svg
    width="26"
    height="30"
    viewBox="0 0 26 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.33333 13.667V8.33366C6.33333 6.56555 7.03571 4.86986 8.28596 3.61961C9.5362 2.36937 11.2319 1.66699 13 1.66699C14.7681 1.66699 16.4638 2.36937 17.714 3.61961C18.9643 4.86986 19.6667 6.56555 19.6667 8.33366V13.667M3.66667 13.667H22.3333C23.8061 13.667 25 14.8609 25 16.3337V25.667C25 27.1398 23.8061 28.3337 22.3333 28.3337H3.66667C2.19391 28.3337 1 27.1398 1 25.667V16.3337C1 14.8609 2.19391 13.667 3.66667 13.667Z"
      stroke="url(#paint0_linear_8483_622)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <defs>
      <linearGradient
        id="paint0_linear_8483_622"
        x1="1"
        y1="16.4818"
        x2="25"
        y2="16.4818"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F2BDE3"></stop>
        <stop offset="1" stopColor="#7560CA"></stop>
      </linearGradient>
    </defs>
  </svg>
);

const SEO = (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Icons">
      <path
        id="Icon"
        d="M25.3359 6.66634L6.66927 25.333M12.0026 8.66634C12.0026 10.5073 10.5102 11.9997 8.66927 11.9997C6.82832 11.9997 5.33594 10.5073 5.33594 8.66634C5.33594 6.82539 6.82832 5.33301 8.66927 5.33301C10.5102 5.33301 12.0026 6.82539 12.0026 8.66634ZM26.6693 23.333C26.6693 25.174 25.1769 26.6663 23.3359 26.6663C21.495 26.6663 20.0026 25.174 20.0026 23.333C20.0026 21.4921 21.495 19.9997 23.3359 19.9997C25.1769 19.9997 26.6693 21.4921 26.6693 23.333Z"
        stroke="url(#paint0_linear_7772_28278)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_7772_28278"
        x1="5.33594"
        y1="17.1849"
        x2="26.6693"
        y2="17.1849"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F2BDE3"></stop>
        <stop offset="1" stopColor="#7560CA"></stop>
      </linearGradient>
    </defs>
  </svg>
);

const visibility = (
  <svg
    width="26"
    height="30"
    viewBox="0 0 26 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.3345 1.6665L2.45906 15.917C1.99398 16.4751 1.76144 16.7541 1.75789 16.9898C1.7548 17.1947 1.84609 17.3896 2.00546 17.5184C2.18878 17.6665 2.55202 17.6665 3.2785 17.6665H13.0011L11.6678 28.3332L23.5432 14.0827C24.0083 13.5246 24.2408 13.2456 24.2443 13.0099C24.2474 12.805 24.1561 12.6101 23.9968 12.4813C23.8135 12.3332 23.4502 12.3332 22.7237 12.3332H13.0011L14.3345 1.6665Z"
      stroke="url(#paint0_linear_8491_998)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <defs>
      <linearGradient
        id="paint0_linear_8491_998"
        x1="1.75781"
        y1="16.4813"
        x2="24.2444"
        y2="16.4813"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F2BDE3"></stop>
        <stop offset="1" stopColor="#7560CA"></stop>
      </linearGradient>
    </defs>
  </svg>
);

const features = [networking, visibility, SEO, personal];

export const Feature = ({ topText, bottomText, index }: Props) => {
  const feature = features[index];
  return (
    <div className="relative flex h-[260px] w-full flex-col overflow-hidden rounded-3xl md:w-1/2 lg:w-1/4">
      <div className="absolute bottom-2 left-2 right-2 top-2 rounded-3xl bg-gel-black"></div>
      <div className="relative z-10 my-auto ml-8">
        <i className="mb-8 h-16 w-16">{feature} </i>
        <p className="mt-8 w-[75%] overflow-hidden text-left text-xl font-bold">
          {topText} <br /> {bottomText}
        </p>
      </div>
    </div>
  );
};
