import { FcGoogle } from "react-icons/fc";
import { LinkText } from "../../components/link-text";
import { EmailInput } from "../../components/email-input";
import { PrimaryBtn } from "../../components/primary-btn";
import { PasswordInput } from "../../components/password-input";

export const SignIn = () => {
  return (
    <>
      <div className="container px-5">
        <div className="wrapper ">
          <div className="grid min-h-[670px] grid-cols-1 gap-16 overflow-hidden rounded-[36px] bg-gel-black px-8 pb-16 pt-40 lg:grid-cols-2">
            <div>
              <h1 className="text-6xl font-bold leading-tight tracking-tight">
                Welcome back
              </h1>
              <p className="mt-4 text-lg text-gel-gray text-opacity-40">
                A few updates were added and a couple of writers published
                amazing contents during your absence and we are very excited to
                get you back on track...
              </p>
            </div>
            <div>
              <form noValidate={true} className="flex flex-col gap-4">
                <EmailInput name="email" label="Email" />
                <PasswordInput name="password" label="Password" />
                <div className="my-6 flex flex-col items-center gap-8 lg:flex-row">
                  <PrimaryBtn text="Get me in" />
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
                <LinkText text="Don’t have an account?" link="/sign-up" />
              </form>
              <div className="relative -right-8 mt-12"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
