import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { PostType, TagCard } from "./tag-card";
import { Profile } from "./profile-tab";

type Props = {
  post: PostType;
};

export const Recommended = ({ post: currentPost }: Props) => {
  const { data } = useFetch("posts");
  const [recommendedPosts, setRecommendedPosts] = useState<
    (PostType | Profile)[]
  >([]);

  useEffect(() => {
    if (data && currentPost && currentPost.tag) {
      const tag = currentPost.tag.label;
      const filteredData = data.filter(
        (post) => post.id !== currentPost.id && post?.tag?.label === tag
      );
      const shuffledData = shuffleArray(filteredData);
      const slicedData = shuffledData.slice(0, 6);

      setRecommendedPosts(slicedData);
    }
  }, [data, currentPost]);

  const hasRecommendedPosts = recommendedPosts.length > 0;

  return (
    <>
      {hasRecommendedPosts && (
        <div className="use-cases-list grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-10">
          {recommendedPosts.map((recommendedPost) => (
            <TagCard
              key={recommendedPost?.id}
              background="secondaryBackground"
              post={recommendedPost as PostType}
            />
          ))}
        </div>
      )}
    </>
  );
};

function shuffleArray(array: (PostType | Profile)[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
