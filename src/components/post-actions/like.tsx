import { PostType } from "../tag-card";
import { toast } from "react-toastify";
import { db } from "../../firebase/firebase";
import { useUser } from "../../providers/user";
import { useEffect, useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { useSingleFetch } from "../../hooks/useSingleFetch";
import { deleteDoc, doc, setDoc } from "firebase/firestore";
import { useNumFormatter } from "../../hooks/useNumFormatter";

type Props = {
  post: PostType;
};

export const Like = ({ post }: Props) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [likeBounce, setLikeBounce] = useState(false);
  const { currentUser } = useUser();
  const { id } = post;

  const { data, refetch } = useSingleFetch("posts", id, "likes");
  const formattedNum = useNumFormatter(likeCount);

  useEffect(() => {
    if (data) {
      const currentPostLikes = data.length;
      setLikeCount(currentPostLikes);
      setIsLiked(
        data && data.findIndex((item) => item.id === currentUser?.uid) !== -1
      );
    }
  }, [data, currentUser]);

  const handleLike = async () => {
    try {
      if (currentUser) {
        const likeRef = doc(db, "posts", id, "likes", currentUser?.uid);

        setIsLiked(!isLiked);
        setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);

        if (isLiked) {
          await deleteDoc(likeRef);
        } else {
          await setDoc(likeRef, {
            userId: currentUser?.uid,
          });
        }
        setLikeBounce(true);

        setTimeout(() => {
          setLikeBounce(false);
        }, 2000);

        setTimeout(() => {
          refetch();
        }, 5000);
      }
    } catch (error) {
      toast.error(error.message as Error);
      setIsLiked(!isLiked);
      setLikeCount(isLiked ? likeCount + 1 : likeCount - 1);
    }
  };

  return (
    <div className="flex gap-1.5 items-center" onClick={handleLike}>
      {isLiked ? (
        <FcLike
          size={16}
          className={`opacity-50 hover:opacity-100 cursor-pointer ${
            likeBounce ? "scale-up" : ""
          }`}
        />
      ) : (
        <FcLikePlaceholder
          size={16}
          className=" opacity-50 hover:opacity-100 cursor-pointer"
        />
      )}
      <span className="text-xs">{formattedNum}</span>
    </div>
  );
};
