import { toast } from "react-toastify";
import { db } from "../firebase/firebase";
import { useUser } from "../providers/user";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserPlus, FaUserCheck } from "react-icons/fa";
import { useSingleFetch } from "../hooks/useSingleFetch";
import { deleteDoc, doc, setDoc } from "firebase/firestore";

type Props = {
  userId: string;
};

export const Follow = ({ userId }: Props) => {
  const navigate = useNavigate();
  const { currentUser } = useUser();
  const [isFollowed, setIsFollowed] = useState(false);

  const { data } = useSingleFetch(
    "users",
    currentUser?.uid as string,
    "follows"
  );

  useEffect(() => {
    setIsFollowed(data && data.findIndex((item) => item.id === userId) !== -1);
  }, [data, userId]);

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
        setIsFollowed(!isFollowed);
      } else {
        navigate("/sign-in");
      }
    } catch (error) {
      toast.error((error as Error).message);
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
