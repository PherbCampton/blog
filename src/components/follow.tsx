import { PostType } from "./tag-card";
import { toast } from "react-toastify";
import { db } from "../firebase/firebase";
import { useUser } from "../providers/user";
import { useEffect, useState } from "react";
import { FaUserPlus, FaUserCheck } from "react-icons/fa";
import { useSingleFetch } from "../hooks/useSingleFetch";
import { deleteDoc, doc, setDoc } from "firebase/firestore";

type Props = {
  post: PostType;
};

export const Follow = ({ userId }: Props) => {
  const [isFollowed, setIsFollowed] = useState(false);
  const { currentUser } = useUser();

  const { data } = useSingleFetch("users", currentUser.uid, "follows");

  useEffect(() => {
    setIsFollowed(data && data.findIndex((item) => item.id === userId) !== -1);
  }, [data]);

  const handleFollow = async () => {
    try {
      if (currentUser) {
        const followRef = doc(db, "users", currentUser?.uid, "follows", userId);
        const followersRef = doc(
          db,
          "users",
          userId,
          "followers",
          currentUser?.uid
        );

        if (isFollowed) {
          await deleteDoc(followRef);
          await deleteDoc(followersRef);
          toast.success("User unfollowed");
        } else {
          await setDoc(followRef, {
            userId: userId,
          });
          await setDoc(followersRef, {
            userId: userId,
          });
          toast.success("User Followed");
        }
      }
      setIsFollowed(!isFollowed);
    } catch (error) {
      toast.error(error.message as Error);
    }
  };

  return (
    <div className="flex gap-1.5 items-center" onClick={handleFollow}>
      {isFollowed ? (
        <FaUserCheck
          size={20}
          className=" opacity-90 hover:opacity-100 cursor-pointer"
        />
      ) : (
        <FaUserPlus
          size={20}
          className=" opacity-50 hover:opacity-100 cursor-pointer"
        />
      )}
    </div>
  );
};
