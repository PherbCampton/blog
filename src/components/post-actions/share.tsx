import { PostType } from "../tag-card";
import { toast } from "react-toastify";
import { db } from "../../firebase/firebase";
import { useUser } from "../../providers/user";
import { useEffect, useState } from "react";
import { BsSave2, BsSave2Fill } from "react-icons/bs";
import { useSingleFetch } from "../../hooks/useSingleFetch";
import { deleteDoc, doc, setDoc } from "firebase/firestore";

type Props = {
  post: PostType;
};

export const Saved = ({ post }: Props) => {
  const [isSaved, setIsSaved] = useState(true);
  const { currentUser, userLoading } = useUser();
  const { id, userId } = post;

  const { data, isLoading, refetch } = useSingleFetch(
    "users",
    currentUser.uid,
    "savedPost"
  );

  useEffect(() => {
    if (data) {
      setIsSaved(data && data.find((item) => item.id === id));
    }
  }, [data, id]);

  const handleSave = async () => {
    try {
      if (currentUser) {
        const saveRef = doc(db, "users", currentUser?.uid, "savedPost", id);

        if (isSaved) {
          await deleteDoc(saveRef);
          toast.success("Post unsaved");
        } else {
          await setDoc(saveRef, {
            ...post,
            savedAt: Date.now(),
          });
          toast.success("Post saved");
        }
        setIsSaved(!isSaved);
        refetch();
      }
    } catch (error) {
      toast.error(error.message as Error);
    }
  };

  return (
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
  );
};
