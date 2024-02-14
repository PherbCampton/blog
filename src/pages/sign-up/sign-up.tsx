import { FcGoogle } from "react-icons/fc";
import { TelInput } from "../../components/tel-input";
import { LinkText } from "../../components/link-text";
import { TextInput } from "../../components/text-input";
import { PrimaryBtn } from "../../components/primary-btn";
import { EmailInput } from "../../components/email-input";
import { PasswordInput } from "../../components/password-input";

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
                <TextInput name="name" label="Name" />
                <TelInput name="telephone" label="Phone number" />
                <EmailInput name="email" label="Email" />
                <PasswordInput name="password" label="Password" />
                <PasswordInput name="reenter" label="Re-enter Password" />
                <p className="my-2 text-left text-sm text-gel-gray-2">
                  By signing up you agree to <strong>Chatter’s</strong> Terms of
                  Service and acknowledge that <strong>Chatter’s</strong>{" "}
                  Privacy Policy applies to you.
                </p>
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
                <LinkText text="Already have an account?" link="/sign-in" />
              </form>
              <div className="relative -right-8 mt-12"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
