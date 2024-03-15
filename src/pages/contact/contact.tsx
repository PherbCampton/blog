import { toast } from "react-toastify";
import { FormEvent, useState } from "react";
import { Input } from "../../components/input";
import { Textarea } from "../../components/textarea";
import { PrimaryBtn } from "../../components/primary-btn";

export type ContactForm = {
  name: string;
  email: string;
  message: string;
};

export const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (Object.values(form).every((value) => value === "")) {
      toast.error("All fields are required");
    } else {
      setIsLoading(true);
      // console.log(form);
      setIsLoading(false);
      setForm({
        name: "",
        email: "",
        message: "",
      });
      toast.success("We've received your message");
    }
  };

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
                If you have any questions, suggestions or wishes for Chatter and
                the team - write to us and we will do get to back to you
                shortly.
              </p>
            </div>
            <div>
              <form
                noValidate={true}
                onSubmit={handleSubmit}
                className="flex flex-col gap-4"
              >
                <Input
                  name="name"
                  type="text"
                  label="Name"
                  setForm={setForm}
                  value={form.name}
                />
                <Input
                  name="email"
                  type="email"
                  label="Email"
                  setForm={setForm}
                  value={form.email}
                />
                <Textarea
                  name="message"
                  setForm={setForm}
                  value={form.message}
                  label="Describe your concerns"
                />
                <div className="my-6 flex flex-col items-center gap-8 lg:flex-row">
                  <PrimaryBtn
                    type="submit"
                    loading={isLoading}
                    text="Reach out to us"
                  />
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
