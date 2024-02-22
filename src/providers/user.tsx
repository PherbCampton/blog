import {
  Dispatch,
  useState,
  useEffect,
  useContext,
  createContext,
  SetStateAction,
  PropsWithChildren,
} from "react";
import { auth, db } from "../firebase/firebase";
import { Profile } from "../components/profile-tab";
import { Loading } from "../components/loader/loading";
import { collection, getDocs } from "firebase/firestore";
import { User, onAuthStateChanged } from "firebase/auth";

interface ContextType {
  userLoading: boolean;
  allUsers: Profile[];
  currentUser: User | null;
  setCurrentUser: Dispatch<SetStateAction<User | null>>;
}

const UserContext = createContext<ContextType | null>(null);

export const UserProvider = ({ children }: PropsWithChildren) => {
  const [currentUser, setCurrentUser] =
    useState<ContextType["currentUser"]>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [userLoading, setUserLoading] = useState(true);
  const [allUsers, setAllUsers] = useState<Profile[]>([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) setCurrentUser(user);
      else setCurrentUser(null);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, [currentUser]);

  useEffect(() => {
    const getUsers = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      const usersData: Profile[] = querySnapshot.docs.map((doc) => ({
        ...(doc.data() as Profile),
        id: doc.id,
      }));
      setAllUsers(usersData);
      setUserLoading(false);
    };

    getUsers();
  }, []);

  return (
    <UserContext.Provider
      value={{ allUsers, currentUser, userLoading, setCurrentUser }}
    >
      {isLoading || userLoading ? <Loading /> : children}
    </UserContext.Provider>
  );
};

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("UserContext must be used within a UserProvider");
  }
  return context;
}
