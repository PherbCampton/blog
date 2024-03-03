export const Newsletter = () => {
  return (
    <section className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-32">
      <div className="rounded-3xl bg-gel-black p-8">
        <div className="text-lg font-bold text-gel-gray-2">Get in touch</div>
        <div className="mb-8 mt-2 text-3xl font-bold md:text-2xl lg:text-3xl">
          Writing on Chatter means you are part of an active community
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
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.784 1.333H2.31V.04h6.68v6.68H7.7V2.248L1.906 8.04.99 7.126l5.793-5.793Z"
              ></path>
            </svg>
          </i>
        </a>
        <a href="/contact" className="button solid-primary mt-14 inline-block">
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
  );
};
