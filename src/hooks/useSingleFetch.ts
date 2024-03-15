import { db } from "../firebase/firebase";
import { useEffect, useState } from "react";
import { Comment } from "../components/comment";
import { PostType } from "../components/tag-card";
import { Profile } from "../components/profile-tab";
import { collection, getDocs } from "firebase/firestore";

type DataType = {
  data: (Profile | PostType | Comment)[];
};

export const useSingleFetch = (
  id: string,
  subCollection: string,
  collectionName: string
) => {
  const [data, setData] = useState<DataType["data"]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      if (subCollection) {
        const querySnapshot = await getDocs(
          collection(db, id, subCollection, collectionName)
        );

        const rawData: (Profile | PostType | Comment)[] =
          querySnapshot.docs.map((doc) => ({
            ...(doc.data() as Profile | PostType | Comment),
            id: doc.id,
          }));
        rawData.sort((a, b) => {
          return (
            new Date(b.savedAt as number).getTime() -
            new Date(a.savedAt as number).getTime()
          );
        });
        setData(rawData);
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, subCollection, collectionName]);

  const refetch = () => {
    fetchData();
  };

  return {
    data,
    refetch,
    isLoading,
  };
};
