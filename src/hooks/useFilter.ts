import { useState, useEffect } from "react";
import { PostType } from "../components/tag-card";

export const useFilteredPosts = (
  allPosts: PostType[],
  selectedTag: string | null
) => {
  const [filteredPosts, setFilteredPosts] = useState<PostType[]>(allPosts);

  useEffect(() => {
    if (!selectedTag) {
      setFilteredPosts(allPosts);
    } else {
      const filtered = allPosts.filter((post) =>
        post.tag.label.includes(selectedTag)
      );
      setFilteredPosts(filtered);
    }
  }, [allPosts, selectedTag]);

  return filteredPosts;
};
