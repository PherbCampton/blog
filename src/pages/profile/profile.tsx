import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useUser } from "../../providers/user";
import { useFetch } from "../../hooks/useFetch";
import { Follow } from "../../components/follow";
import { Tabs, Tab } from "../../components/tabs";
import { Interest } from "../../components/interest";
import { UserPosts } from "../../components/user-posts";
import { ProfileTab } from "../../components/profile-tab";
import { SavedPosts } from "../../components/saved-posts";
import defaultAvatar from "../../assets/default-avatar.jpg";
import { useSingleFetch } from "../../hooks/useSingleFetch";

export const Profile = () => {
  const { currentUser, allUsers } = useUser();
  const { userId } = useParams();
  const { isLoading, data } = useFetch("posts");
  const { data: follows } = useSingleFetch("users", userId, "follows");
  const { data: followers } = useSingleFetch("users", userId, "followers");
  // const { currentUser } = useUser();

  const getUserData = allUsers.find((user) => user.userId === userId);

  const [theme, setTheme] = useState<string | undefined>(
    getUserData?.theme.value ? getUserData?.theme.value : "#efe0e0"
  );

  useEffect(() => {
    setTheme(getUserData?.theme.value);
  }, [getUserData?.theme.value]);

  const handleTheme = (theme: string) => {
    setTheme(theme);
  };

  const tabs: Tab[] = [
    {
      title: "Posts",
      color: theme,
      content: (
        <div className="mt-10 flex flex-col gap-10">
          <UserPosts getUserData={getUserData} />
        </div>
      ),
    },
    {
      title: "Saved",
      color: theme,
      content: (
        <div className="mt-10 flex flex-col gap-10">
          <SavedPosts getUserData={getUserData} />
        </div>
      ),
    },
  ];

  if (currentUser && getUserData && currentUser.uid === getUserData.userId) {
    tabs.push({
      title: "Profile",
      color: theme,
      content: (
        <div className="mt-10 flex flex-col gap-10">
          <ProfileTab
            getUserData={getUserData}
            handleProfileTheme={handleTheme}
          />
        </div>
      ),
    });
  }

  return (
    <>
      <div className="container px-5">
        <div className="mt-8 rounded-[36px] bg-gel-black px-4 pt-40 pb-16 lg:px-8">
          <div className="mt-10 grid gap-24 lg:grid-cols-3">
            <div className="col-span-2">
              <div className="border-b border-b-gel-gray pb-4 text-6xl font-semibold capitalize">
                <span className={`pr-4`} style={{ color: theme }}>
                  {getUserData?.username}
                </span>
                <span className="text-gel-gray text-sm px-2 tracking-tighter">
                  Following ({follows.length})
                </span>
                <span className="text-gel-gray text-sm px-2 tracking-tighter">
                  Followers ({followers.length})
                </span>
              </div>
              <Tabs tabs={tabs} />
            </div>
            <aside className="block">
              <div className="sticky top-10">
                <div className="mb-4 flex items-end">
                  <img
                    alt="profile image"
                    className="rounded-full w-[100px] h-[100px] object-cover "
                    src={
                      !getUserData?.userImg
                        ? defaultAvatar
                        : getUserData?.userImg
                    }
                  />
                  {currentUser.uid !== getUserData.userId && (
                    <Follow userId={getUserData?.userId} />
                  )}
                </div>

                <h3 className={`font-bold mt-1 opacity-80  `}>
                  {getUserData?.username}
                </h3>
                <h3 className={`font-bold mt-5`} style={{ color: theme }}>
                  Bio Data
                </h3>
                <span className="text-gel-primary text-sm">
                  {getUserData?.bio ||
                    "Oops! It seems I am yet to update my bio..."}
                </span>
                <h3 className={`font-bold mt-6 mb-2`} style={{ color: theme }}>
                  Interests
                </h3>
                <ul className="outline-list flex flex-col gap-3">
                  {getUserData?.interests.map((interest, i) => (
                    <Interest key={i} interest={interest.label} theme={theme} />
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};
