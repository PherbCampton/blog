import { useState } from "react";
import { tags } from "../../data";
import { Tag } from "../../components/tag";
import { Hero } from "../../utilities/hero";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { Spinner } from "../../components/spinner";
import { Newsletter } from "../../components/newsletter";
import { useFilteredPosts } from "../../hooks/useFilter";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { PostType, TagCard } from "../../components/tag-card";
import { TrendingCard } from "../../components/trending-card";

export const Home = () => {
  const navigate = useNavigate();
  const [parent] = useAutoAnimate();
  const { isLoading, data } = useFetch("posts");

  const trendingPosts = [...(data as PostType[])]
    .sort((a, b) => b.pageViews - a.pageViews)
    .slice(0, 6);

  const [isFiltered, setIsFiltered] = useState<boolean>(false);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const filteredPosts = useFilteredPosts(data as PostType[], selectedTag);

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
            {trendingPosts.map((trend, i) => (
              <TrendingCard
                key={i}
                index={i}
                postId={trend.id}
                title={trend.title}
                userId={trend.userId}
                tag={trend.tag.label}
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
                <Tag
                  key={i}
                  tag={tag.title}
                  color={tag.color}
                  onClick={() => {
                    setIsFiltered(true);
                    setSelectedTag(tag.title);
                  }}
                  isActive={
                    isFiltered ? tag.title === selectedTag : !isFiltered
                  }
                />
              ))}
              <li className="min-w-[12px]"></li>
            </ul>
          </div>
          <div ref={parent}>
            {isLoading ? (
              <Spinner />
            ) : filteredPosts.length === 0 ? (
              <p className="text-center mt-10 text-gel-gray">
                No posts available for the selected tag
              </p>
            ) : (
              <div
                ref={parent}
                className="use-cases-list grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
              >
                {[...filteredPosts].slice(0, 6).map((post, i) => (
                  <TagCard
                    key={i}
                    post={post as PostType}
                    background="secondaryBackground"
                  />
                ))}
              </div>
            )}
          </div>
          <button
            onClick={() => navigate(`/sign-in`)}
            className="mt-4 block w-full rounded-3xl bg-gel-black py-6 text-sm font-semibold uppercase hover:opacity-60"
          >
            <span className="gel-gradient-text-peach">sign in for more</span>
          </button>
        </section>
        <Newsletter />
      </div>
    </>
  );
};
