import { userPosts } from "../../data";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useUser } from "../../providers/user";
import { useFetch } from "../../hooks/useFetch";
import { Tabs, Tab } from "../../components/tabs";
import { Interest } from "../../components/interest";
import { FeedsCard } from "../../components/feeds-card";
import { ProfileTab } from "../../components/profile-tab";
import defaultAvatar from "../../assets/default-avatar.jpg";
import { DashboardCard } from "../../components/dashboard-card";

export const Profile = () => {
  const { allUsers } = useUser();
  const { userId } = useParams();
  const { isLoading, data } = useFetch("posts");
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
          {userPosts.map((post, i) => (
            <DashboardCard
              key={i}
              editable
              title={post.title}
              description={post.description}
            />
          ))}
        </div>
      ),
    },
    {
      title: "Favorites",
      color: theme,
      content: (
        <div className="mt-10 flex flex-col gap-10">
          {data.map((post, i) => (
            <FeedsCard key={i} post={post} />
          ))}
        </div>
      ),
    },
    {
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
    },
  ];

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
                  Following (12)
                </span>
                <span className="text-gel-gray text-sm px-2 tracking-tighter">
                  Followers (43)
                </span>
              </div>
              <Tabs tabs={tabs} />
            </div>
            <aside className="block">
              <div className="sticky top-10">
                <div className="mb-4 ">
                  <img
                    alt="profile image"
                    className="rounded-full w-[100px] h-[100px] "
                    src={
                      !getUserData?.userImg
                        ? defaultAvatar
                        : getUserData?.userImg
                    }
                  />
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
