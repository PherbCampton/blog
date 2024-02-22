import { db } from "../firebase/firebase";
import { useEffect, useState } from "react";
import { PostType } from "../components/tag-card";
import { Profile } from "../components/profile-tab";
import { collection, getDocs } from "firebase/firestore";

type DataType = {
  data: Profile[] | PostType[];
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
      const querySnapshot = await getDocs(
        collection(db, id, subCollection, collectionName)
      );

      const rawData: (Profile | PostType)[] = querySnapshot.docs.map((doc) => ({
        ...(doc.data() as Profile | PostType),
        id: doc.id,
      }));
      rawData.sort((a, b) => {
        return new Date(b.savedAt).getTime() - new Date(a.savedAt).getTime();
      });
      setData(rawData);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
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
