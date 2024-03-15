export const Footer = () => {
  return (
    <footer className="footer mb-16 mt-32 pb-5">
      <div className="flex w-full justify-between">
        <div className="grid w-[59%] grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="external-hover pl-8 lg:pl-10">
            <div className="mb-6">Interests</div>
            <ul>
              <li>
                <a>
                  <span>UI/UX</span>
                </a>
              </li>
              <li>
                <a>
                  <span>Dev Ops</span>
                </a>
              </li>
              <li>
                <a>
                  <span>Mobile Dev</span>
                </a>
              </li>
              <li>
                <a>
                  <span>Cloud Engineering</span>
                </a>
              </li>
              <li>
                <a>
                  <span>Software Engineering</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="external-hover pl-8 lg:pl-10">
            <div className="mb-6">Features</div>
            <ul>
              <li>
                <a target="_blank">
                  Analytics
                  <i className="ml-1 inline-block">
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
                </a>
              </li>
              <li>
                <a target="_blank">
                  Visibility
                  <i className="ml-1 inline-block">
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
                </a>
              </li>
              <li>
                <a target="_blank">
                  Markdown Editor
                  <i className="ml-1 inline-block">
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
                </a>
              </li>
            </ul>
          </div>
          <div className="external-hover pl-8 lg:pl-10">
            <div className="mb-6">Developers</div>
            <ul>
              <li>
                <a id="footernav-documentation" target="_blank">
                  Documentation
                  <i className="ml-1 inline-block">
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
                </a>
              </li>
              <li>
                <a id="footernav-github" target="_blank">
                  Github
                  <i className="ml-1 inline-block">
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
                </a>
              </li>
              <li>
                <a id="footernav-discussions" target="_blank">
                  Discussions
                  <i className="ml-1 inline-block">
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
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid w-[39%] grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="external-hover pl-0 lg:pl-10">
            <div className="mb-6">Discover</div>
            <ul>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a>Ambassador</a>
              </li>
              <li>
                <a>Careers</a>
              </li>
            </ul>
          </div>
          <div className="pl-0 lg:pl-10">
            <div className="mb-6">Follow us</div>
            <ul>
              <li>
                <a id="footernav-twitter" target="_blank">
                  <i className="mr-2 inline-block">
                    <svg
                      width="17"
                      height="14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="currentColor"
                        d="M16.2 1.856c-.557.24-1.194.478-1.91.558.636-.399 1.194-1.116 1.432-1.914-.636.4-1.353.718-2.07.798C13.097.66 12.22.26 11.266.26 9.434.261 8 1.776 8 3.69c0 .24 0 .558.08.797C5.374 4.327 2.986 2.972 1.394.9c-.318.479-.478 1.116-.478 1.675 0 1.196.558 2.232 1.433 2.87-.477 0-.955-.16-1.433-.398v.08c0 1.674 1.115 3.03 2.627 3.348-.239.08-.557.16-.875.16-.24 0-.398 0-.637-.08a3.326 3.326 0 0 0 3.025 2.392c-1.115.957-2.548 1.436-4.06 1.436-.239 0-.557 0-.796-.08 1.512.957 3.264 1.515 5.094 1.515 5.97 0 9.314-5.183 9.314-9.728V3.61c.637-.478 1.114-1.036 1.592-1.754Z"
                      ></path>
                    </svg>
                  </i>
                  Twitter
                </a>
              </li>
              <li>
                <a id="footernav-telegram" target="_blank">
                  <i className="mr-2 inline-block">
                    <svg
                      width="17"
                      height="14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="m8.236 11.296.487-.47.067.046.104.075 1.265.93 2.157 1.582c.658.482 1.234.266 1.415-.524l.004-.02.818-3.836 1.391-6.523.07-.32c.076-.337.152-.675.181-1.016.06-.682-.434-1.02-1.07-.777-2.098.807-4.197 1.612-6.295 2.418L5.177 4.263l-1.082.414c-1.018.39-2.037.779-3.052 1.178-.248.098-.49.24-.695.41-.222.184-.187.438.055.6.144.089.3.158.462.206 1.084.342 2.17.68 3.256 1.01a.333.333 0 0 1 .254.25c.243.756.49 1.51.736 2.266.218.668.436 1.337.652 2.005.063.194.178.285.384.296.303.017.54-.097.751-.303.443-.434.889-.865 1.338-1.299Zm-2.02.549-.016.07H6.2a6.124 6.124 0 0 0-.034-.084c-.017-.039-.029-.068-.039-.097l-.285-.873c-.303-.927-.606-1.854-.915-2.778-.052-.156-.015-.224.116-.306l3.3-2.067c1.465-.919 2.931-1.838 4.399-2.755.133-.081.277-.142.428-.182.044-.012.098.01.152.032.024.01.049.02.072.026a.798.798 0 0 0-.024.068.314.314 0 0 1-.068.138c-.332.304-.668.605-1.004.906l-.467.42-1.277 1.146C9.252 6.676 7.95 7.844 6.646 9.008a.574.574 0 0 0-.2.419c-.052.633-.112 1.265-.171 1.897l-.04.433a.628.628 0 0 1-.018.088Z"
                      ></path>
                    </svg>
                  </i>
                  Telegram
                </a>
              </li>
              <li>
                <a id="footernav-discord" target="_blank">
                  <i className="mr-2 inline-block">
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
                  Discord
                </a>
              </li>
              <li>
                <a id="footernav-youtube" target="_blank">
                  <i className="relative top-[2px] mr-2 inline-block h-[17px] w-[17px]">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 29 20"
                      preserveAspectRatio="xMidYMid meet"
                      focusable="false"
                    >
                      <g
                        viewBox="0 0 97 20"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <g>
                          <path
                            d="M27.9704 3.12324C27.6411 1.89323 26.6745 0.926623 25.4445 0.597366C23.2173 2.24288e-07 14.2827 0 14.2827 0C14.2827 0 5.34807 2.24288e-07 3.12088 0.597366C1.89323 0.926623 0.924271 1.89323 0.595014 3.12324C-2.8036e-07 5.35042 0 10 0 10C0 10 -1.57002e-06 14.6496 0.597364 16.8768C0.926621 18.1068 1.89323 19.0734 3.12324 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6769 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9704 3.12324Z"
                            fill="currentColor"
                          ></path>
                          <path
                            d="M11.4275 14.2854L18.8475 10.0004L11.4275 5.71533V14.2854Z"
                            fill="#202020"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </i>{" "}
                  Youtube{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-16 flex flex-col flex-wrap justify-between pl-8 text-sm lg:flex-row lg:flex-nowrap lg:pl-10">
        <div className="copy">
          {" "}
          The text-based platform <br className="block sm:hidden" /> ©2024
          Chatter Blog{" "}
        </div>
        <ul className="mt-2 flex gap-2 pr-8 lg:mt-0">
          <li>
            <a className="opacity-40 hover:opacity-100" target="_blank">
              Terms & Conditions
            </a>
          </li>
          <li className="opacity-40">
            <span className="leading-[48px]">|</span>
          </li>
          <li>
            <a className="opacity-40 hover:opacity-100" target="_blank">
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
