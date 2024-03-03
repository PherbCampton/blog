import { useState } from "react";
import { Spinner } from "./spinner";
import { toast } from "react-toastify";
import { db } from "../firebase/firebase";
import { useUser } from "../providers/user";
import { useTimeAgo } from "../hooks/useTimeAgo";
import { MdModeEdit, MdOutlineDelete } from "react-icons/md";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import imgPlaceholder from "../assets/profile-placeholder.jpg";

export type Comment = {
  id: string;
  userId: string;
  savedAt?: number;
  createdAt: number;
  commentText: string;
};

type Props = {
  item: Comment;
  postId: string;
  refetch: () => void;
};
export const Comment = ({ item: comment, postId, refetch }: Props) => {
  const { currentUser, allUsers } = useUser();
  const timeAgo = useTimeAgo(comment.createdAt);

  const [more, setMore] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [editComment, setEditComment] = useState(comment.commentText);

  const getUserData = allUsers.find((user) => user?.id === comment?.userId);

  const removeComment = async () => {
    try {
      const ref = doc(db, "posts", postId, "comments", comment.id);
      await deleteDoc(ref);
      toast.success("comment has been removed");
      refetch();
    } catch (error) {
      toast.error((error as Error).message);
    }
  };

  const handleEdit = async () => {
    setIsLoading(true);
    try {
      const ref = doc(db, "posts", postId, "comments", comment.id);
      await updateDoc(ref, {
        commentText: editComment,
        userId: currentUser?.uid,
      });
      setEditComment("");
      setIsEdit(false);
      toast.success("comment has been edited");
      refetch();
    } catch (error) {
      toast.error((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-1 border-b-[1px] p-2 border-[white] border-opacity-10">
      {!isEdit ? (
        <>
          <div className="flex items-start gap-2  mb-4 w-full">
            <img
              width={35}
              height={35}
              alt="profile picture"
              className="rounded-full min-w-[35px] min-h-[35px] max-w-[35px] max-h-[35px] object-cover"
              src={(getUserData?.userImg as string) || imgPlaceholder}
            />
            <div className="flex-1 flex items-center justify-between">
              <div className="flex flex-col justify-center">
                <p className="text-sm font-semibold mb-0 pb-0">
                  {getUserData?.username}
                </p>
                <span className="text-xs font-thin">{timeAgo}</span>
              </div>
              {currentUser && currentUser.uid === comment.userId && (
                <div className="flex gap-2">
                  <MdModeEdit
                    size={16}
                    onClick={() => {
                      setIsEdit(true);
                      setEditComment(comment.commentText);
                    }}
                    className=" opacity-50 hover:opacity-100 cursor-pointer"
                  />
                  <MdOutlineDelete
                    size={16}
                    onClick={removeComment}
                    className=" opacity-50 hover:opacity-70 cursor-pointer hover:fill-[red]"
                  />
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-between">
            <p className="text-xs text-[#d1d5db;]">
              {more
                ? comment.commentText
                : comment.commentText.substring(0, 100)}
              {comment.commentText.length > 100 && (
                <button onClick={() => setMore(!more)}>
                  {more ? "...less" : "...more"}
                </button>
              )}
            </p>
          </div>
        </>
      ) : (
        <div>
          <textarea
            rows={3}
            value={editComment}
            placeholder="What are your thoughts?"
            onChange={(e) => setEditComment(e.target.value)}
            className="border-gel-background border px-6 py-4"
          ></textarea>
          <div className="mt-5 flex justify-start gap-4">
            <button
              type="button"
              onClick={() => setIsEdit(false)}
              className="button button-action outlined-primary !p-3 !text-xs opacity-50"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleEdit}
              className="button button-action solid-primary !p-3 !text-xs opacity-70 w-[120px]"
            >
              {!isLoading ? (
                <p className="text-primaryBackground">Update</p>
              ) : (
                <Spinner size="16" />
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
