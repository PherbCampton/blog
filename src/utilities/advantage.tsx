import React from "react";

export const Advantage = () => {
  return (
    <div className="relative flex h-[260px] w-full flex-col overflow-hidden rounded-3xl md:w-1/2 lg:w-1/4">
      <div className="absolute bottom-2 left-2 right-2 top-2 rounded-3xl bg-gel-black"></div>
      <div className="relative z-10 my-auto ml-8">
        <i className="mb-8 h-16 w-16">
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
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
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
                <stop stop-color="#F2BDE3"></stop>
                <stop offset="1" stop-color="#7560CA"></stop>
              </linearGradient>
            </defs>
          </svg>
        </i>
        <p className="mt-8 w-[75%] overflow-hidden text-left text-xl font-bold">
          High <br /> throughput
        </p>
      </div>
    </div>
  );
};
