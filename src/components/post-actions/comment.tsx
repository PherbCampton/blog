/* eslint-disable react-hooks/rules-of-hooks */
import { PostType } from "../tag-card";
import { useEffect, useState } from "react";
import { AiOutlineComment } from "react-icons/ai";
import { useSingleFetch } from "../../hooks/useSingleFetch";
import { useNumFormatter } from "../../hooks/useNumFormatter";

type Props = {
  post: PostType;
};

export const Comment = ({ post }: Props) => {
  const [commentCount, setCommentCount] = useState(0);

  if (!post) {
    return null;
  }

  const { id } = post;
  const { data } = useSingleFetch("posts", id, "comments");

  useEffect(() => {
    setCommentCount(data.length);
  }, [data]);

  const formattedNum = useNumFormatter(commentCount);

  return (
    <div className="flex gap-1.5 items-center">
      <AiOutlineComment
        opacity={0.5}
        size={20}
        className="hover:opacity-100 cursor-pointer"
      />
      <span className="text-xs font-semibold opacity-80 ">{formattedNum}</span>
    </div>
  );
};
