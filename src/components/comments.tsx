import { useState } from "react";
import { Spinner } from "./spinner";
import { Comment } from "./comment";
import { toast } from "react-toastify";
import { db } from "../firebase/firebase";
import { PrimaryBtn } from "./primary-btn";
import { useUser } from "../providers/user";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { useSingleFetch } from "../hooks/useSingleFetch";
import imgPlaceholder from "../assets/profile-placeholder.jpg";

type Props = {
  postId: string;
};

export const Comments = ({ postId }: Props) => {
  const navigate = useNavigate();
  const [comment, setComment] = useState("");
  const { currentUser, allUsers } = useUser();
  const [loading, setLoading] = useState(false);
  const [commentsToShow, setCommentsToShow] = useState(5);

  const getUserData = allUsers.find((user) => user.id === currentUser?.uid);

  const { data, isLoading, refetch } = useSingleFetch(
    "posts",
    postId,
    "comments"
  );

  const writeComment = async () => {
    try {
      setLoading(true);
      if (comment === "" && currentUser) {
        toast.error("the input field is required");
        return;
      }
      if (currentUser) {
        const commentRef = collection(db, "posts", postId, "comments");
        await addDoc(commentRef, {
          commentText: comment,
          createdAt: Date.now(),
          userId: currentUser?.uid,
        });
        toast.success("Comment Added");
        refetch();
        setComment("");
      } else {
        navigate("/sign-in");
      }
    } catch (error) {
      toast.error((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const loadMoreComments = () => {
    setCommentsToShow((prev) => prev + 5);
  };

  return (
    <div className="flex flex-col gap-2 text-sm text-gel-gray-2">
      <form className="border border-1 border-[white] border-opacity-10 rounded-3xl p-4">
        <div className="flex items-center gap-2 px-2 mb-4">
          <img
            width={40}
            height={40}
            alt="profile picture"
            className="rounded-full max-w-[40px] max-h-[40px] min-w-[40px] min-h-[40px] object-cover"
            src={(getUserData?.userImg as string) || imgPlaceholder}
          />
          <p className="text-sm font-semibold">{getUserData?.username}</p>
        </div>
        <textarea
          value={comment}
          rows={3}
          onChange={(e) => setComment(e.target.value)}
          placeholder="What are your thoughts?"
          className="border-gel-background border px-6 py-4"
        ></textarea>
        <div className="mt-5 flex justify-start gap-4">
          <button
            type="button"
            onClick={() => setComment("")}
            className="button button-action outlined-primary !p-3 !text-xs opacity-50"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={writeComment}
            className="button button-action solid-primary !p-3 !text-xs opacity-70 w-[120px]"
          >
            {!loading ? (
              <p className="text-primaryBackground">Comment</p>
            ) : (
              <Spinner size="16" />
            )}
          </button>
        </div>
      </form>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {data && data.length === 0 ? (
            <p className="text-xs font-medium opacity-50 text-center mt-5">
              Be the first to comment on this post
            </p>
          ) : (
            <>
              {data.slice(0, commentsToShow).map((item, i) => (
                <Comment
                  key={i}
                  postId={postId}
                  refetch={refetch}
                  item={item as Comment}
                />
              ))}
              {data.length > commentsToShow && (
                <div className="text-center mt-4">
                  <PrimaryBtn
                    type="button"
                    text="Load More"
                    onClick={loadMoreComments}
                    className="!p-3 !text-xs opacity-50 lg:min-w-[150px]"
                  />
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};
