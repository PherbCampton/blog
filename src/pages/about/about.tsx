import { reviews } from "../../data";
import { Hero } from "../../utilities/hero";
import { Feature } from "../../utilities/feature";
import { Newsletter } from "../../components/newsletter";
import { Review } from "../../components/review";

export const About = () => {
  return (
    <>
      <div className="container px-5">
        <Hero
          gradient="purple"
          buttonLink="/contact"
          buttonText="Contact Us"
          titleLine1="The text-based platform,"
          titleLine2="made just for you."
          descriptionLine1="In the busy world of video and audio contents."
          descriptionLine2="We seek to utilize text-based contents to its fullest."
        />
        <section className="mt-10 text-center">
          <div className="gel-section-title mb-8">
            <h3>
              We are
              <span className="gel-gradient-text-purple">{""} Chatter</span>
              ,<br />
              Let’s publish together.
            </h3>
          </div>
          <div className="m-auto mb-12 max-w-[800px] text-xl opacity-70">
            <p className="mb-4">
              At Chatter, we believe in the power of collective creativity,
              where diverse perspectives converge to create a symphony of words.
              Whether you're a seasoned wordsmith or just starting your writing
              odyssey, our platform is your canvas. Let's publish together and
              weave a tapestry of inspiration, one conversation at a time.
            </p>
            <p>
              Join us, and let your voice be heard amidst the chorus of ideas.
              Together, we'll illuminate the digital landscape with the
              brilliance of our collective imagination. Welcome to Chatter –
              where every word counts, and every story matters.
            </p>
          </div>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfnjc32ew_Q_aQbJWKtHX3fAuWfzwrzo1aFPXAyrpOfZkExGA/viewform?usp=sf_link"
            className="button button solid-white"
            target="_blank"
          >
            <span className="relative z-10 text-primaryBackground">
              &gt; Get Involved
            </span>
          </a>
        </section>
        <section className="mt-20 text-center">
          <div className="gel-section-title mb-12">
            <h3> Hear directly from our users.</h3>
          </div>
          <div className="flex h-full flex-wrap">
            {reviews.map((review, i) => (
              <Review
                key={i}
                name={review.name}
                title={review.title}
                review={review.review}
                imageUrl={review.imageUrl}
                designation={review.designation}
              />
            ))}
          </div>
        </section>
        <section className="mt-10 text-center">
          <div className="gel-section-title mb-5">
            <h3 className="mx-auto max-w-[600px]">Why publish on chatter?</h3>
          </div>
          <h3 className="text-lg text-[#BAAFAE] mx-auto max-w-[800px] mb-16">
            Publishing articles on <strong>Chatter</strong> offers a myriad of
            benefits, including increased visibility, thought leadership,
            networking opportunities, SEO benefits, and personal branding.
          </h3>
          <div className="hidden h-full flex-wrap md:flex">
            <Feature
              index={0}
              topText="Networking"
              bottomText="opportunities"
            />
            <Feature topText="Increased" bottomText="visibility" index={1} />
            <Feature topText="SEO" bottomText="Benefits" index={2} />
            <Feature topText="Personal" bottomText="Branding" index={3} />
          </div>
        </section>
        <Newsletter />
      </div>
    </>
  );
};
