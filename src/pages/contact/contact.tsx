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
                {" "}
                If you have any questions, suggestions or wishes for our
                products - write to us and we will help you{" "}
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
                    <span className="absolute top-0 bottom-0 left-4 py-4 text-sm text-gel-gray opacity-50">
                      @
                    </span>
                    <input
                      id="name"
                      className="pl-10 border-gel-background border px-6 py-4"
                      name="name"
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
                    htmlFor="description"
                    className="ml-2 mb-2 block text-sm font-semibold"
                  >
                    Describe what you are looking for
                  </label>
                  <div className="relative">
                    <textarea
                      id="description"
                      className="border-gel-background border px-6 py-4"
                      rows={5}
                      name="description"
                    ></textarea>
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
                        Reach out to us
                      </span>
                    </span>
                  </button>
                </div>
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
