import { toast } from "react-toastify";
import { PostType } from "../tag-card";
import { HiSaveAs } from "react-icons/hi";
import { useEffect, useState } from "react";
import { db } from "../../firebase/firebase";
import { useUser } from "../../providers/user";
import { useNavigate } from "react-router-dom";
import { BsSave2, BsSave2Fill } from "react-icons/bs";
import { useSingleFetch } from "../../hooks/useSingleFetch";
import { deleteDoc, doc, setDoc } from "firebase/firestore";
import { useNumFormatter } from "../../hooks/useNumFormatter";

type Props = {
  post: PostType;
};

export const Saved = ({ post }: Props) => {
  const { id, userId } = post;
  const navigate = useNavigate();
  const { currentUser } = useUser();
  const [saveCount, setSaveCount] = useState(0);
  const [isSaved, setIsSaved] = useState(false);

  const { data: userData, refetch: refetchUser } = useSingleFetch(
    "users",
    currentUser?.uid as string,
    "savedPost"
  );

  const formattedNum = useNumFormatter(saveCount);
  const { data: saves } = useSingleFetch("posts", id, "saves");

  useEffect(() => {
    if (userData) {
      setIsSaved(userData.some((savedPost) => savedPost.id === id));
    }
  }, [userData, id]);

  useEffect(() => {
    setSaveCount(saves.length);
  }, [saves]);

  const handleSave = async () => {
    try {
      if (currentUser) {
        const savedRef = doc(db, "users", currentUser.uid, "savedPost", id);
        const savesRef = doc(db, "posts", id, "saves", currentUser.uid);

        setIsSaved(!isSaved);

        setSaveCount((prevCount) => (isSaved ? prevCount - 1 : prevCount + 1));

        if (isSaved) {
          await deleteDoc(savedRef);
          await deleteDoc(savesRef);
        } else {
          await setDoc(savedRef, {
            ...post,
            savedAt: Date.now(),
          });
          await setDoc(savesRef, {
            userId: currentUser.uid,
          });
        }

        setTimeout(() => {
          refetchUser();
        }, 5000);
      } else {
        navigate("/sign-in");
      }
    } catch (error) {
      toast.error((error as Error).message);
      setIsSaved(!isSaved);
      setSaveCount((prevCount) => (isSaved ? prevCount + 1 : prevCount - 1));
    }
  };

  return (
    <div className="flex gap-1.5 items-cente">
      {currentUser?.uid !== userId ? (
        <div className="flex gap-1.5 items-center" onClick={handleSave}>
          {isSaved ? (
            <BsSave2Fill
              size={16}
              className=" opacity-50 hover:opacity-100 cursor-pointer"
            />
          ) : (
            <BsSave2
              size={16}
              className=" opacity-50 hover:opacity-100 cursor-pointer"
            />
          )}
        </div>
      ) : (
        <HiSaveAs size={16} className=" opacity-80" />
      )}
      <span className="text-xs">{formattedNum}</span>
    </div>
  );
};
