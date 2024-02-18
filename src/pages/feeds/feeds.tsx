import { TagCard } from "../../components/tag-card";
import { FeedsCard } from "../../components/feeds-card";
import { posts, userFavorites, tags } from "../../data";
import { Categories } from "../../components/categories";

export const Feeds = () => {
  return (
    <>
      <div className="container px-5">
        <div className="mt-8 rounded-[36px] bg-gel-black px-4 pt-40 pb-16 lg:px-8">
          <div className="mt-10 grid gap-24 lg:grid-cols-3">
            <div className="col-span-2 scrollbar-hide">
              <h2 className=" max-w-[360px] text-left text-2xl font-bold">
                <span className="gel-gradient-text-peach px-3">
                  Trending posts
                </span>
              </h2>
              <div className="use-cases-list grid grid-cols-1 gap-4 sm:grid-cols-2 mt-5">
                {posts.map((post, i) => (
                  <TagCard
                    key={i}
                    tag={post.tag}
                    title={post.title}
                    imageUrl={post.imageUrl}
                  />
                ))}
              </div>
              <div className="rounded-3xl sticky top-8 backdrop-blur-lg backdrop-brightness-90 mx-2 z-30 px-8 py-5 text-sm font-semibold mt-10 uppercase">
                <span className="gel-gradient-text-peach font-bold">
                  feeds{" "}
                </span>
                <span className="text-gel-gray">- all posts</span>
              </div>
              <div className="mt-10 flex flex-col gap-10">
                {userFavorites.map((post, i) => (
                  <FeedsCard
                    key={i}
                    title={post.title}
                    description={post.description}
                  />
                ))}
              </div>
            </div>
            <aside className="block">
              <div className="sticky top-10">
                <h3 className="font-bold gel-gradient-text-peach text-xl">
                  Categories
                </h3>
                <ul className="outline-list mt-6 flex flex-col gap-3">
                  {tags.map((category) => (
                    <Categories category={category.title} />
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
