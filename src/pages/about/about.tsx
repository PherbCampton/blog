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
              We are the
              <span className="gel-gradient-text-purple">
                Gelato Collective
              </span>
              ,<br />
              We grow together.
            </h3>
          </div>
          <div className="m-auto mb-12 max-w-[800px] text-xl opacity-70">
            <p className="mb-4">
              A collective of individuals; thought leaders, builders, creators,
              event organizers, misfits, rebels, ones who see things differently
              and change the world.
            </p>
            <p>
              We are passionate about Gelato's mission to accelerate Web3
              adoption and empower dApps to onboard the next billion users. In
              our communities we are known for our expertise, ablility to
              inspire, integrity and rentless drive to accelerate the Web3
              adoption.
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
