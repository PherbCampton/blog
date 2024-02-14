import { Textarea } from "../../components/textarea";
import { TextInput } from "../../components/text-input";
import { PrimaryBtn } from "../../components/primary-btn";
import { EmailInput } from "../../components/email-input";

export const Contact = () => {
  return (
    <>
      <div className="container px-5">
        <div className="wrapper ">
          <div className="grid min-h-[670px] grid-cols-1 gap-16 overflow-hidden rounded-[36px] bg-gel-black px-8 pb-16 pt-40 lg:grid-cols-2">
            <div>
              <h1 className="text-6xl font-bold leading-tight tracking-tight">
                Talk to an expert
              </h1>
              <p className="mt-4 text-lg text-gel-gray text-opacity-40">
                If you have any questions, suggestions or wishes for our
                products - write to us and we will help you
              </p>
            </div>
            <div>
              <form noValidate={true} className="flex flex-col gap-4">
                <TextInput name="name" label="Name" />
                <EmailInput name="email" label="Email" />
                <Textarea name="description" label="Describe your concerns" />
                <div className="my-6 flex flex-col items-center gap-8 lg:flex-row">
                  <PrimaryBtn text="Reach out to us" />
                </div>
              </form>
              <div className="relative -right-8 mt-12"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
