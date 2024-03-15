import { db } from "../firebase/firebase";
import { useEffect, useState } from "react";
import { PostType } from "../components/tag-card";
import { Profile } from "../components/profile-tab";
import { collection, getDocs } from "firebase/firestore";

type DataType = {
  data: Profile[] | PostType[];
};

export const useFetch = (collectionName: string) => {
  const [data, setData] = useState<DataType["data"]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, collectionName));
        const rawData: (Profile | PostType)[] = querySnapshot.docs.map(
          (doc) => ({
            ...(doc.data() as Profile | PostType),
            id: doc.id,
          })
        );
        rawData.sort((a, b) => {
          return (
            // @ts-ignore
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
        });
        setData(rawData as unknown as Profile[] | PostType[]);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [collectionName]);

  return {
    data,
    isLoading,
  };
};
