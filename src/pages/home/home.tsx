import { Tag } from "../../components/tag";
import { Hero } from "../../utilities/hero";
import { posts, tags, trending } from "../../data";
import { TagCard } from "../../components/tag-card";
import { Newsletter } from "../../components/newsletter";
import { TrendingCard } from "../../components/trending-card";

export const Home = () => {
  return (
    <>
      <div className="container px-5">
        <Hero
          gradient="peach"
          buttonLink="/sign-up"
          buttonText="Get Started"
          titleLine1="Discover new topics,"
          titleLine2="& build your expertise."
          descriptionLine1="Uncover premium articles curated by experts."
          descriptionLine2="Ranging from a variety of topics, meet expertise and perfection."
        />
        <section className="mt-32">
          <div className="gel-section-title mb-16">
            <span className="gel-gradient-text-peach">Trending...</span>
            <div>
              Our most engaging
              <br />
              &amp; most sort after blog posts
            </div>
          </div>
          <div className="grid gap-4 font-bold text-gel-alternative sm:grid-cols-2">
            {trending.map((trend, i) => (
              <TrendingCard
                key={i}
                index={i}
                title={trend.title}
                imageUrl={trend.imageUrl}
                description={trend.description}
              />
            ))}
          </div>
        </section>
        <section className="mt-20 lg:mt-32">
          <h2 className="mx-auto mb-2 max-w-[360px] text-center text-lg font-bold">
            <span className="gel-gradient-text-peach">Categories</span>
          </h2>
          <h3 className="gel-section-title mb-16 text-center">
            <span>Explore Chatter by tags</span>
          </h3>
          <div className="scrollbar-hide scrollbar-hide -mx-5 mb-8 overflow-x-scroll pl-5">
            <ul className="m-auto flex max-w-4xl gap-2 font-semibold uppercase lg:flex-wrap lg:justify-center">
              {tags.map((tag, i) => (
                <Tag key={i} tag={tag.title} color={tag.color} />
              ))}
              <li className="min-w-[12px]"></li>
            </ul>
          </div>
          <div className="use-cases-list grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <TagCard
                key={i}
                title={post.title}
                tag={post.tag}
                imageUrl={post.imageUrl}
              />
            ))}
          </div>
          <button
            className="mt-4 block w-full rounded-3xl bg-gel-black py-6 text-sm font-semibold uppercase hover:opacity-60"
            data-v-aa017ec7=""
          >
            <span className="gel-gradient-text-peach" data-v-aa017ec7="">
              + show more
            </span>
          </button>
        </section>
        <Newsletter />
      </div>
    </>
  );
};
