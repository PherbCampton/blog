import { Spinner } from "./spinner";
import { PostType } from "./tag-card";
import { FeedsCard } from "./feeds-card";
import { useUser } from "../providers/user";
import { useFetch } from "../hooks/useFetch";

type Props = {
  post: PostType;
};

export const UserPosts = ({ getUserData }: Props) => {
  const { currentUser } = useUser();
  const { isLoading, data } = useFetch("posts");
  const userPosts = data.filter((post) => post.userId === getUserData.userId);

  return (
    <div className=" items-center">
      <div className="flex flex-col gap-10">
        {data.length === 0 && !isLoading && (
          <p className="text-center text-gel-gray">
            {currentUser.uid === getUserData.userId
              ? "You"
              : getUserData.username}{" "}
            {currentUser.uid === getUserData.userId
              ? "are yet to publish a post"
              : "is yet to publish a post"}
          </p>
        )}
        {isLoading ? (
          <Spinner size="50" />
        ) : (
          userPosts.map((post, i) => <FeedsCard post={post} key={i} />)
        )}
      </div>
    </div>
  );
};
