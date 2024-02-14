import { Hero } from "../../utilities/hero";

export const Home = () => {
  return (
    <>
      <div className="container px-5">
        <Hero
          gradient="peach"
          buttonLink="/sign-up"
          buttonText="Get Started"
          titleLine1="Discover new topics,"
          titleLine2="& build your expertise."
          descriptionLine1="Uncover premium articles curated by experts."
          descriptionLine2="Ranging from a variety of topics, meet expertise and perfection."
        />
        <section className="mt-32">
          <div className="gel-section-title mb-16">
            <span className="gel-gradient-text-peach">Trending...</span>
            <div>
              Our most engaging
              <br />
              &amp; most sort after blog posts
            </div>
          </div>
          <div className="grid gap-4 font-bold text-gel-alternative sm:grid-cols-2">
            <div className="relative">
              <div className="absolute top-0 z-0 h-full w-full rounded-3xl bg-gel-black"></div>
              <a
                href="/raas"
                className="group relative z-10 flex h-[280px] flex-col justify-end overflow-hidden rounded-3xl p-8"
              >
                <div className="raas-background absolute inset-0 overflow-hidden rounded-3xl">
                  <div className="raas-background-hover">
                    <span></span>
                  </div>
                </div>
                <div className="flex h-full flex-col justify-between">
                  <img
                    src="/images/home/icons/automate.svg"
                    width="35"
                    alt="Automate"
                    style={{ visibility: "hidden" }}
                  />
                  <div>
                    <div className="flex gap-1 text-4xl">
                      <p className="text-gel-primary">Rollup as a Service</p>
                    </div>
                    <div className="text-base font-semibold text-white transition-colors duration-700 ease-out group-hover:text-white lg:text-[#7b9ed1]">
                      {" "}
                      deploy custom L2 chains{" "}
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="relative">
              <div className="absolute top-0 z-0 h-full w-full rounded-3xl bg-gel-black"></div>
              <a
                href="/raas-marketplace"
                className="group relative z-10 flex h-[280px] flex-col justify-end overflow-hidden rounded-3xl p-8"
              >
                <div className="marketplace-background absolute inset-0 overflow-hidden rounded-3xl">
                  <div className="marketplace-background-hover">
                    <span></span>
                  </div>
                </div>
                <div className="flex h-full flex-col justify-between">
                  <img
                    src="/images/home/icons/1balance.svg"
                    width="35"
                    alt="1Balance"
                    style={{ visibility: "hidden" }}
                  />
                  <div>
                    <div className="flex gap-1 text-5xl">
                      <p className="text-gel-primary">Rollup Marketplace</p>
                    </div>
                    <div className="text-base font-semibold text-white transition-colors duration-700 ease-out group-hover:text-white lg:text-[#8ac4ca]">
                      {" "}
                      Web3 tools &amp; service integrations{" "}
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="relative">
              <div className="absolute top-0 z-0 h-full w-full rounded-3xl bg-gel-black"></div>
              <a
                href="/web3-functions"
                className="group relative z-10 flex h-[280px] flex-col justify-end overflow-hidden rounded-3xl p-8"
              >
                <div className="functions-background absolute inset-0 overflow-hidden rounded-3xl">
                  <div className="functions-background-hover">
                    <span></span>
                  </div>
                </div>
                <div className="flex h-full flex-col justify-between">
                  <img
                    src="/images/home/icons/w3f.svg"
                    width="35"
                    alt="Web3 Functions"
                    style={{ visibility: "hidden" }}
                  />
                  <div>
                    <div className="flex gap-1 text-5xl">
                      <p className="text-gel-primary">Functions</p>
                    </div>
                    <div className="text-base font-semibold text-white transition-colors duration-700 ease-out group-hover:text-white lg:text-[#fdaa93]">
                      {" "}
                      serverless transaction automation{" "}
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="relative">
              <div className="absolute top-0 z-0 h-full w-full rounded-3xl bg-gel-black"></div>
              <a
                href="/relay"
                className="group relative z-10 flex h-[280px] flex-col justify-end overflow-hidden rounded-3xl p-8"
              >
                <div className="relay-background absolute inset-0 overflow-hidden rounded-3xl">
                  <div className="relay-background-hover">
                    <span></span>
                  </div>
                </div>
                <div className="flex h-full flex-col justify-between">
                  <img
                    src="/images/home/icons/relay.svg"
                    width="35"
                    alt="Relay"
                    style={{ visibility: "hidden" }}
                  />
                  <div>
                    <div className="flex gap-1 text-5xl">
                      <p className="text-gel-primary">Relay</p>
                    </div>
                    <div className="text-base font-semibold text-white transition-colors duration-700 ease-out group-hover:text-white lg:text-[#b893d1]">
                      {" "}
                      gasless transactions for better Web3 UX{" "}
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="relative">
              <div className="absolute top-0 z-0 h-full w-full rounded-3xl bg-gel-black"></div>
              <a
                href="/vrf"
                className="group relative z-10 flex h-[280px] flex-col justify-end overflow-hidden rounded-3xl p-8"
              >
                <div className="vrf-background absolute inset-0 overflow-hidden rounded-3xl">
                  <div className="vrf-background-hover">
                    <span></span>
                  </div>
                </div>
                <div className="flex h-full flex-col justify-between">
                  <img
                    src="/images/home/icons/vrf.svg"
                    width="50"
                    alt="Relay"
                    style={{ visibility: "hidden" }}
                  />
                  <div>
                    <div className="flex gap-1 text-5xl">
                      <p className="text-gel-primary">VRF</p>
                    </div>
                    <div className="text-base font-semibold text-white transition-colors duration-700 ease-out group-hover:text-white lg:text-[#BAAFAE]">
                      {" "}
                      verifiable onchain randomness{" "}
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="relative">
              <div className="absolute top-0 z-0 h-full w-full rounded-3xl bg-gel-black"></div>
              <a
                href="/vrf"
                className="group relative z-10 flex h-[280px] flex-col justify-end overflow-hidden rounded-3xl p-8"
              >
                <div className="vrf-background absolute inset-0 overflow-hidden rounded-3xl">
                  <div className="vrf-background-hover">
                    <span></span>
                  </div>
                </div>
                <div className="flex h-full flex-col justify-between">
                  <img
                    src="/images/home/icons/vrf.svg"
                    width="50"
                    alt="Relay"
                    style={{ visibility: "hidden" }}
                  />
                  <div>
                    <div className="flex gap-1 text-5xl">
                      <p className="text-gel-primary">VRF</p>
                    </div>
                    <div className="text-base font-semibold text-white transition-colors duration-700 ease-out group-hover:text-white lg:text-[#BAAFAE]">
                      {" "}
                      verifiable onchain randomness{" "}
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
        <section className="mt-20 lg:mt-32">
          <h2 className="mx-auto mb-2 max-w-[360px] text-center text-lg font-bold">
            <span className="gel-gradient-text-peach">Categories</span>
          </h2>

          <h3 className="gel-section-title mb-16 text-center">
            <span>Explore Chatter through categories</span>
          </h3>

          <div className="scrollbar-hide scrollbar-hide -mx-5 mb-8 overflow-x-scroll pl-5">
            <ul className="m-auto flex max-w-4xl gap-2 font-semibold uppercase lg:flex-wrap lg:justify-center">
              <li>
                <button
                  className="opacity-100 whitespace-nowrap rounded-full border px-8 py-4 text-sm text-white transition-all hover:text-white hover:opacity-60"
                  style={{ borderColor: " #F09974" }}
                >
                  Yield Farming
                </button>
              </li>
              <li>
                <button
                  className="opacity-100 whitespace-nowrap rounded-full border px-8 py-4 text-sm text-white transition-all hover:text-white hover:opacity-60"
                  style={{ borderColor: " #E084E8" }}
                >
                  Oracle
                </button>
              </li>
              <li>
                <button
                  className="opacity-100 whitespace-nowrap rounded-full border px-8 py-4 text-sm text-white transition-all hover:text-white hover:opacity-60"
                  style={{ borderColor: " #5B69E2" }}
                >
                  Algo-stables
                </button>
              </li>
              <li>
                <button
                  className="opacity-100 whitespace-nowrap rounded-full border px-8 py-4 text-sm text-white transition-all hover:text-white hover:opacity-60"
                  style={{ borderColor: " #488D72" }}
                >
                  Bridge
                </button>
              </li>
              <li>
                <button
                  className="opacity-100 whitespace-nowrap rounded-full border px-8 py-4 text-sm text-white transition-all hover:text-white hover:opacity-60"
                  style={{ borderColor: " #FC8F8F" }}
                >
                  Gaming
                </button>
              </li>
              <li>
                <button
                  className="opacity-100 whitespace-nowrap rounded-full border px-8 py-4 text-sm text-white transition-all hover:text-white hover:opacity-60"
                  style={{ borderColor: " #76B8F4" }}
                >
                  DeFi
                </button>
              </li>
              <li>
                <button
                  className="opacity-100 whitespace-nowrap rounded-full border px-8 py-4 text-sm text-white transition-all hover:text-white hover:opacity-60"
                  style={{ borderColor: " #687E9A" }}
                >
                  DEX
                </button>
              </li>
              <li>
                <button
                  className="opacity-100 whitespace-nowrap rounded-full border px-8 py-4 text-sm text-white transition-all hover:text-white hover:opacity-60"
                  style={{ borderColor: " #E2A0A9" }}
                >
                  Prediction
                </button>
              </li>
              <li>
                <button
                  className="opacity-100 whitespace-nowrap rounded-full border px-8 py-4 text-sm text-white transition-all hover:text-white hover:opacity-60"
                  style={{ borderColor: " #A3866D" }}
                >
                  DAO
                </button>
              </li>
              <li>
                <button
                  className="opacity-100 whitespace-nowrap rounded-full border px-8 py-4 text-sm text-white transition-all hover:text-white hover:opacity-60"
                  style={{ borderColor: " #7F81D0" }}
                >
                  Lending
                </button>
              </li>
              <li>
                <button
                  className="opacity-100 whitespace-nowrap rounded-full border px-8 py-4 text-sm text-white transition-all hover:text-white hover:opacity-60"
                  style={{ borderColor: " #AF96F7" }}
                >
                  NFT
                </button>
              </li>
              <li>
                <button
                  className="opacity-100 whitespace-nowrap rounded-full border px-8 py-4 text-sm text-white transition-all hover:text-white hover:opacity-60"
                  style={{ borderColor: " #F09974" }}
                >
                  Social Media
                </button>
              </li>
              <li>
                <button
                  className="opacity-100 whitespace-nowrap rounded-full border px-8 py-4 text-sm text-white transition-all hover:text-white hover:opacity-60"
                  style={{ borderColor: " #AF96F7" }}
                >
                  Derivatives
                </button>
              </li>
              <li className="min-w-[12px]"></li>
            </ul>
          </div>
          <div className="use-cases-list grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <a
              href="/blog/nft-lending-management"
              className="relative flex h-[261px] flex-col rounded-3xl bg-gel-black p-8 text-sm"
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
                  <span className="text-gel-gray">Gaming</span>
                </div>
                <div className="mt-2 flex-1 text-2xl font-bold transition-all delay-75 duration-200 group-hover:-translate-y-5 group-hover:scale-105 group-hover:opacity-0">
                  NFT Lending Periods
                </div>
                <div className="use-case-projects flex transition-all delay-100 duration-200 group-hover:translate-y-5 group-hover:scale-105 group-hover:opacity-0">
                  <figure className="-ml-[14px] flex max-h-[46px] max-w-[46px] items-center overflow-hidden rounded-full border-[3px] border-gel-black text-black">
                    <picture>
                      <source
                        type="image/webp"
                        sizes="40px"
                        srcSet="https://media.cms.gelato.network/logo_Zed_Run_ada9ca8090/logo_Zed_Run_ada9ca8090.png 40w"
                      />
                      <img
                        width="40"
                        height="40"
                        alt="ZedRun"
                        loading="lazy"
                        className="h-full w-full"
                        src="https://media.cms.gelato.network/logo_Zed_Run_ada9ca8090/logo_Zed_Run_ada9ca8090.png"
                        sizes="40px"
                        srcSet="https://media.cms.gelato.network/logo_Zed_Run_ada9ca8090/logo_Zed_Run_ada9ca8090.png 40w"
                      />
                    </picture>
                  </figure>
                  <figure className="-ml-[14px] flex max-h-[46px] max-w-[46px] items-center overflow-hidden rounded-full border-[3px] border-gel-black text-black">
                    <picture>
                      <source
                        type="image/webp"
                        sizes="40px"
                        srcSet="https://media.cms.gelato.network/Orium_3370be9c48/Orium_3370be9c48.png 40w"
                      />
                      <img
                        width="40"
                        height="40"
                        alt="Orium"
                        loading="lazy"
                        className="h-full w-full"
                        src="https://media.cms.gelato.network/Orium_3370be9c48/Orium_3370be9c48.png"
                        sizes="40px"
                        srcSet="https://media.cms.gelato.network/Orium_3370be9c48/Orium_3370be9c48.png 40w"
                      />
                    </picture>
                  </figure>
                </div>
              </div>
            </a>
            <a
              href="/blog/nft-lending-management"
              className="relative flex h-[261px] flex-col rounded-3xl bg-gel-black p-8 text-sm"
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
                  <span className="text-gel-gray">Gaming</span>
                </div>
                <div className="mt-2 flex-1 text-2xl font-bold transition-all delay-75 duration-200 group-hover:-translate-y-5 group-hover:scale-105 group-hover:opacity-0">
                  NFT Lending Periods
                </div>
                <div className="use-case-projects flex transition-all delay-100 duration-200 group-hover:translate-y-5 group-hover:scale-105 group-hover:opacity-0">
                  <figure className="-ml-[14px] flex max-h-[46px] max-w-[46px] items-center overflow-hidden rounded-full border-[3px] border-gel-black text-black">
                    <picture>
                      <source
                        type="image/webp"
                        sizes="40px"
                        srcSet="https://media.cms.gelato.network/logo_Zed_Run_ada9ca8090/logo_Zed_Run_ada9ca8090.png 40w"
                      />
                      <img
                        width="40"
                        height="40"
                        alt="ZedRun"
                        loading="lazy"
                        className="h-full w-full"
                        src="https://media.cms.gelato.network/logo_Zed_Run_ada9ca8090/logo_Zed_Run_ada9ca8090.png"
                        sizes="40px"
                        srcSet="https://media.cms.gelato.network/logo_Zed_Run_ada9ca8090/logo_Zed_Run_ada9ca8090.png 40w"
                      />
                    </picture>
                  </figure>
                  <figure className="-ml-[14px] flex max-h-[46px] max-w-[46px] items-center overflow-hidden rounded-full border-[3px] border-gel-black text-black">
                    <picture>
                      <source
                        type="image/webp"
                        sizes="40px"
                        srcSet="https://media.cms.gelato.network/Orium_3370be9c48/Orium_3370be9c48.png 40w"
                      />
                      <img
                        width="40"
                        height="40"
                        alt="Orium"
                        loading="lazy"
                        className="h-full w-full"
                        src="https://media.cms.gelato.network/Orium_3370be9c48/Orium_3370be9c48.png"
                        sizes="40px"
                        srcSet="https://media.cms.gelato.network/Orium_3370be9c48/Orium_3370be9c48.png 40w"
                      />
                    </picture>
                  </figure>
                </div>
              </div>
            </a>
            <a
              href="/blog/nft-lending-management"
              className="relative flex h-[261px] flex-col rounded-3xl bg-gel-black p-8 text-sm"
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
                  <span className="text-gel-gray">Gaming</span>
                </div>
                <div className="mt-2 flex-1 text-2xl font-bold transition-all delay-75 duration-200 group-hover:-translate-y-5 group-hover:scale-105 group-hover:opacity-0">
                  NFT Lending Periods
                </div>
                <div className="use-case-projects flex transition-all delay-100 duration-200 group-hover:translate-y-5 group-hover:scale-105 group-hover:opacity-0">
                  <figure className="-ml-[14px] flex max-h-[46px] max-w-[46px] items-center overflow-hidden rounded-full border-[3px] border-gel-black text-black">
                    <picture>
                      <source
                        type="image/webp"
                        sizes="40px"
                        srcSet="https://media.cms.gelato.network/logo_Zed_Run_ada9ca8090/logo_Zed_Run_ada9ca8090.png 40w"
                      />
                      <img
                        width="40"
                        height="40"
                        alt="ZedRun"
                        loading="lazy"
                        className="h-full w-full"
                        src="https://media.cms.gelato.network/logo_Zed_Run_ada9ca8090/logo_Zed_Run_ada9ca8090.png"
                        sizes="40px"
                        srcSet="https://media.cms.gelato.network/logo_Zed_Run_ada9ca8090/logo_Zed_Run_ada9ca8090.png 40w"
                      />
                    </picture>
                  </figure>
                  <figure className="-ml-[14px] flex max-h-[46px] max-w-[46px] items-center overflow-hidden rounded-full border-[3px] border-gel-black text-black">
                    <picture>
                      <source
                        type="image/webp"
                        sizes="40px"
                        srcSet="https://media.cms.gelato.network/Orium_3370be9c48/Orium_3370be9c48.png 40w"
                      />
                      <img
                        width="40"
                        height="40"
                        alt="Orium"
                        loading="lazy"
                        className="h-full w-full"
                        src="https://media.cms.gelato.network/Orium_3370be9c48/Orium_3370be9c48.png"
                        sizes="40px"
                        srcSet="https://media.cms.gelato.network/Orium_3370be9c48/Orium_3370be9c48.png 40w"
                      />
                    </picture>
                  </figure>
                </div>
              </div>
            </a>
            <a
              href="/blog/nft-lending-management"
              className="relative flex h-[261px] flex-col rounded-3xl bg-gel-black p-8 text-sm"
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
                  <span className="text-gel-gray">Gaming</span>
                </div>
                <div className="mt-2 flex-1 text-2xl font-bold transition-all delay-75 duration-200 group-hover:-translate-y-5 group-hover:scale-105 group-hover:opacity-0">
                  NFT Lending Periods
                </div>
                <div className="use-case-projects flex transition-all delay-100 duration-200 group-hover:translate-y-5 group-hover:scale-105 group-hover:opacity-0">
                  <figure className="-ml-[14px] flex max-h-[46px] max-w-[46px] items-center overflow-hidden rounded-full border-[3px] border-gel-black text-black">
                    <picture>
                      <source
                        type="image/webp"
                        sizes="40px"
                        srcSet="https://media.cms.gelato.network/logo_Zed_Run_ada9ca8090/logo_Zed_Run_ada9ca8090.png 40w"
                      />
                      <img
                        width="40"
                        height="40"
                        alt="ZedRun"
                        loading="lazy"
                        className="h-full w-full"
                        src="https://media.cms.gelato.network/logo_Zed_Run_ada9ca8090/logo_Zed_Run_ada9ca8090.png"
                        sizes="40px"
                        srcSet="https://media.cms.gelato.network/logo_Zed_Run_ada9ca8090/logo_Zed_Run_ada9ca8090.png 40w"
                      />
                    </picture>
                  </figure>
                  <figure className="-ml-[14px] flex max-h-[46px] max-w-[46px] items-center overflow-hidden rounded-full border-[3px] border-gel-black text-black">
                    <picture>
                      <source
                        type="image/webp"
                        sizes="40px"
                        srcSet="https://media.cms.gelato.network/Orium_3370be9c48/Orium_3370be9c48.png 40w"
                      />
                      <img
                        width="40"
                        height="40"
                        alt="Orium"
                        loading="lazy"
                        className="h-full w-full"
                        src="https://media.cms.gelato.network/Orium_3370be9c48/Orium_3370be9c48.png"
                        sizes="40px"
                        srcSet="https://media.cms.gelato.network/Orium_3370be9c48/Orium_3370be9c48.png 40w"
                      />
                    </picture>
                  </figure>
                </div>
              </div>
            </a>
            <a
              href="/blog/nft-lending-management"
              className="relative flex h-[261px] flex-col rounded-3xl bg-gel-black p-8 text-sm"
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
                  <span className="text-gel-gray">Gaming</span>
                </div>
                <div className="mt-2 flex-1 text-2xl font-bold transition-all delay-75 duration-200 group-hover:-translate-y-5 group-hover:scale-105 group-hover:opacity-0">
                  NFT Lending Periods
                </div>
                <div className="use-case-projects flex transition-all delay-100 duration-200 group-hover:translate-y-5 group-hover:scale-105 group-hover:opacity-0">
                  <figure className="-ml-[14px] flex max-h-[46px] max-w-[46px] items-center overflow-hidden rounded-full border-[3px] border-gel-black text-black">
                    <picture>
                      <source
                        type="image/webp"
                        sizes="40px"
                        srcSet="https://media.cms.gelato.network/logo_Zed_Run_ada9ca8090/logo_Zed_Run_ada9ca8090.png 40w"
                      />
                      <img
                        width="40"
                        height="40"
                        alt="ZedRun"
                        loading="lazy"
                        className="h-full w-full"
                        src="https://media.cms.gelato.network/logo_Zed_Run_ada9ca8090/logo_Zed_Run_ada9ca8090.png"
                        sizes="40px"
                        srcSet="https://media.cms.gelato.network/logo_Zed_Run_ada9ca8090/logo_Zed_Run_ada9ca8090.png 40w"
                      />
                    </picture>
                  </figure>
                  <figure className="-ml-[14px] flex max-h-[46px] max-w-[46px] items-center overflow-hidden rounded-full border-[3px] border-gel-black text-black">
                    <picture>
                      <source
                        type="image/webp"
                        sizes="40px"
                        srcSet="https://media.cms.gelato.network/Orium_3370be9c48/Orium_3370be9c48.png 40w"
                      />
                      <img
                        width="40"
                        height="40"
                        alt="Orium"
                        loading="lazy"
                        className="h-full w-full"
                        src="https://media.cms.gelato.network/Orium_3370be9c48/Orium_3370be9c48.png"
                        sizes="40px"
                        srcSet="https://media.cms.gelato.network/Orium_3370be9c48/Orium_3370be9c48.png 40w"
                      />
                    </picture>
                  </figure>
                </div>
              </div>
            </a>
            <a
              href="/blog/nft-lending-management"
              className="relative flex h-[261px] flex-col rounded-3xl bg-gel-black p-8 text-sm"
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
                  <span className="text-gel-gray">Gaming</span>
                </div>
                <div className="mt-2 flex-1 text-2xl font-bold transition-all delay-75 duration-200 group-hover:-translate-y-5 group-hover:scale-105 group-hover:opacity-0">
                  NFT Lending Periods
                </div>
                <div className="use-case-projects flex transition-all delay-100 duration-200 group-hover:translate-y-5 group-hover:scale-105 group-hover:opacity-0">
                  <figure className="-ml-[14px] flex max-h-[46px] max-w-[46px] items-center overflow-hidden rounded-full border-[3px] border-gel-black text-black">
                    <picture>
                      <source
                        type="image/webp"
                        sizes="40px"
                        srcSet="https://media.cms.gelato.network/logo_Zed_Run_ada9ca8090/logo_Zed_Run_ada9ca8090.png 40w"
                      />
                      <img
                        width="40"
                        height="40"
                        alt="ZedRun"
                        loading="lazy"
                        className="h-full w-full"
                        src="https://media.cms.gelato.network/logo_Zed_Run_ada9ca8090/logo_Zed_Run_ada9ca8090.png"
                        sizes="40px"
                        srcSet="https://media.cms.gelato.network/logo_Zed_Run_ada9ca8090/logo_Zed_Run_ada9ca8090.png 40w"
                      />
                    </picture>
                  </figure>
                  <figure className="-ml-[14px] flex max-h-[46px] max-w-[46px] items-center overflow-hidden rounded-full border-[3px] border-gel-black text-black">
                    <picture>
                      <source
                        type="image/webp"
                        sizes="40px"
                        srcSet="https://media.cms.gelato.network/Orium_3370be9c48/Orium_3370be9c48.png 40w"
                      />
                      <img
                        width="40"
                        height="40"
                        alt="Orium"
                        loading="lazy"
                        className="h-full w-full"
                        src="https://media.cms.gelato.network/Orium_3370be9c48/Orium_3370be9c48.png"
                        sizes="40px"
                        srcSet="https://media.cms.gelato.network/Orium_3370be9c48/Orium_3370be9c48.png 40w"
                      />
                    </picture>
                  </figure>
                </div>
              </div>
            </a>
            <a
              href="/blog/nft-lending-management"
              className="relative flex h-[261px] flex-col rounded-3xl bg-gel-black p-8 text-sm"
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
                  <span className="text-gel-gray">Gaming</span>
                </div>
                <div className="mt-2 flex-1 text-2xl font-bold transition-all delay-75 duration-200 group-hover:-translate-y-5 group-hover:scale-105 group-hover:opacity-0">
                  NFT Lending Periods
                </div>
                <div className="use-case-projects flex transition-all delay-100 duration-200 group-hover:translate-y-5 group-hover:scale-105 group-hover:opacity-0">
                  <figure className="-ml-[14px] flex max-h-[46px] max-w-[46px] items-center overflow-hidden rounded-full border-[3px] border-gel-black text-black">
                    <picture>
                      <source
                        type="image/webp"
                        sizes="40px"
                        srcSet="https://media.cms.gelato.network/logo_Zed_Run_ada9ca8090/logo_Zed_Run_ada9ca8090.png 40w"
                      />
                      <img
                        width="40"
                        height="40"
                        alt="ZedRun"
                        loading="lazy"
                        className="h-full w-full"
                        src="https://media.cms.gelato.network/logo_Zed_Run_ada9ca8090/logo_Zed_Run_ada9ca8090.png"
                        sizes="40px"
                        srcSet="https://media.cms.gelato.network/logo_Zed_Run_ada9ca8090/logo_Zed_Run_ada9ca8090.png 40w"
                      />
                    </picture>
                  </figure>
                  <figure className="-ml-[14px] flex max-h-[46px] max-w-[46px] items-center overflow-hidden rounded-full border-[3px] border-gel-black text-black">
                    <picture>
                      <source
                        type="image/webp"
                        sizes="40px"
                        srcSet="https://media.cms.gelato.network/Orium_3370be9c48/Orium_3370be9c48.png 40w"
                      />
                      <img
                        width="40"
                        height="40"
                        alt="Orium"
                        loading="lazy"
                        className="h-full w-full"
                        src="https://media.cms.gelato.network/Orium_3370be9c48/Orium_3370be9c48.png"
                        sizes="40px"
                        srcSet="https://media.cms.gelato.network/Orium_3370be9c48/Orium_3370be9c48.png 40w"
                      />
                    </picture>
                  </figure>
                </div>
              </div>
            </a>
            <a
              href="/blog/nft-lending-management"
              className="relative flex h-[261px] flex-col rounded-3xl bg-gel-black p-8 text-sm"
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
                  <span className="text-gel-gray">Gaming</span>
                </div>
                <div className="mt-2 flex-1 text-2xl font-bold transition-all delay-75 duration-200 group-hover:-translate-y-5 group-hover:scale-105 group-hover:opacity-0">
                  NFT Lending Periods
                </div>
                <div className="use-case-projects flex transition-all delay-100 duration-200 group-hover:translate-y-5 group-hover:scale-105 group-hover:opacity-0">
                  <figure className="-ml-[14px] flex max-h-[46px] max-w-[46px] items-center overflow-hidden rounded-full border-[3px] border-gel-black text-black">
                    <picture>
                      <source
                        type="image/webp"
                        sizes="40px"
                        srcSet="https://media.cms.gelato.network/logo_Zed_Run_ada9ca8090/logo_Zed_Run_ada9ca8090.png 40w"
                      />
                      <img
                        width="40"
                        height="40"
                        alt="ZedRun"
                        loading="lazy"
                        className="h-full w-full"
                        src="https://media.cms.gelato.network/logo_Zed_Run_ada9ca8090/logo_Zed_Run_ada9ca8090.png"
                        sizes="40px"
                        srcSet="https://media.cms.gelato.network/logo_Zed_Run_ada9ca8090/logo_Zed_Run_ada9ca8090.png 40w"
                      />
                    </picture>
                  </figure>
                  <figure className="-ml-[14px] flex max-h-[46px] max-w-[46px] items-center overflow-hidden rounded-full border-[3px] border-gel-black text-black">
                    <picture>
                      <source
                        type="image/webp"
                        sizes="40px"
                        srcSet="https://media.cms.gelato.network/Orium_3370be9c48/Orium_3370be9c48.png 40w"
                      />
                      <img
                        width="40"
                        height="40"
                        alt="Orium"
                        loading="lazy"
                        className="h-full w-full"
                        src="https://media.cms.gelato.network/Orium_3370be9c48/Orium_3370be9c48.png"
                        sizes="40px"
                        srcSet="https://media.cms.gelato.network/Orium_3370be9c48/Orium_3370be9c48.png 40w"
                      />
                    </picture>
                  </figure>
                </div>
              </div>
            </a>
            <a
              href="/blog/nft-lending-management"
              className="relative flex h-[261px] flex-col rounded-3xl bg-gel-black p-8 text-sm"
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
                  <span className="text-gel-gray">Gaming</span>
                </div>
                <div className="mt-2 flex-1 text-2xl font-bold transition-all delay-75 duration-200 group-hover:-translate-y-5 group-hover:scale-105 group-hover:opacity-0">
                  NFT Lending Periods
                </div>
                <div className="use-case-projects flex transition-all delay-100 duration-200 group-hover:translate-y-5 group-hover:scale-105 group-hover:opacity-0">
                  <figure className="-ml-[14px] flex max-h-[46px] max-w-[46px] items-center overflow-hidden rounded-full border-[3px] border-gel-black text-black">
                    <picture>
                      <source
                        type="image/webp"
                        sizes="40px"
                        srcSet="https://media.cms.gelato.network/logo_Zed_Run_ada9ca8090/logo_Zed_Run_ada9ca8090.png 40w"
                      />
                      <img
                        width="40"
                        height="40"
                        alt="ZedRun"
                        loading="lazy"
                        className="h-full w-full"
                        src="https://media.cms.gelato.network/logo_Zed_Run_ada9ca8090/logo_Zed_Run_ada9ca8090.png"
                        sizes="40px"
                        srcSet="https://media.cms.gelato.network/logo_Zed_Run_ada9ca8090/logo_Zed_Run_ada9ca8090.png 40w"
                      />
                    </picture>
                  </figure>
                  <figure className="-ml-[14px] flex max-h-[46px] max-w-[46px] items-center overflow-hidden rounded-full border-[3px] border-gel-black text-black">
                    <picture>
                      <source
                        type="image/webp"
                        sizes="40px"
                        srcSet="https://media.cms.gelato.network/Orium_3370be9c48/Orium_3370be9c48.png 40w"
                      />
                      <img
                        width="40"
                        height="40"
                        alt="Orium"
                        loading="lazy"
                        className="h-full w-full"
                        src="https://media.cms.gelato.network/Orium_3370be9c48/Orium_3370be9c48.png"
                        sizes="40px"
                        srcSet="https://media.cms.gelato.network/Orium_3370be9c48/Orium_3370be9c48.png 40w"
                      />
                    </picture>
                  </figure>
                </div>
              </div>
            </a>
          </div>
          <button
            className="mt-4 block w-full rounded-3xl bg-gel-black py-6 text-sm font-semibold uppercase hover:opacity-60"
            data-v-aa017ec7=""
          >
            <span className="gel-gradient-text-peach" data-v-aa017ec7="">
              + show more
            </span>
          </button>
        </section>
        <section className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-32">
          <div className="rounded-3xl bg-gel-black p-8">
            <div className="text-lg font-bold text-gel-gray-2">
              Get in touch
            </div>
            <div className="mb-8 mt-2 text-3xl font-bold md:text-2xl lg:text-3xl">
              {" "}
              Building with Gelato means you are part of an active developer
              community{" "}
            </div>
            <a
              href="https://discord.gg/ApbA39BKyJ"
              className="group flex items-center hover:text-white"
              target="_blank"
            >
              <i className="mr-2 inline-block align-text-top transition-colors duration-500">
                <svg
                  width="17"
                  height="14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M13.745 1.952a13.194 13.194 0 0 0-3.257-1.01.05.05 0 0 0-.053.025c-.14.25-.296.576-.405.833a12.18 12.18 0 0 0-3.658 0A8.43 8.43 0 0 0 5.96.967a.051.051 0 0 0-.052-.025 13.157 13.157 0 0 0-3.257 1.01.047.047 0 0 0-.021.019C.556 5.07-.013 8.092.266 11.078c.001.014.01.028.02.037a13.268 13.268 0 0 0 3.996 2.02.052.052 0 0 0 .056-.019 9.48 9.48 0 0 0 .818-1.33.05.05 0 0 0-.028-.07 8.747 8.747 0 0 1-1.248-.595.051.051 0 0 1-.005-.085c.084-.063.168-.128.248-.194a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.006c.08.067.164.133.248.195a.051.051 0 0 1-.004.085c-.399.233-.813.43-1.249.595a.051.051 0 0 0-.027.07c.24.466.514.91.816 1.33a.05.05 0 0 0 .057.019 13.224 13.224 0 0 0 4.001-2.02.052.052 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.107a.04.04 0 0 0-.02-.019ZM5.547 9.26c-.789 0-1.438-.724-1.438-1.613s.637-1.612 1.438-1.612c.807 0 1.45.73 1.438 1.612 0 .89-.637 1.613-1.438 1.613Zm5.316 0c-.788 0-1.438-.724-1.438-1.613s.637-1.612 1.438-1.612c.807 0 1.45.73 1.438 1.612 0 .89-.63 1.613-1.438 1.613Z"
                  ></path>
                </svg>
              </i>
              <span className="font-medium transition-colors duration-500">
                Join the community
              </span>
              <i className="relative top-[-4px] ml-1 inline-block align-text-top transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:duration-500 group-active:-translate-y-10 group-active:translate-x-10 group-active:opacity-0">
                <svg
                  width="9"
                  height="9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.784 1.333H2.31V.04h6.68v6.68H7.7V2.248L1.906 8.04.99 7.126l5.793-5.793Z"
                  ></path>
                </svg>
              </i>
            </a>
            <a
              href="/contact"
              className="button solid-primary mt-14 inline-block"
            >
              <span className="text-primaryBackground relative z-10">
                &gt; contact us
              </span>
            </a>
          </div>
          <form className="relative flex min-h-[360px] flex-col rounded-3xl p-8">
            <div className="absolute inset-0 z-[-10] overflow-hidden rounded-3xl bg-gel-black">
              {/* <picture>
                <source
                  type="image/webp"
                  sizes="(max-width: 320px) 320px, (max-width: 640px) 640px, (max-width: 768px) 768px, (max-width: 1024px) 1024px, (max-width: 1280px) 1280px, (max-width: 1536px) 1536px, 1536px"
                  srcSet="/_vercel/image?url=/images/subscribe.png&amp;w=320&amp;q=100 320w, /_vercel/image?url=/images/subscribe.png&amp;w=640&amp;q=100 640w, /_vercel/image?url=/images/subscribe.png&amp;w=768&amp;q=100 768w, /_vercel/image?url=/images/subscribe.png&amp;w=1024&amp;q=100 1024w, /_vercel/image?url=/images/subscribe.png&amp;w=1280&amp;q=100 1280w, /_vercel/image?url=/images/subscribe.png&amp;w=1536&amp;q=100 1536w, /_vercel/image?url=/images/subscribe.png&amp;w=1536&amp;q=100 1536w"
                />
                <img
                  width="610"
                  height="394"
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                  data-nuxt-pic=""
                  src="/_vercel/image?url=/images/subscribe.png&amp;w=1536&amp;q=100"
                  sizes="(max-width: 320px) 320px, (max-width: 640px) 640px, (max-width: 768px) 768px, (max-width: 1024px) 1024px, (max-width: 1280px) 1280px, (max-width: 1536px) 1536px, 1536px"
                  srcSet="/_vercel/image?url=/images/subscribe.png&amp;w=320&amp;q=100 320w, /_vercel/image?url=/images/subscribe.png&amp;w=640&amp;q=100 640w, /_vercel/image?url=/images/subscribe.png&amp;w=768&amp;q=100 768w, /_vercel/image?url=/images/subscribe.png&amp;w=1024&amp;q=100 1024w, /_vercel/image?url=/images/subscribe.png&amp;w=1280&amp;q=100 1280w, /_vercel/image?url=/images/subscribe.png&amp;w=1536&amp;q=100 1536w, /_vercel/image?url=/images/subscribe.png&amp;w=1536&amp;q=100 1536w"
                />
              </picture> */}
            </div>
            <div className="text-lg font-bold text-gel-gray-2">Sign up</div>
            <div className="mt-1 flex-1 text-2xl font-bold text-gel-primary">
              Be the first to hear about updates
            </div>
            <div className="relative mt-3 flex flex-col items-center justify-between gap-6 lg:flex-row">
              <input
                className="w-full flex-1 rounded-2xl bg-gel-alternative px-6 py-4 text-center text-sm font-semibold text-gel-gray lg:w-auto"
                placeholder="YOUR EMAIL"
                type="email"
              />
              <button
                id="subscribe-button"
                disabled
                className="button outlined-white w-full lg:w-auto"
              >
                Subscribe
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};
