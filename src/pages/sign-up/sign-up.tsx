import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

export const SignUp = () => {
  return (
    <>
      <div className="container px-5">
        <div className="wrapper ">
          <div className="grid min-h-[670px] grid-cols-1 gap-16 overflow-hidden rounded-[36px] bg-gel-black px-8 pb-16 pt-40 lg:grid-cols-2">
            <div>
              <h1 className="text-6xl font-bold leading-tight tracking-tight">
                Create an account
              </h1>
              <p className="mt-4 text-lg text-gel-gray text-opacity-40">
                Join the league of the world's most outstanding minds today,
                connect with intellects from around the globe and consume value
                adding contents on <strong>Chatter</strong>...
              </p>
            </div>
            <div>
              <form noValidate={true} className="flex flex-col gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="ml-2 mb-2 block text-sm font-semibold"
                  >
                    Name
                  </label>
                  <div className="relative">
                    {/* <span className="absolute top-0 bottom-0 left-4 py-4 text-sm text-gel-gray opacity-50">
                      @
                    </span> */}
                    <input
                      id="name"
                      className="pl-10 border-gel-background border px-6 py-4"
                      name="name"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="telephone"
                    className="ml-2 mb-2 block text-sm font-semibold"
                  >
                    Phone number
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      id="telephone"
                      className="border-gel-background border px-6 py-4"
                      name="telephone"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="ml-2 mb-2 block text-sm font-semibold"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      className="border-gel-background border px-6 py-4"
                      name="email"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="ml-2 mb-2 block text-sm font-semibold"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      id="password"
                      className="border-gel-background border px-6 py-4"
                      name="password"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="reenter"
                    className="ml-2 mb-2 block text-sm font-semibold"
                  >
                    Re-enter Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      id="reenter"
                      className="border-gel-background border px-6 py-4"
                      name="reenter"
                    />
                  </div>
                </div>
                <div className="my-6 flex flex-col items-center gap-8 lg:flex-row">
                  <button
                    id="contact-send-button"
                    className=" button button-action solid-primary w-full lg:w-auto lg:min-w-[200px] "
                  >
                    <span>
                      <span className="button-action-icon text-primaryBackground ">
                        &gt;
                      </span>
                      <span className="button-action-text text-primaryBackground">
                        get me in
                      </span>
                    </span>
                  </button>
                  <button
                    id="contact-send-button"
                    className=" button solid-gradient outlined w-full md:w-auto "
                  >
                    <span className="flex items-center justify-center">
                      <FcGoogle fontSize="20px" />
                      <span className="button-action-text text-primaryBackground"></span>
                    </span>
                  </button>
                </div>
                <Link
                  to="/sign-in"
                  className="group flex items-center hover:text-white"
                >
                  <span className="font-medium">Already have an account?</span>
                  <i className="relative top-[-5px] ml-1.5 inline-block align-text-top transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:duration-500 group-active:translate-x-10 group-active:-translate-y-10 group-active:opacity-0">
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
                </Link>
              </form>
              <div className="relative -right-8 mt-12">
                {/* Image code here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
