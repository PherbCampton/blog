import { PostType } from "../tag-card";
import { toast } from "react-toastify";
import { db } from "../../firebase/firebase";
import { useUser } from "../../providers/user";
import { useNavigate } from "react-router-dom";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { MdOutlineDeleteOutline } from "react-icons/md";

type Props = {
  post: PostType;
};

export const Delete = ({ post }: Props) => {
  const { id: postId } = post;
  const { allUsers } = useUser();

  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      const delRef = doc(db, "posts", postId as string);

      allUsers.forEach(async (user) => {
        const savedRef = doc(
          db,
          "users",
          user?.id as string,
          "savedPost",
          postId
        );

        const savesRef = doc(
          db,
          "posts",
          postId as string,
          "saves",
          user?.id as string
        );

        const likeRef = doc(
          db,
          "posts",
          postId as string,
          "likes",
          user?.id as string
        );

        await deleteDoc(savedRef);
        await deleteDoc(likeRef);
        await deleteDoc(savesRef);
      });

      const commentsRef = collection(db, "posts", postId as string, "comments");
      const querySnapshot = await getDocs(commentsRef);
      querySnapshot.forEach(async (commentDoc) => {
        await deleteDoc(commentDoc.ref);
      });

      await deleteDoc(delRef);

      toast.success("Post deleted");
      navigate("/feeds");
    } catch (error) {
      toast.error((error as Error).message);
    }
  };

  return (
    <div className="flex gap-1.5 items-center" onClick={handleDelete}>
      <MdOutlineDeleteOutline
        size={20}
        className=" opacity-70  cursor-pointer hover:fill-[red]"
      />
    </div>
  );
};
