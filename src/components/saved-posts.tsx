import { Spinner } from "./spinner";
import { PostType } from "./tag-card";
import { Profile } from "./profile-tab";
import { FeedsCard } from "./feeds-card";
import { useUser } from "../providers/user";
import { useSingleFetch } from "../hooks/useSingleFetch";

type Props = {
  getUserData: Profile | undefined;
};

export const SavedPosts = ({ getUserData }: Props) => {
  const { currentUser } = useUser();
  const { data, isLoading } = useSingleFetch(
    "users",
    currentUser?.uid as string,
    "savedPost"
  );

  return (
    <div className=" items-center">
      {currentUser?.uid === getUserData?.userId ? (
        <div className="flex flex-col gap-10">
          {data.length === 0 && !isLoading && (
            <p className="text-center text-gel-gray">
              {currentUser?.uid === getUserData?.userId
                ? "You"
                : getUserData?.username}{" "}
              {currentUser?.uid === getUserData?.userId ? "have" : "has"} no
              saved posts
            </p>
          )}
          {isLoading ? (
            <Spinner size="50" />
          ) : (
            data.map((post, i) => <FeedsCard post={post as PostType} key={i} />)
          )}
        </div>
      ) : (
        <div className="opacity-50 hover:opacity-100 cursor-pointer">
          <p className="text-center text-gel-gray">
            {currentUser?.uid === getUserData?.userId
              ? "You"
              : getUserData?.username}
            {"'s saved posts are private"}
          </p>
        </div>
      )}
    </div>
  );
};
