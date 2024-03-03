import { useState } from "react";
import { tags } from "../../data";
import { useFetch } from "../../hooks/useFetch";
import { Spinner } from "../../components/spinner";
import { PostType, TagCard } from "../../components/tag-card";
import { FeedsCard } from "../../components/feeds-card";
import { Categories } from "../../components/categories";
import { useFilteredPosts } from "../../hooks/useFilter";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export const Feeds = () => {
  const { isLoading, data } = useFetch("posts");
  const [parent] = useAutoAnimate();
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const filteredPosts = useFilteredPosts(data as PostType[], selectedTag);
  const trendingPosts = [...(data as PostType[])]
    .sort((a, b) => b.pageViews - a.pageViews)
    .slice(0, 4);

  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="container px-5">
        <div className="mt-8 rounded-[36px] bg-gel-black px-4 pt-40 pb-16 lg:px-8">
          <div className="mt-10 grid gap-24 lg:grid-cols-3">
            <div className="col-span-2 scrollbar-hide">
              {isLoading ? (
                <div className="mt-10 opacity-50">
                  <Spinner size="50" />
                </div>
              ) : (
                <div>
                  {selectedTag == null && (
                    <div>
                      <h2 className=" max-w-[360px] text-left text-2xl font-bold">
                        <span className="gel-gradient-text-peach px-3">
                          Trending on Chatter...
                        </span>
                      </h2>
                      <div className="use-cases-list grid grid-cols-1 gap-4 sm:grid-cols-2 mt-5">
                        {trendingPosts.map((post, i) => (
                          <TagCard
                            key={i}
                            post={post as PostType}
                            background="primaryBackground"
                          />
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="rounded-3xl sticky top-8 backdrop-blur-lg backdrop-brightness-90 mx-2 z-30 px-8 py-5 text-sm font-semibold mt-10 uppercase">
                    <span className="gel-gradient-text-peach font-bold">
                      feeds
                    </span>
                    <span className="text-gel-gray">
                      - {selectedTag === null ? "all posts" : selectedTag}
                    </span>
                  </div>
                  <div ref={parent} className=" flex flex-col gap-10">
                    {filteredPosts.length === 0 ? (
                      <p className="text-center mt-10 text-gel-gray">
                        No posts available for the selected Category
                      </p>
                    ) : (
                      <div ref={parent} className="mt-10 flex flex-col gap-10">
                        {filteredPosts.map((post, i) => (
                          <FeedsCard key={i} post={post} />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
            <aside className="block">
              <div className="sticky top-10">
                <h3
                  onClick={() => {
                    toTop();
                    setSelectedTag(null);
                  }}
                  className="font-bold gel-gradient-text-peach text-xl cursor-pointer"
                >
                  Categories
                </h3>
                <ul className="outline-list mt-6 flex flex-col gap-3">
                  {tags.map((category, i) => (
                    <Categories
                      key={i}
                      category={category.title}
                      onClick={() => {
                        toTop();
                        setSelectedTag(category.title);
                      }}
                    />
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};
